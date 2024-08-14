import React from 'react';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="error-page-container">
      <h1 className="error-title">
        <a href="/home" className="error-link">Oops! 404</a>
      </h1>
      <p className="error-message">We can't seem to find the page you're looking for.</p>
      <p className="error-subtext">Let's get you back on track!</p>
      <div className="error-background"></div>
    </div>
  );
};

export default Error404;
