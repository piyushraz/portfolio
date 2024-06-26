import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.pageYOffset === 0;
      setVisible(atTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${visible ? 'visible' : ''}`}>
      <ScrollLink to="about-section" smooth={true} duration={1000} className="nav-item" spy={true}>About</ScrollLink>
      <ScrollLink to="experience-section" smooth={true} duration={1000} className="nav-item" spy={true}>Experience</ScrollLink>
      <ScrollLink to="education-section" smooth={true} duration={1000} className="nav-item" spy={true}>Education</ScrollLink>
      <ScrollLink to="projects-section" smooth={true} duration={1000} className="nav-item" spy={true}>Projects</ScrollLink>
      <ScrollLink to="skills-section" smooth={true} duration={1000} className="nav-item" spy={true}>Skills</ScrollLink>
      <ScrollLink to="contact-section" smooth={true} duration={1000} className="nav-item" spy={true}>Contact</ScrollLink>
    </nav>
  );
}

export default Navbar;
