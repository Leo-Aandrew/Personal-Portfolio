import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <div className="image-wrapper">
          <div className="circle-bg"></div>
          <img src="leo_image1.jpg" alt="LEO" className="hero-image" />
        </div>
      </div>

      <div className="hero-right">
        <h1 className="hero-title">
          Hello I’m <br /><span>Leo Aandrew G,</span><br /> Frontend Developer
        </h1>

        <div className="hero-buttons">
          <a href="mailto:andrewleo173@gmail.com">
            <button className="hero-button">Hire Me</button>
          </a>
          <a href="leo_resume.pdf" download>
            <button className="hero-button resume">Resume</button>
          </a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/Leo-Aandrew" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/leo-aandrew/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="mailto:andrewleo173@gmail.com" target="_blank" rel="noopener noreferrer" >
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
