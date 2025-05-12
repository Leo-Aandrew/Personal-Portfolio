import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
         <h2 className="typing-effect">I'm a Front-End Developer</h2>
          <p>
            I'm Leo Aandrew, a passionate front-end developer skilled in creating responsive and user-friendly web applications. I love crafting beautiful UIs using HTML, CSS, JavaScript, and React.
          </p>
          <div className="about-buttons">
            <a href="https://www.linkedin.com/in/leo-aandrew/" target="_blank" rel="noreferrer" className="btn btn-linkedin">LinkedIn</a>
            <a href="leo_resume.pdf" download className="btn btn-resume">Download Resume</a>
          </div>
        </div>
        <div className="about-right">
          <img src="leo_image.jpg" alt="Leo Aandrew" />
        </div>
      </div>
    </section>
  );
};

export default About;
