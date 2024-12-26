import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ParticlesBackground from '../components/ParticlesBackground';

const Home = () => {
  return (
    <div className="bg-transparent">
      <ParticlesBackground />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;