import React, { useState, useEffect } from "react";
import "./Profile.css";
import Watchlist from "../Watchlist/Watchlist";
import { AiOutlineClose } from "react-icons/ai";

const Profile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    // Fetch the user profile
    fetch("https://sleek-tv.onrender.com/api/profiles")
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          // Assuming there's only one user profile in the response
          const userProfile = data[0];

          // Set name and email based on the fetched profile
          setName(userProfile.name || "Name not found");
          setEmail(userProfile.user.email || "Email not found");
        }
      })
      .catch(error => console.error("Error fetching profile data:", error));
  }, []);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSave = () => {
    // Logic to save changes
    console.log("Email:", email);
    console.log("Password:", password);
    // Close the popup after saving
    closePopup();
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          className="user-avatar"
          src="https://res.cloudinary.com/duicyr28v/image/upload/v1722881594/Minimalist_Avatar_-_Illustration_wjv4wp.jpg" 
          alt="User Avatar"
        />
        <div className="user-info">
          <h2>{name}</h2>
          <p>{email}</p>
          <button className="edit-profile-button" onClick={openPopup}>
            Edit Profile
          </button>
        </div>
      </div>

      {/* Watchlist Component with showEmpty set to false */}
      <Watchlist showEmpty={false} />

      {/* Popup for editing profile */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <AiOutlineClose
              className="popup-close-icon"
              onClick={closePopup}
            />
            <h2>Edit Profile</h2>
            <img
              className="popup-avatar"
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722881594/Minimalist_Avatar_-_Illustration_wjv4wp.jpg" 
              alt="User Avatar"
            />
            <input
              className="popup-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className="popup-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button className="save-button" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
