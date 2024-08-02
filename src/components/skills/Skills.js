import React from 'react';
import './skills.css';

const Skills = () => {
  const skills = [
    'Agile', 'Ajax', 'Apache', 'ArcGIS', 'Assembly', 'Azure', 'Bash', 'Bootstrap',
    'C', 'CSS', 'Django', 'Docker', 'ETL', 'Figma',
    'Flask', 'Git', 'GitHub', 'Go', 'GCP', 'Haskell', 'HTML', 'HTML5',
    'Java', 'JavaScript', 'Jenkins', 'jQuery', 'JUnit', 'Linux', 'Node', 'NumPy',
    'PHP', 'Postgres', 'Postman API', 'Python', 'R', 'Racket', 'React', 'RESTful API',
    'SQL', 'Terraform', 'TypeScript', 'UNIX', 'XML', 'YAML'
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
