import React, { useState } from "react";
import logo from "../assets/logoforkaalbetone-removebg.png";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="logo">
        <img src={logo} alt="logo" className="footer-logo"/>
      </div>

      {/* Hamburger */}
      <div className="menu-toggle" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>

        {/* Close Button */}
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </div>

        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>

        <div className="nav-dropdown">
          <a href="#cricket-id" onClick={() => setMenuOpen(false)}>Cricket ID</a>
        </div>

        <div className="nav-dropdown">
          <a href="#id-provider" onClick={() => setMenuOpen(false)}>ID Provider</a>
        </div>

        <div className="nav-dropdown">
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
        </div>

        <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>

      </nav>

    </header>
  );
}

export default Header;