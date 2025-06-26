import React, { useEffect, useState } from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('db.json');
        const data = await response.json();
        setSkills(data.skills);
      } catch (error) {
        console.error('Failed to fetch skills:', error);
      }
    };

    fetchSkills();
  }, []);

  const groupSkills = (category) => {
    return skills
      .filter((skill) => skill.category === category)
      .map((skill) => skill.name)
      .join(' • ');
  };

  return (
    <div className="skills-section" id="skills">
      <h2 className="skills-heading">SKILLS</h2>

      <div className="skills-container">
        <div className="skills-category fade-in" style={{ animationDelay: `0s` }}>
          <h3>LANGUAGES</h3>
          <div className="icon-list">
            <div className="icon-item">
              <FaJava size={50} color="#f89820" title="Java" />
            </div>
          </div>
          <p>{groupSkills('Languages')}</p>
        </div>

      
        <div className="skills-category fade-in" style={{ animationDelay: `0.2s` }}>
          <h3>FRONTEND</h3>
          <div className="icon-list">
            <div className="icon-item">
              <FaReact size={50} color="#61DBFB" title="React" />        
            </div>
          </div>
          <p>{groupSkills('Frontend')}</p>
        </div>

      
        <div className="skills-category fade-in" style={{ animationDelay: `0.4s` }}>
          <h3>BACKEND</h3>
          <div className="icon-list">
            <div className="icon-item">
              <FaNodeJs size={50} color="#68A063" title="Node.js" />  
            </div>
          </div>
          <p>{groupSkills('Backend')}</p>
        </div>


        <div className="skills-category fade-in" style={{ animationDelay: `0.6s` }}>
          <h3>DATABASE</h3>
          <div className="icon-list">
            <div className="icon-item">
              <SiMongodb size={50} color="#4DB33D" title="MongoDB" />
            </div>
          </div>
          <p>{groupSkills('Database')}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
