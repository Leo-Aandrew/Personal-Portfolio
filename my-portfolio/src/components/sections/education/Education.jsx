import React, { useEffect, useState } from 'react';
import './Education.css';

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch('db.json');
        if (!response.ok) throw new Error('Failed to load education data');
        const data = await response.json();
        setEducationData(data.education);
      } catch (error) {
        console.error('Error fetching education data:', error);
      }
    };

    fetchEducation();
  }, []);

  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <span className="timeline-duration">{edu.duration}</span>
              <p className="timeline-institute">{edu.institution}</p>
              <p className="timeline-score">{edu.score}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
