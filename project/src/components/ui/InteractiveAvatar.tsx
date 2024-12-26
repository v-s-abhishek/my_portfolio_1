import React from 'react';
import { motion } from 'framer-motion';
import { AvatarFace } from './avatar/AvatarFace';
import { AvatarGlow } from './avatar/AvatarGlow';

const InteractiveAvatar = () => {
  return (
    <motion.div
      className="avatar-container"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <AvatarGlow>
        <AvatarFace />
      </AvatarGlow>
    </motion.div>
  );
};

export default InteractiveAvatar;