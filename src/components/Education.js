// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Education = () => {
  return (
    <section id="education">
      <h2>Education & Certifications</h2>
      <div className="timeline">
        {resumeData.education.map((edu, index) => (
          <motion.div 
            className="timeline-item" 
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>{edu.institution}</h3>
            <p className="timeline-role">{edu.degree}</p>
            <p className="timeline-dates">{edu.dates}</p>
            <p>{edu.details}</p>
          </motion.div>
        ))}
        {/* {resumeData.certifications.map((cert, index) => (
          <motion.div 
            className="timeline-item" 
            key={`cert-${index}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>{cert.name}</h3>
            <p className="timeline-role">{cert.issuer}</p>
            <p className="timeline-dates">{cert.date}</p>
          </motion.div>
        ))} */}
      </div>
    </section>
  );
};
export default Education;