import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src="/assets/cometchat.png" alt="CometChat Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Platform</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Developers</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="login-btn">Log in</button>
        <button className="demo-btn">Schedule a demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
