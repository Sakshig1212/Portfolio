// src/data.js

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const resumeData = {
  name: "Sakshi",
  title: "Software Developer & Tech Enthusiast",
  resumeUrl: "/Sakshi__Resume.pdf", // Path to your resume in the public folder
  about: "Hi! I am Sakshi, a passionate and driven Final Year computer engineering student with a strong foundation in software development, machine learning, and web technologies. My experience ranges from building end-to-end knowledge graphs at Samsung Prism to developing full-stack web applications and automated testing solutions. I thrive on solving complex problems and am constantly seeking to learn and apply new technologies to create efficient, scalable, and user-friendly solutions.",
  contact: {
    email: "sakshig2004@gmail.com",
    github: "https://github.com/Sakshig1212",
    linkedin: "https://linkedin.com/in/sakshi",
    socials: [
      { icon: FaGithub, url: "https://github.com/Sakshig1212" },
      { icon: FaLinkedin, url: "https://linkedin.com/in/sakshi-garg-ab329528b/" },
      { icon: FaEnvelope, url: "sakshig2004@gmail.com" },
    ],
  },
  education: [
    {
      institution: "Thapar Institute of Engineering and Technology, Patiala",
      degree: "B.E Computer Engineering",
      dates: "June 2022 - June 2026",
      details: "Current CGPA: 8.8/10.0",
    },
    {
      institution: "Ryan International School, Patiala",
      degree: "High School",
      dates: "Completed June 2022",
      details: "Percentage: 93.6%",
    },
  ],
  experience: [
    {
      company: "Samsung Prism",
      role: "Research Project",
      dates: "Oct 2024 - Apr 2025",
      description: "Knowledge Graph based information retrieval in variety of SQL / No SQL systems.",
      points: [
        "A 6-month research project under the RD department of Samsung Prism, focusing on Big Data and Analysis.",
        "Created an end-to-end Knowledge Graph solution by integrating Neo4j with NLP techniques and local Ollama models (e.g., Mistral) to extract and query meaningful relationships from raw data.",
      ],
    },
    {
      company: "Frugal Testing",
      role: "SDE Intern - Testing",
      dates: "June 2024 - July 2024",
      description: "Summer Internship in Hyderabad, India.",
      points: [
        "Developed automated test scripts using Selenium WebDriver and Java.",
        "Contributed to OnlineSales.ai, an ad manager offering white-labeled retail media solutions.",
        "Performed end-to-end functional and automation testing for the platform Osmos.",
        "Identified and resolved software bugs and UI/UX issues, enhancing product reliability.",
      ],
    },
  ],
  skills: {
    languages: ["C/C++", "Python", "SQL", "PL-SQL", "HTML/CSS", "JavaScript", "Java"],
    tools: ["React.js", "Node.js", "Git/GitHub", "Unix Shell", "Webpack", "Selenium", "MongoDB", "MySQL", "FastAPI", "Flask", "Flutter", "VS Code", "IntelliJ IDEA"],
    softSkills: ["Public Speaking", "Leadership", "Time Management", "Problem-Solving", "Team Work", "Coordination"],
  },
  projects: [
    {
      title: "TextInsight",
      technologies: ["React.js", "FastAPI", "T5 Model", "VS Code"],
      dates: "Expected: FEB-2025",
      description: "Built a Text Summarizer and Keyword Extractor with a user-friendly UI. Used the T5 Transformer to generate concise summaries and key insights.",
      longDescription: "TextInsight is a powerful tool designed for professionals who handle large volumes of text. It leverages the T5 Transformer model via a FastAPI backend to provide highly accurate text summarization and keyword extraction. The frontend, built with React, offers a clean and intuitive interface for users to paste text and receive instant insights, significantly boosting productivity and improving content comprehension.",
      screenshots: ["https://placehold.co/600x400/1e1e1e/03dac6?text=TextInsight+UI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Smart-Meal",
      technologies: ["Python", "Flask", "React", "OpenAI API", "MongoDB"],
      dates: "Completed: Oct 2024",
      description: "Developed a full-stack meal planner offering dynamic nutritional solutions based on dietary preferences.",
      longDescription: "Smart-Meal is an intelligent meal planning application that provides personalized dietary plans based on user preferences and nutritional goals. It integrates with the OpenAI API for natural language-based food queries and features a real-time chatbot (built with WebSockets) for user support. The backend uses Flask and MongoDB, while the frontend is a responsive interface built with React and Redux for state management.",
      screenshots: ["https://placehold.co/600x400/1e1e1e/03dac6?text=Dashboard"],
      liveUrl: "#",
      githubUrl: "https://share.google/i7P0t8IKY2XJ8N8rU",
    },
    {
      title: "Restaurant Management System",
      technologies: ["MySQL", "PL-SQL"],
      dates: "JAN-MAY 2024",
      description: "Designed a MySQL-based system for order, inventory, and billing automation with multi-user support.",
      longDescription: "This is a robust backend system designed to streamline restaurant operations. It features a comprehensive database schema in MySQL to manage orders, track inventory in real-time, and automate billing. We heavily utilized PL/SQL to create stored procedures and triggers, ensuring data integrity and optimizing the performance of complex business logic.",
      screenshots: ["https://placehold.co/600x400/1e1e1e/03dac6?text=Database+Schema"],
      liveUrl: "#",
      githubUrl: "https://share.google/VhIjOuHKY7tCXUJnX",
    },
     {
      title: "Doctor's Appointment Mobile App",
      technologies: ["Flutter", "Dart", "MySQL", "phpMyAdmin"],
      dates: "AUG 2023",
      description: "Developed a booking app with an intuitive interface for scheduling, managing, and canceling appointments.",
      longDescription: "Built with Flutter and Dart, this mobile application provides a seamless experience for patients to find doctors, view their availability, and book appointments. The app features an intuitive UI for scheduling, managing, and canceling appointments. A MySQL database, managed via phpMyAdmin, handles all user and appointment data efficiently.",
      screenshots: ["https://placehold.co/300x600/1e1e1e/03dac6?text=Booking+Screen"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  certifications: [
    {
      name: "Fundamentals of Accelerated Computing with CUDA C/C++",
      issuer: "NVIDIA DLI",
      date: "FEB 2025",
    },
  ],
};