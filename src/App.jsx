import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutExperience from './components/AboutExperience';
import Skills from './components/Skills';
import ProfessionalHighlights from './components/ProfessionalHighlights';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white selection:bg-purple-500 selection:text-white">
      <Navbar />
      <Hero />
      <AboutExperience />
      <Skills />
      <Projects />
      <ProfessionalHighlights />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
