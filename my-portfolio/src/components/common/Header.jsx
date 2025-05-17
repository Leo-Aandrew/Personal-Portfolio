import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">LEO.</div>
      <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#internships" onClick={toggleMenu}>Internships</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
