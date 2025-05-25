import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-socials">
          <a href="https://github.com/Leo-Aandrew" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/leo-aandrew/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:andrewleo173@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Leo Aandrew. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
