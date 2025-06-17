// src/App.jsx

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import './index.css';

function App() {
  // State for Theme Toggle
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme + '-mode');
  }, [theme]);

  // State for Project Modal
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="App">
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects onProjectSelect={handleProjectSelect} />
          <Skills />
          <Education />
        </main>
        <Footer />
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
}

export default App;