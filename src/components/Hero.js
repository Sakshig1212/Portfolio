// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
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
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {resumeData.title}
      </motion.p>
      <motion.div 
        className="hero-socials"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
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