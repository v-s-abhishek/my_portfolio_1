import React from 'react';
import { motion } from 'framer-motion';

interface ProjectImageProps {
  src: string;
  alt: string;
  isHovered: boolean;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, isHovered }) => {
  return (
    <motion.div
      className="overflow-hidden position-relative"
      animate={{
        scale: isHovered ? 1.1 : 1,
        filter: isHovered ? 'brightness(0.7) contrast(1.2)' : 'brightness(1) contrast(1)',
      }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={src}
        className="card-img-top"
        alt={alt}
        style={{
          height: '250px',
          objectFit: 'cover',
          transition: 'transform 0.4s ease-out',
        }}
      />
      <motion.div
        className="position-absolute inset-0"
        animate={{
          background: isHovered 
            ? 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};