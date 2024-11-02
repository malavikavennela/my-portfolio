import React from 'react';
import './Skills.css';

const skillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "Python", 
  "C", 
  "Java", 
  "Verilog", 
  "MATLAB", 
  "VLSI Design", 
  "Labview",
  "Cadence"
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
