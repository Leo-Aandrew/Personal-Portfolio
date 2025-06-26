import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        Hi, I'm <span className="highlight">Leo Aandrew</span>, a passionate and creative Full Stack Developer,
        currently pursuing my final year of a <span className="highlight">Bachelor's degree in Computer Science</span> and Engineering at NPR College of Engineering and
        Technology. I have developed strong skills in <span className="highlight">programming and web development</span>, which led me to pursue several internships.
        Through these experiences, I gained valuable insights into solving real-world problems.
        I have also completed several full-stack development projects involving <span className="highlight">frontend, backend, databases, and authentication</span>.
        I specialize in building responsive and user-friendly web applications using the
        <span className="highlight"> MERN Stack</span>, merging creativity with code to build unique web solutions.
      </p>

    </section>
  );
};

export default About;
