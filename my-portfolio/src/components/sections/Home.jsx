import React from 'react'
import './Home.css'
const Home = () => {
  return (
<div className="hero-section">
      <h1 className="hero-title">
        I’m <span>Leo Aandrew,</span><br /> Frontend Developer
      </h1>

      <div className="hero-buttons left">
        <a href="mailto:andrewleo173@gmail.com"><button className="hero-button">Hire Me</button></a>
      </div>

      <div className="image-wrapper">
        <div className="circle-bg"></div>
        <img src="leo_image1.jpg" alt="LEO" className="hero-image" />
      </div>

      <div className="hero-buttons right">
        <a href="leo_resume.pdf" download><button className="hero-button resume">Resume</button></a>
      </div>
    </div>

  )
}

export default Home