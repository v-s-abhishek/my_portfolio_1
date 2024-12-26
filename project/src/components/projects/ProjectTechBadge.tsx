import React from 'react';
import { motion } from 'framer-motion';

interface ProjectTechBadgeProps {
  tech: string;
  delay?: number;
}

export const ProjectTechBadge: React.FC<ProjectTechBadgeProps> = ({ tech, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.3,
        delay,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      }}
      className="badge"
      style={{
        background: 'linear-gradient(135deg, #FF00C1 0%, #F4AC24 100%)',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        cursor: 'default',
      }}
    >
      {tech}
    </motion.span>
  );
};