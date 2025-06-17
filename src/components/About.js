// src/components/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';

// 1. This line is now active (uncommented), importing your photo.
import profilePhoto from '../assets/profile-photo.jpg'; 

const About = () => {
  // The placeholder variable that was here has been removed.

  return (
    <section id="about">
      <h2>About Me</h2>
      <motion.div 
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-image">
          {/* 2. The src attribute now uses the imported 'profilePhoto' variable. */}
          <img src={profilePhoto} alt={resumeData.name} />
        </div>
        <div className="about-text">
          <p>{resumeData.about}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;