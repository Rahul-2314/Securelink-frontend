import React from "react";
import PremiumCard from "./PremiumCard";

const Premium = () => {
	const freeFeatures = [
		{ text: "1024 GB of cloud storage", included: true },
		{ text: "Original quality video playback", included: false },
		{ text: "Cloud decompression", included: false },
		{ text: "Free of advertising", included: false },
	];

	const premiumFeatures = [
		{ text: "2048 GB of cloud storage", included: true },
		{ text: "Original quality video playback", included: true },
		{ text: "Cloud decompression", included: true },
		{ text: "Uploading of large files up to 20 GB", included: true },
		{ text: "Encrypted space", included: true },
	];

	return (
		<div className="pricing-container">
			<PremiumCard
				title="Free"
				price={0}
				oldPrice={null}
				features={freeFeatures}
				isFree={true}
			/>
			<PremiumCard
				title="Premium"
				price={349.0}
				oldPrice={580.0}
				features={premiumFeatures}
				isFree={false}
			/>

			<div className="subscription-options">
				<div className="option">Monthly ₹349.00 (40% off)</div>
				<div className="option">Yearly ₹3499.00</div>
				<div className="option">1 Month ₹449.00/month</div>
				<div className="option">1 Year ₹358.25/month</div>
				<button className="redeem-code">Redeem Code</button>
			</div>
		</div>
	);
};

export default Premium;
