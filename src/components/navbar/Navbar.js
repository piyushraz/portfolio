import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setVisible(currentScrollY < lastScrollY || currentScrollY <= 50); // Shows navbar on scroll up or at the top
      setLastScrollY(currentScrollY); // Updates the last scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
