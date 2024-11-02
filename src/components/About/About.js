import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <img 
          src="https://res.cloudinary.com/dor7629fe/image/upload/v1730529733/p9n5qxthju2wtprnwuiv.jpg" 
          alt="Profile" 
        />
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Motivated graduate student pursuing a Master of Engineering in Electronic and Computer Engineering at Dublin City University, specializing in IoT, wireless communication, and embedded systems. I am passionate about developing innovative IoT solutions and optimizing smart technologies.
          </p>
          <a 
            href="https://drive.google.com/uc?export=download&id=1AugDVC3YtzRzDmH88iIKnuyUqZ_Oq6ps" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-button"
          >
            Check My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
