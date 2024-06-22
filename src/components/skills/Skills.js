import React from 'react';
import './skills.css';

const Skills = () => {
  const skills = [
    'Python', 'Agile', 'Java', 'TypeScript', 'Swift', 'SwiftUI', 'Xcode', 'C++',
    'MongoDB', 'Digital Ocean', 'Cloudflare', 'QT', 'JavaScript', 'HTML', 'CSS',
    'React', 'MySQL'
  ];

  return (
    <div className="skills-section" id="skills-section">
      <h1>Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
