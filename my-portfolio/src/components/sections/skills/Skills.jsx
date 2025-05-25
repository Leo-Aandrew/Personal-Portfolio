import React, { useEffect, useState } from 'react';
import './Skills.css';

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
