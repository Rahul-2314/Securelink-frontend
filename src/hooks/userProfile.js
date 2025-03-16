import { useState, useEffect } from "react";
import { getUser } from "../services/api";

const isTokenExpired = (token) => {
	try {
		const payload = JSON.parse(atob(token.split(".")[1]));
		return payload.exp * 1000 < Date.now();
	} catch (error) {
		return true;
	}
};

const useUserProfile = () => {
	const [profile, setProfile] = useState({
		fullname: "",
		username: "",
		links: [],
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProfile = async () => {
			const token = localStorage.getItem("authToken");

			if (!token || isTokenExpired(token)) {
				localStorage.removeItem("authToken");
				setLoading(false);
				return;
			}

			try {
				const response = await getUser();
				setProfile({
					fullname: response.fullname,
					username: response.username,
					links: response.links,
				});
			} catch (error) {
				setError("Error fetching profile");
				localStorage.removeItem("authToken");
			} finally {
				setLoading(false);
			}
		};

		fetchProfile();
	}, []);

	return { profile, loading, error };
};

export default useUserProfile;
