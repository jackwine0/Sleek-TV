import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul className="foot-links">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/help">Help Center</a>
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <img
          className="foot-logo"
          src="https://res.cloudinary.com/duicyr28v/image/upload/v1722794255/sleek_logo_ei9agh.svg"
          alt="SleekTV Logo"
        />
        <span className="nav-logo-text">SleekTV</span>
        <p>&copy; 2024</p>
      </div>
      <div className="footer-tc">
        <ul className="tc-links">
          <li>
            <a href="/terms">Terms and Conditions</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
