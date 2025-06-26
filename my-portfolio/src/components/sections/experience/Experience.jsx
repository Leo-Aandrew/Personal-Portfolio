import React, { useEffect, useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch('db.json');
        if (!response.ok) throw new Error('Failed to load JSON data');
        const data = await response.json();
        setExperienceData(data.experience);
      } catch (error) {
        console.error('Error fetching experience data:', error);
      }
    };

    fetchExperience();
  }, []);

  return (
    <section className="timeline-section" id="experiences">
      <h2 className="timeline-heading">EXPERIENCE</h2>
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <p className="company">{exp.company} | {exp.location}</p>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.responsibilities.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {exp.completionCertificate && (
                <a
                  href={exp.completionCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-button"
                >
                  View
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
