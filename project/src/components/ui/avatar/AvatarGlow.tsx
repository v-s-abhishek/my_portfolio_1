import React from 'react';
import { motion } from 'framer-motion';

interface AvatarGlowProps {
  children: React.ReactNode;
}

export const AvatarGlow: React.FC<AvatarGlowProps> = ({ children }) => {
  return (
    <motion.div
      className="avatar-glow"
      animate={{
        boxShadow: [
          "0 0 20px rgba(74, 144, 226, 0.3)",
          "0 0 40px rgba(255, 165, 0, 0.5)",
          "0 0 20px rgba(74, 144, 226, 0.3)",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};