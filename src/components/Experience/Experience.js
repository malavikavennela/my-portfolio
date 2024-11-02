import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Work Experience</h2>
      <div className="experience-cards">
        <div className="experience-card">
          <strong>IoT Intern</strong> — SRC e-Solutions (March 2023)
          <ul>
            <li>Developed IoT-based home automation projects, improving efficiency by 25%.</li>
            <li>Deployed and tested IoT solutions in real-world scenarios, enhancing response time by 20%.</li>
          </ul>
        </div>
        <div className="experience-card">
          <strong>VLSI-DFT Internship</strong> — BIST TECHNOLOGIES (Aug - Sept 2024)
          <ul>
            <li>Engineered and tested VLSI systems, improving testing efficiency by 15%.</li>
            <li>Achieved 99% coverage in chip testing through debugging and validation processes.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
