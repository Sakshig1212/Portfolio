// src/components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <a href="#hero" className="nav-logo">{resumeData.name}</a>
        <div className="nav-menu">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
          <a href={resumeData.resumeUrl} download className="resume-button">Resume</a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div/><div/><div/>
        </div>
      </div>
      <ul className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href={resumeData.resumeUrl} download className="resume-button">Resume</a></li>
      </ul>
    </motion.nav>
  );
};
export default Navbar;