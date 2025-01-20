import React from "react";
import Contact from "../contact/Contact"
import logo from "../../assets/media/172784695376073341.png"
import "./footer.css";

function Footer() {
	let getYear = () => {
		let currentYear = new Date().getFullYear();
		return currentYear;
	};
	
	return (
		<section id="footer">
			<Contact />

			{/* Footer */}
			<footer>
				<div className="footer-content">
					<div className="footer-section-brand">
						{/* <h4>SecureLinks</h4> */}
						<img src={logo} alt="logo" />
						<p>URL shortener with analytics and API provider</p>
					</div>
					<div className="footer-section">
						<h4>Company</h4>
						<ul>
							<li>About Us</li>
							<li>Services</li>
							<li>Blogs</li>
						</ul>
					</div>
					<div className="footer-section">
						<h4>Supports</h4>
						<ul>
							<li>Help</li>
							<li>Contacs Us</li>
							<li>FAQ</li>
						</ul>
					</div>
					<div className="footer-section">
						<h4>Social</h4>
						<ul>
							<li>LinkedIn</li>
							<li>Instagram</li>
							<li>Facebook</li>
						</ul>
					</div>
				</div>
				<div className="footer-bottom">
					<p>Copyright &copy; {getYear()} SecureLinks. All rights reserved</p>
					<div className="footer-links">
						<span>Cookies</span>
						<p>.</p>
						<span>Privacy & Policy</span>
					</div>
				</div>
			</footer>
		</section>
	);
}

export default Footer;
