import React from "react";
import "./Footer.css";
import { twt, pin, lin, yt, ig, fb } from '../../assets'
 
const Footer = () => {
  return (
    <div className="footer">
		<div className="mobile-only">
			<div className="contact-section">
				<h3>Get in touch</h3>
				<p className="email">support@amrutam.co.in</p>
				<p className="address">
					Amrutam Pharmaceuticals Pvt Ltd.,
					<br />
					chitragupt ganj, Nai Sadak, Lashkar,
					<br />
					Gwalior - 474001
				</p>
				<p className="phone">+91 9713171999</p>

				<div className="social-icons">
					<a href="#" className="social-icon">
					<img src={fb} alt="Facebook" />
					</a>
					<a href="#" className="social-icon">
					<img src={ig} alt="Instagram" />
					</a>
					<a href="#" className="social-icon">
					<img src={yt} alt="YouTube" />
					</a>
					<a href="#" className="social-icon">
					<img src={twt} alt="Twitter" />
					</a>
					<a href="#" className="social-icon">
					<img src={lin} alt="LinkedIn" />
					</a>
					<a href="#" className="social-icon">
					<img src={pin} alt="Pinterest" />
					</a>
				</div>
			</div>

			<div className="newsletter-section">
			<h3>Subscribe to our Newsletter and join Amrutam Family today!</h3>
			<div className="subscribe-form">
				<input
				type="email"
				placeholder="Your Email Address"
				className="email-input"
				/>
				<button className="subscribe-button">Subscribe</button>
			</div>
			</div>
		</div>

		<div className="info-section">
			<h3 className="info">Information</h3>
			<ul>
			<li>About Us</li>
			<li>Terms and Conditions</li>
			<li>Privacy Policy</li>
			<li>Privacy Policy for Mobile Apps</li>
			<li>Shipping and Returns Policy</li>
			<li>International Delivery</li>
			<li>For Businesses, Hotels and Resorts</li>
			</ul>
		</div>
    </div>
  );
};

export default Footer;
