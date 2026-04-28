import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import RadialNav from './components/navbar/RadialNav';
import Background from './components/background/Background';
import Title from './components/title/Title';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = window.localStorage.getItem('pr-theme');
    if (saved === 'dark' || saved === 'light') return saved;
  } catch (e) { /* noop */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { window.localStorage.setItem('pr-theme', theme); } catch (e) { /* noop */ }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="App">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <RadialNav />
      <section id="top-section" className="full-height">
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
