import React, { useState } from "react";
import "./forgotpassword.css"; // Ensure this file exists and is properly linked

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://sleek-tv.onrender.com/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Password reset link sent! Please check your email.");
        setError("");
        // Redirect to ConfirmPassword page after submitting
        setTimeout(() => {
          window.location.href = "/confirm-password";
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to send reset link. Please try again.");
        setSuccess("");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="forgotpassword-page">
      <div className="navbar">
        <nav>
          <div className="left">
            <img
              className="forgotpassword-logo"
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722794255/sleek_logo_ei9agh.svg"
              alt="SleekTV Logo"
            />
            <span className="logo-text">SleekTV</span>
          </div>
          
        </nav>
      </div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Forgot Password</h2>
          <p className="card-description">
            Enter your email below to receive a password reset link
          </p>
        </div>
        <div className="card-content">
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="button primary">
              Send Reset Link
            </button>
            {success && <p className="form-success">{success}</p>}
            {error && <p className="form-error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
