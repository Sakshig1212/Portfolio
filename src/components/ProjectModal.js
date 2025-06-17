// src/components/ProjectModal.jsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
        >
          <button className="modal-close-btn" onClick={onClose}><FaTimes /></button>
          
          <h2>{project.title}</h2>
          
          <div className="project-tech">
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>

          <div className="modal-links" style={{ marginBottom: '1rem', display: 'flex', gap: '1.5rem' }}>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaExternalLinkAlt /> Live Demo</a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaGithub /> View Code</a>
          </div>

          <p>{project.longDescription}</p>
          
          <div className="modal-screenshots">
            {project.screenshots.map((src, i) => (
              <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} />
            ))}
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;