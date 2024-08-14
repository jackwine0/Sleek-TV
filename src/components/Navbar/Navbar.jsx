import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "../Search/Search"; // Import Search component
import "./Navbar.css"; // Ensure you have your styles

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbarO ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navO">
        <div className="nav-left">
          <Link to={"/home"}>
            <img
              className="nav-logo"
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722794255/sleek_logo_ei9agh.svg"
              alt="SleekTV Logo"
            />
          </Link>
          <span className="nav-logo-text">SleekTV</span>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <img
            src={
              menuOpen
                ? "https://res.cloudinary.com/duicyr28v/image/upload/v1723622152/icons8-close_k3yt2t.svg"
                : "https://res.cloudinary.com/duicyr28v/image/upload/v1723622258/icons8-hamburger_1_jsrvrg.svg"
            }
            alt="Menu Icon"
          />
        </div>
        <div className={`navlinks ${menuOpen ? "show" : ""}`}>
          <ul className="nav__links">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/browse">Browse</a>
            </li>
            <li>
              <a href="/watchlist">Watchlist</a>
            </li>
            <li>
              <a href="/downloads">Downloads</a>
            </li>
          </ul>
        </div>
        <div className="navbar__icons">
          <div className="search" onClick={toggleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="profile-avatar" onClick={toggleProfileMenu}>
            <img
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722910237/sleek2_hkvou9.svg"
              alt="profile"
            />
            {showProfileMenu && (
              <div className="profile-dropdown">
                <ul>
                  <li>
                    <a href="/profile">Profile</a>
                  </li>
                  <li>
                    <a href="/settings">Settings</a>
                  </li>
                  <li>
                    <a href="/logout">Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      {showSearch && <Search />} {/* Conditionally render Search component */}
    </div>
  );
};

export default Navbar;
