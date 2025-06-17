// src/App.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';

// Particle Background Imports
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Import the slim engine

// Import All Your Components
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
  // === STATE MANAGEMENT ===
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme + '-mode');
  }, [theme]);


  // === PARTICLES.JS LOGIC (Corrected Version) ===
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // You can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const particleOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme === 'dark' ? '#ffffff' : '#212121',
      },
      links: {
        color: theme === 'dark' ? '#ffffff' : '#212121',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  };


  // === MAIN RENDER ===
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit} // Use the new useCallback function
        loaded={particlesLoaded}
        options={particleOptions}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <div className="App">
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects onProjectSelect={setSelectedProject} />
          <Skills />
          <Education />
        </main>
        <Footer />
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </>
  );
}

export default App;