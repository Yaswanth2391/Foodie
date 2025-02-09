import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer__content">
        <div className="footer__content__left">
          <img src={assets.logo} alt="" />
          <p>
            We pride ourselves on our commitment to sustainability and
            community. By partnering with local farmers and suppliers, we
            minimize our carbon footprint while supporting the local economy.
            Our dishes are free from artificial additives, and we offer a
            variety of options, including vegetarian, vegan, and gluten-free, to
            cater to all dietary preferences.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer__content__center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer__content__right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91 9876543210</li>
            <li>info@foodie.com</li>
            <li>Address: 23, BC Street Kakinada, Andhra Pradesh, India</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2024 Foodie. All rights reserved.
        Developed by Yaswanth Pemmadi
      </p>
    </div>
  );
};

export default Footer;
