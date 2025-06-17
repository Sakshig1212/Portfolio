
// src/components/Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = ({ onProjectSelect }) => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <motion.div 
        className="projects-grid" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        transition={{ staggerChildren: 0.2 }}
      >
        {resumeData.projects.map((project, index) => {
          // Check if the URLs are valid. A simple check for "#" or an empty string.
          const isLiveDemoAvailable = project.liveUrl && project.liveUrl !== "#";
          const isGithubAvailable = project.githubUrl && project.githubUrl !== "#";

          return (
            <motion.div className="project-card" key={index} variants={cardVariants}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => <span key={i} className="tech-tag">{tech}</span>)}
              </div>
              <div className="project-links">
                <button className="project-details-btn" onClick={() => onProjectSelect(project)}>View Details</button>
                <div className="project-icon-links">
                  
                  {/* Conditionally apply the 'disabled-link' class */}
                  <a 
                    href={isGithubAvailable ? project.githubUrl : undefined} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub"
                    className={!isGithubAvailable ? 'disabled-link' : ''}
                  >
                    <FaGithub />
                  </a>
                  
                  {/* Conditionally apply the 'disabled-link' class */}
                  <a 
                    href={isLiveDemoAvailable ? project.liveUrl : undefined} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Live Demo"
                    className={!isLiveDemoAvailable ? 'disabled-link' : ''}
                  >
                    <FaExternalLinkAlt />
                  </a>

                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Projects;