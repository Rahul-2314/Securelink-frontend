import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./mylinks.css";
import { fetchAnalytics } from "../../services/api";
import userProfile from "../../hooks/userProfile";

import { Zoom, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Mylinks() {
	const [analytics, setAnalytics] = useState({});
	const { profile, loading, error } = userProfile();
	const mylinks = [...profile.links].reverse();

	const handleGetAnalytics = async (linkId) => {
		if (analytics[linkId]) {
			return;
		}

		try {
			const data = await fetchAnalytics(linkId);
			setAnalytics((prevState) => ({ ...prevState, [linkId]: data }));
		} catch (error) {
			console.log(`Error fetching analytics for link ID ${linkId}:`, error);
		}
	};

	useEffect(() => {
		if (mylinks.length > 0) {
			mylinks.forEach((linkId) => {
				if (!analytics[linkId]) {
					handleGetAnalytics(linkId);
				}
			});
		}
	}, [mylinks, analytics]);

	const copyURL = async (shortUrl) => {
		try {
			await navigator.clipboard.writeText(`${API_BASE_URL}/${shortUrl}`);
			toast.success("URL Copied Successfully");
		} catch (err) {
			console.error("Failed to copy URL", err);
		}
	};

	const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

	// if (loading) {
	// 	return (
	// 		<div className="loading_loader">
	// 			<i className="fa-solid fa-spinner fa-spin"></i>
	// 		</div>
	// 	);
	// }

	if (error) {
		return <div className="mylinks" style="text-align: center">Error: {error}</div>;
	}

	return (
		<section id="mylinks">
			<div className="mylinks">
				<h2 className="heading">---- Mylinks : Link History ----</h2>

				{loading ? (
					<div className="loading_loader">
						<i className="fa-solid fa-spinner fa-spin"></i>
					</div>
				) : (
					<div className="scrollable-container">
						<div className="scrollable-content">
							{mylinks.map((linkId, index) => {
								const analyticsData = analytics[linkId];
								return (
									<div key={index} className="content">
										<p className="sn">{index + 1}.</p>
										<span className="link">
											<a
												href={
													`${API_BASE_URL}/${analyticsData?.shortUrl}` || "#"
												}
												target="_blank"
												rel="noopener noreferrer"
											>
												<i className="fa-solid fa-lock"></i>{" "}
												{`${API_BASE_URL}/${analyticsData?.shortUrl}` || (
													<i className="fa-solid fa-spinner fa-spin"></i>
												)}
											</a>
										</span>
										<i
											className="fas fa-copy"
											onClick={() => copyURL(analyticsData?.shortUrl)}
											aria-label="Copy URL"
										></i>
										<p className="clicks">
											Total Clicks:{" "}
											{analyticsData?.clicks ?? (
												<i className="fa-solid fa-spinner fa-spin"></i>
											)}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				)}
				<strong>
					<ToastContainer position="bottom-right" transition={Zoom} />
				</strong>
			</div>
		</section>
	);
}

export default Mylinks;
