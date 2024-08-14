import React, { useState } from "react";
import "./signup.css"; // Ensure this file exists and is properly linked

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const response = await fetch("https://sleek-tv.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Sign-up successful! Redirecting...");
        setError("");
        // Optionally, redirect to another page or handle post-signup actions
        setTimeout(() => {
          window.location.href = "/login"; // Redirect to login page
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Sign-up failed. Please try again.");
        setSuccess("");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="signup-page">
      <div className="navbar">
        <nav>
          <div className="left">
            <img
              className="signuplogo"
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722794255/sleek_logo_ei9agh.svg"
              alt="SleekTV Logo"
            />
            <span className="logo-text">SleekTV</span>
          </div>
        </nav>
      </div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Sign Up</h2>
          <p className="card-description">
            Create your account by filling in the information below
          </p>
        </div>
        <div className="card-content">
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="signup__input-row">
              <div className="form-group">
                <label htmlFor="first-name" className="form-label">
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="John"
                  required
                  className="form-input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name" className="form-label">
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Doe"
                  required
                  className="form-input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                required
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="button primary">
              Sign Up
            </button>
            {error && <p className="form-error">{error}</p>}
            {success && <p className="form-success">{success}</p>}
          </form>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="link">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
