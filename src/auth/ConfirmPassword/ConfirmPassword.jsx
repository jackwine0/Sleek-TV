import React from "react";
import "./confirmpassword.css"; // Ensure this file exists and is properly linked

const ConfirmPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, add logic to handle password update
    // For example, call an API or display a message
    console.log("Password updated successfully!");
    // Redirect to Login page after submitting
    window.location.href = "/login";
  };

  return (
    <div className="confirmpassword-page">
      <div className="navbar">
        <nav>
          <div className="left">
            <img
              className="confirmpassword-logo"
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722794255/sleek_logo_ei9agh.svg"
              alt="SleekTV Logo"
            />
            <span className="logo-text">SleekTV</span>
          </div>
        </nav>
      </div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Reset Password</h2>
          <p className="card-description">
            Enter your new password below to reset your password
          </p>
        </div>
        <div className="card-content">
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="new-password" className="form-label">
                New Password
              </label>
              <input
                id="new-password"
                type="password"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="button primary">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
