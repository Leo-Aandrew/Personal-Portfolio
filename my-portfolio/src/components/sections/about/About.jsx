import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        Hi, I'm <span className="highlight">Leo Aandrew</span>, a passionate and creative Full Stack Developer
        currently pursuing my final year in Computer Science and Engineering at NPR College of Engineering and
        Technology. I specialize in building responsive and user-friendly web applications using 
        <span className="highlight"> HTML</span>, <span className="highlight">CSS</span>, 
        <span className="highlight"> JavaScript</span>, and <span className="highlight">React</span>. Merging Creativity with Code to Build Unique Web Solutions.
      </p>
    </section>
  );
};

export default About;
