import React from 'react';
import { motion } from 'framer-motion';

interface InternshipCardProps {
  title: string;
  company: string;
  period: string;
  index: number;
}

export const InternshipCard: React.FC<InternshipCardProps> = ({ title, company, period, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="relative p-6 rounded-xl overflow-hidden group"
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.2 }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-purple-600 font-semibold mb-1">{company}</p>
        <p className="text-gray-600">{period}</p>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </motion.div>
  );
};