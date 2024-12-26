import React from 'react';
import { motion } from 'framer-motion';

const AnimatedAvatar = () => {
  return (
    <motion.div
      className="avatar-container"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="avatar-glow"
        animate={{
          boxShadow: [
            "0 0 20px rgba(244, 172, 36, 0.3)",
            "0 0 40px rgba(255, 0, 193, 0.5)",
            "0 0 20px rgba(244, 172, 36, 0.3)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.svg
          width="400"
          height="400"
          viewBox="0 0 95 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path d="M86.4612 86.9998C76.5969 79.9696 63.0856 75.6196 48.1683 75.6196C33.273 75.6196 19.7618 79.9696 9.89746 86.9998H86.4612Z" fill="white"/>
          <path d="M90.7451 82.934C88.7898 83.1976 62.734 82.934 62.734 82.934L62.1189 80.2098L59.7461 69.4887C59.7461 69.4887 69.3468 69.972 68.7536 69.247C68.1605 68.544 67.1059 57.5153 61.7673 55.8456C56.4287 54.1759 48.1682 53.9343 48.1682 53.9343V32.9753L55.7916 27.8564C59.4825 32.1625 79.1672 43.1253 81.5619 48.376C83.9565 53.6047 93.3595 66.9402 94.2163 72.1689C95.0951 77.4196 92.7004 82.6923 90.7451 82.934Z" fill="url(#paint0_linear_3307_569)"/>
          <path style={{mixBlendMode: "multiply"}} d="M90.7449 82.9345C88.7896 83.1981 62.7338 82.9345 62.7338 82.9345L62.1187 80.2103C66.9519 80.0126 74.0261 79.6391 80.5291 79.0898C91.8214 78.1232 94.2161 72.1694 94.2161 72.1694C95.0949 77.4201 92.7002 82.6928 90.7449 82.9345Z" fill="url(#paint1_linear_3307_569)"/>
          <defs>
            <linearGradient id="paint0_linear_3307_569" x1="7.54111" y1="84.7043" x2="66.9595" y2="-24.9326" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF00C1"/>
              <stop offset="1" stopColor="#F4AC24"/>
            </linearGradient>
            <linearGradient id="paint1_linear_3307_569" x1="69.8756" y1="86.5852" x2="79.9845" y2="64.365" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F4D63B" stopOpacity="0"/>
              <stop offset="1" stopColor="#5C1CB2"/>
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
      <motion.div
        className="avatar-particles"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default AnimatedAvatar;