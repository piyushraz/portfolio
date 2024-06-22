import React from 'react';
import './about.css'; // Assuming you have CSS for styling

const About = () => {
  return (
    <div className="about-section">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <p>
          Hey there! I am Piyush, a student at the University of Toronto specializing in computer science. I like Python, Java, C, and Typescript. I am very open to learning new things and working on projects. Feel free to reach out at any time.
        </p>
        <br></br>
        <p>Site and Resume: <a href="https://piyush.com">https://piyush.com</a></p>
        <p>GitHub: <a href="https://github.com/piyushraz">https://github.com/piyushraz</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/piyushrazdan">https://www.linkedin.com/in/piyushrazdan</a></p>
      </div>
    </div>
  );
};

export default About;
