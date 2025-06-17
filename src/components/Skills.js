// src/components/Skills.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Languages</h3>
          <motion.div 
            className="skills-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.05 }}
          >
            {resumeData.skills.languages.map((skill, i) => (
              <motion.span key={i} className="skill-tag" variants={tagVariants}>{skill}</motion.span>
            ))}
          </motion.div>
        </div>
        <div className="skills-category">
          <h3>Tools & Frameworks</h3>
          <motion.div 
            className="skills-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.05 }}
          >
            {resumeData.skills.tools.map((skill, i) => (
              <motion.span key={i} className="skill-tag" variants={tagVariants}>{skill}</motion.span>
            ))}
          </motion.div>
        </div>
        <div className="skills-category">
          <h3>Soft Skills</h3>
          <motion.div 
            className="skills-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.05 }}
          >
            {resumeData.skills.softSkills.map((skill, i) => (
              <motion.span key={i} className="skill-tag" variants={tagVariants}>{skill}</motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;