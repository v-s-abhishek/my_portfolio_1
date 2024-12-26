import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const AvatarFace = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const eyeX = useSpring(mouseX, springConfig);
  const eyeY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" ref={containerRef}>
      {/* Animated Hair */}
      <motion.path
        d="M200 80
           C 280 80, 320 120, 320 180
           Q 320 140, 280 120
           Q 240 100, 200 100
           Q 160 100, 120 120
           Q 80 140, 80 180
           C 80 120, 120 80, 200 80"
        fill="url(#gradientHair)"
        animate={{
          d: [
            "M200 80 C 280 80, 320 120, 320 180 Q 320 140, 280 120 Q 240 100, 200 100 Q 160 100, 120 120 Q 80 140, 80 180 C 80 120, 120 80, 200 80",
            "M200 80 C 280 80, 320 120, 320 180 Q 320 150, 290 130 Q 250 110, 200 110 Q 150 110, 110 130 Q 80 150, 80 180 C 80 120, 120 80, 200 80"
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Face */}
      <motion.circle
        cx="200"
        cy="220"
        r="120"
        fill="url(#gradientFace)"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Eyes */}
      <motion.g style={{ translateX: useTransform(eyeX, [-100, 100], [-5, 5]) }}>
        {/* Left Eye */}
        <circle cx="160" cy="200" r="20" fill="white" />
        <motion.circle 
          cx="160" 
          cy="200" 
          r="10" 
          fill="#000"
          style={{
            translateX: useTransform(eyeX, [-100, 100], [-4, 4]),
            translateY: useTransform(eyeY, [-100, 100], [-3, 3]),
          }}
        />
        <motion.path
          d="M140 180 Q160 170 180 180"
          stroke="#000"
          strokeWidth="3"
          fill="none"
        />

        {/* Right Eye */}
        <circle cx="240" cy="200" r="20" fill="white" />
        <motion.circle 
          cx="240" 
          cy="200" 
          r="10" 
          fill="#000"
          style={{
            translateX: useTransform(eyeX, [-100, 100], [-4, 4]),
            translateY: useTransform(eyeY, [-100, 100], [-3, 3]),
          }}
        />
        <motion.path
          d="M220 180 Q240 170 260 180"
          stroke="#000"
          strokeWidth="3"
          fill="none"
        />
      </motion.g>

      {/* Smile */}
      <motion.path
        d="M160 260 Q200 290 240 260"
        stroke="#000"
        strokeWidth="3"
        fill="none"
        animate={{
          d: [
            "M160 260 Q200 290 240 260",
            "M160 270 Q200 300 240 270"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Gradients */}
      <defs>
        <radialGradient id="gradientFace" cx="0.5" cy="0.4" r="0.5">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </radialGradient>
        <linearGradient id="gradientHair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4A90E2" />
          <stop offset="100%" stopColor="#357ABD" />
        </linearGradient>
      </defs>
    </svg>
  );
};