import React, { useEffect, useState } from 'react';
import API from '../../../api/api';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch skills from your API
    const fetchSkills = async () => {
      try {
        const response = await API.get('/skills');
        setSkills(response.data);
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
    <div className="skills-section" id='skills'>
      <h2 className="skills-heading">SKILLS</h2>

      <div className="skills-container">
        {['Languages', 'Frontend', 'Backend', 'Database'].map((cat, index) => (
          <div key={cat} className="skills-category fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <h3>{cat.toUpperCase()}</h3>
            <p>{groupSkills(cat)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
