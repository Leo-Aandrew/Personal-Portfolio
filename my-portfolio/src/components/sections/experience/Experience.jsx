import React, { useEffect, useState } from 'react';
import API from '../../../api/api';
import './Experience.css';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await API.get('/experience');
        setExperienceData(res.data);
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
