// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {resumeData.experience.map((job, index) => (
          <motion.div 
            className="timeline-item" 
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>{job.company}</h3>
            <p className="timeline-role">{job.role}</p>
            <p className="timeline-dates">{job.dates}</p>
            <p>{job.description}</p>
            <ul className="timeline-points">
              {job.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Experience;