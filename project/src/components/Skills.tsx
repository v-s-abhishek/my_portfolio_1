import React from 'react';
import { AnimatedCard } from './ui/AnimatedCard';
import { Section } from './ui/Section';
import { skillsData } from '../data/skills';
import './styles/Skills.css';

const Skills = () => {
  return (
    <Section className="bg-light" id="skills">
      <h2 className="text-center mb-5 skills-title">Skills & Expertise</h2>
      <div className="row g-4">
        {skillsData.map((skill, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <AnimatedCard delay={index * 0.1}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center skills-card">
                  <div className="text-primary mb-3">
                    {skill.icon}
                  </div>
                  <h5 className="card-title">{skill.title}</h5>
                  <p className="card-text">{skill.description}</p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;