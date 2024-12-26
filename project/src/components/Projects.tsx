import React from 'react';
import { Section } from './ui/Section';
import { ProjectCard } from './projects/ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <Section
      className="text-white"
      id="projects"
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <h2 className="text-center mb-5 gradient-text text-4xl font-bold">Featured Projects</h2>
      <div className="row g-4">
        {projectsData.map((project, index) => (
          <div key={index} className="col-md-4">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;