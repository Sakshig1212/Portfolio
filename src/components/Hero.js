// src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; // Import the new component
import { resumeData } from '../data';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {resumeData.name}
      </motion.h1>

      {/* This replaces the old <p> tag */}
      <TypeAnimation
        sequence={[
          // Same String at the start will only be typed once, initially
          'Software Developer',
          1500, // wait 1.5s
          'Tech Enthusiast',
          1500,
          'Problem Solver',
          1500,
          'Lifelong Learner',
          1500,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1.5rem', display: 'inline-block', color: 'var(--font-color)' }}
        repeat={Infinity}
      />
      
      <motion.div 
        className="hero-socials"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ marginTop: '2rem' }} // Add some margin to push the socials down
      >
        {resumeData.contact.socials.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.url}>
            <social.icon />
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;