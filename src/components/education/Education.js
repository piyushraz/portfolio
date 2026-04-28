import React from 'react';
import Reveal from '../reveal/Reveal';
import { useTilt } from '../reveal/useTilt';
import './education.css';

const Education = () => {
  const tilt = useTilt(4);
  return (
    <div className="education-section" id="education-section">
      <Reveal as="h1">Education</Reveal>
      <div className="education-container">
        <Reveal className="education-item" delay={100} {...tilt}>
          <span className="edu-spotlight" aria-hidden="true"></span>
          <div className="education-content">
            <h2>University of Toronto</h2>
            <h3>Honours Bachelor of Science &mdash; Computer Science &amp; Geospatial Data Science</h3>
            <ul>
              <li>HBSc with Distinction.</li>
              <li>Awarded highest level entrance scholarship.</li>
            </ul>
          </div>
          <div className="education-dates">
            <p>Sep 2019 - Nov 2024</p>
          </div>
        </Reveal>
        <Reveal className="education-item" delay={200} {...tilt}>
          <span className="edu-spotlight" aria-hidden="true"></span>
          <div className="education-content">
            <h2>St. Roch Catholic Secondary School</h2>
            <h3>Ontario Secondary School Diploma (OSSD)</h3>
            <ul>
              <li>Achieved above 92% in final year grade 12 courses.</li>
              <li>Member of computer science and floor hockey clubs.</li>
            </ul>
          </div>
          <div className="education-dates">
            <p>Sep 2015 - Jun 2019</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Education;
