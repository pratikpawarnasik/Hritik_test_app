// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Restaurant Admin Panel</h1>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Restaurant</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
