import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
  const fetchProjects = async () => {
    try {
      const response = await fetch('db.json');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setProjects(data.projects);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  fetchProjects();
}, []);

  return (
    <section className="projects-section" id='projects'>
      <h2 className="projects-heading">PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <p className="project-description">{project.description}</p>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-button">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
