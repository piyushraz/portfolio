import React from 'react';
import './skills.css';

const Skills = () => {
  const skills = [
    'Python', 'C', 'Java', 'JavaScript', 'Assembly', 'Racket', 'Haskell', 'C++',
    'MongoDB', 'PHP', 'HTML', 'CSS', 'TypeScript', 'React', 'PSQL',
    'YAML', 'Azure', 'AWS', 'Git', 'Linux', 'Bash', 'Shell'
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
