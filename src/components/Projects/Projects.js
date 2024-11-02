import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: "Smart Campus Integration",
    description: "Designed a smart campus security system utilizing ARM processors and IoT components.",
    link: "https://github.com/yourusername/smart-campus" // Replace with actual links
  },
  {
    title: "Automatic Plant Watering System",
    description: "Created an automated irrigation system using soil moisture sensors and IoT technology.",
    link: "https://github.com/yourusername/automatic-plant-watering"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
