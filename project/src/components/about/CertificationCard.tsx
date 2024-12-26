import React from 'react';
import { motion } from 'framer-motion';

interface CertificationCardProps {
  title: string;
  issuer: string;
  year: string;
  index: number;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ title, issuer, year, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, rotateX: 5 }}
      className="relative p-6 rounded-xl overflow-hidden group transform perspective-1000"
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4 flex items-center justify-center">
          <span className="text-white text-xl font-bold">{index + 1}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-purple-600 font-semibold mb-1">{issuer}</p>
        <p className="text-gray-600">{year}</p>
      </motion.div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-full transform translate-x-full translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
    </motion.div>
  );
};