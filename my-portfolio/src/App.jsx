import React from 'react';
import './styles/App.css';
import Header from './components/common/header/Header.jsx';
import Home from './components/sections/home/Home.jsx';
import About from './components/sections/about/About.jsx';
import Education from './components/sections/education/Education.jsx';
import Skills from './components/sections/skills/Skills.jsx';
import Experience from './components/sections/experience/Experience.jsx';
import Projects from './components/sections/project/Projects.jsx';
import Contact from './components/sections/contact/Contact.jsx';
import Footer from './components/common/footer/Footer.jsx';

function App() {
  

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
