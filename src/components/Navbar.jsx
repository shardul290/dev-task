// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src="/assets/cometchat.png" alt="CometChat Logo" />
        </div>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#">Platform</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-right">
        <button className="login-btn">Log in</button>
        <button className="demo-btn">Schedule a demo</button>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
