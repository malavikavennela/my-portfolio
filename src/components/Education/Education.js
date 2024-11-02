import React from 'react';
import './Education.css';

const educationData = [
  {
    institution: "Dublin City University (DCU)",
    degree: "MEng in Electronic and Computer Engineering",
    duration: "2024-2025 (Ongoing)",
  },
  {
    institution: "Lakireddy Bali Reddy College of Engineering",
    degree: "B.Tech in Electronics and Communication Engineering",
    duration: "2020-2024",
    gpa: "CGPA: 9.04"
  },
  {
    institution: "Narayana Junior College",
    location: "Vijayawada, India",
    degree: "Intermediate – MPC",
    duration: "2018-2020",
    gpa: "95.2%"
  },
  {
    institution: "Apollo English Medium School",
    location: "Nandigama, India",
    degree: "Secondary School Education",
    duration: "2017-2018",
    gpa: "GPA: 10"
  }
];

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className='edu-list'> {/* This will wrap the education items */}
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.institution}</h3>
            {edu.location && <p>{edu.location}</p>}
            <div className="education-details">
              <h4>{edu.degree}</h4>
              <p>{edu.duration}</p>
              {edu.gpa && <p>{edu.gpa}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
