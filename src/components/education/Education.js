import React from 'react';
import './education.css';

const Education = () => {
  return (
    <div className="education-section" id="education-section">
      <h1>Education</h1>
      <div className="education-container">
        <div className="education-item">
          <div className="education-content">
            <h2>University of Toronto</h2>
            <h3>Bachelor of Science in Computer Science</h3>
            <ul>
              <li>Current final year student at UofT's CS program.</li>
              <li>Awarded highest level entrance scholarship.</li>
            </ul>
          </div>
          <div className="education-dates">
            <p>Sept 2019 - August 2024</p>
          </div>
        </div>
        <div className="education-item">
          <div className="education-content">
            <h2>St. Roch Catholic Secondary School</h2>
            <h3>Ontario Secondary School Diploma (OSSD)</h3>
            <ul>
              <li>Achieved above a 92% in final year grade 12 courses.</li>
              <li>Member of computer science and floor hockey clubs. </li>
            </ul>
          </div>
          <div className="education-dates">
            <p>Sept 2015 - June 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
