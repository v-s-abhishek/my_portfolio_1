import React from 'react';
import { motion } from 'framer-motion';

export const ProjectOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="position-absolute inset-0"
      style={{
        background: 'radial-gradient(circle at center, rgba(255,0,193,0.1) 0%, rgba(244,172,36,0.05) 100%)',
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
};