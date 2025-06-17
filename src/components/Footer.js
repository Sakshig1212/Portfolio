// src/components/Footer.jsx

import React from 'react';
import { resumeData } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-socials">
        {resumeData.contact.socials.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
            <social.icon />
          </a>
        ))}
      </div>
      <p>© {currentYear} {resumeData.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;