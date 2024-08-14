import React, { useState } from "react";
import "./Login.css"; // Make sure this file exists and is properly linked
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch("https://sleek-tv.onrender.com/api/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Login successful! Redirecting...");
        setError("");
        // Optionally, store authentication token or user data
        localStorage.setItem("authToken", data.token); // Example token storage
        setTimeout(() => {
          navigate("/home"); // Redirect to home page
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed. Please try again.");
        setSuccess("");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="login-page">
      <div className="navbar">
        <nav>
          <div className="left">
            <img
              className="loginlogo"
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722794255/sleek_logo_ei9agh.svg"
              alt="SleekTV Logo"
            />
            <span className="logo-text">SleekTV</span>
          </div>
        </nav>
      </div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Login</h2>
          <p className="card-description">
            Enter your email below to login to your account
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
                placeholder="m@example.com"
                required
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <div className="flex items-center">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
              </div>
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
              Login
            </button>
            {error && <p className="form-error">{error}</p>}
            {success && <p className="form-success">{success}</p>}
          </form>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="link">
              Sign up
            </a>
            <a href="/forgot-password" className="link ml-auto">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
