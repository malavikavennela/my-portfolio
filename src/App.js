import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <section id="about">
        <About />
      </section>
      <hr className="divider" />
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
