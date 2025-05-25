import React, { useEffect, useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
  const fetchExperience = async () => {
    try {
      const response = await fetch('db.json');
      if (!response.ok) {
        throw new Error('Failed to load JSON data');
      }
      const data = await response.json();
      setExperienceData(data.experience); // Assuming your data.json has a "experience" key
    } catch (error) {
      console.error('Error fetching experience data:', error);
    }
  };

  fetchExperience();
}, []);

  return (
    <section className="experience-section" id='experiences'>
      <h2 className="experience-heading">EXPERIENCE</h2>
      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <p className="company">{exp.company} | {exp.location}</p>
            <p className="duration">{exp.duration}</p>
            <ul>
              {exp.responsibilities.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
