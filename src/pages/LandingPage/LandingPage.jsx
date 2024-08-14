import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./landingpage.css"; // Ensure this file exists and is properly linked

const LandingPage = () => {
  const navigate = useNavigate(); 

  return (
    <div className="landing-page">
      <div className="landing-navbar">
        <nav>
          <div className="landing-left">
            <img
              className="landing-logo"
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722794255/sleek_logo_ei9agh.svg"
              alt="SleekTV Logo"
            />
            <span className="landing-logo-text">SleekTV</span>
          </div>
          <div className="landing-right">
            <button 
              className="landing-login-button"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </nav>
      </div>
      <div className="landing-content">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Create an account to get started .
        </p>
        <div className="email-form">
         
          <button 
            className="landing-button-primary"
            onClick={() => navigate('/signup')}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="landing-footer">
        <p>
          Questions? Contact us at{" "}
          <a href="mailto:support@sleektv.com">support@sleektv.com</a>
        </p>
        <p>© 2024 SleekTV. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LandingPage;
