import React from 'react';
import './skills.css';

const Skills = () => {
  const skills = [
    'Assembly', 'AWS', 'Azure', 'Bash', 'C', 'C++', 'CSS', 'Git',
    'Haskell', 'HTML', 'Java', 'JavaScript', 'Linux', 'MongoDB',
    'PHP', 'PSQL', 'Python', 'Racket', 'React', 'Shell', 'TypeScript', 'YAML'
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
