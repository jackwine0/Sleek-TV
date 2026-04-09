import React, { useState } from "react";
import "./Login.css"; // Make sure this file exists and is properly linked
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    
    // Just log the data for now (no authentication)
    console.log("Login submitted:", {
      email,
      password,
    });
    
    // Optionally reset form
    setEmail("");
    setPassword("");
    
    navigate("/home");
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