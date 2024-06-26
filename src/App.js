import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Background from './components/background/Background';
import Title from './components/title/Title';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <section id="top-section" className="full-height">
        <Navbar />
        <Background />
        <Title />
      </section>
      <section id="about-section" className="small-height">
        <About />
      </section>
      <section id="experience-section" className="mid-height">
        <Experience />
      </section>
      <section id="education-section" className="education-height">
        <Education />
      </section>
      <section id="projects-section" className="large-height"> 
        <Projects />
      </section>
      <section id="skills-section" className="skill-height">
        <Skills />
      </section>
      <section id="contact-section" className="contact-height">
        <Contact />
      </section>
    </div>
  );
}

export default App;
