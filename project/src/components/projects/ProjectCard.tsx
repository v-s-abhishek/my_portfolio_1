import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types';
import { ProjectImage } from './ProjectImage';
import { ProjectTechBadge } from './ProjectTechBadge';
import { ProjectOverlay } from './ProjectOverlay';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="h-100"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="card h-100 position-relative overflow-hidden"
        animate={{
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered 
            ? '0 10px 30px -10px rgba(0,0,0,0.5)' 
            : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <ProjectImage src={project.image} alt={project.title} isHovered={isHovered} />
        
        <AnimatePresence>
          {isHovered && <ProjectOverlay />}
        </AnimatePresence>

        <motion.div 
          className="card-body position-relative z-10"
          animate={{
            background: isHovered 
              ? 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%)'
              : 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h5 
            className="card-title gradient-text font-bold text-xl mb-3"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ 
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            {project.title}
          </motion.h5>
          <motion.p 
            className="card-text text-light-gray mb-4"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {project.description}
          </motion.p>
          <motion.div 
            className="d-flex flex-wrap gap-2 mb-4"
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
            transition={{ 
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            {project.tech.map((tech, i) => (
              <ProjectTechBadge key={i} tech={tech} delay={i * 0.1} />
            ))}
          </motion.div>
          {project.githubUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.2,
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <motion.a
                href={project.githubUrl}
                className="btn btn-gradient"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="me-2" size={18} /> View Code
              </motion.a>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};