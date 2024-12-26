import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  title: string;
  Icon: LucideIcon;
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

export const AboutCard: React.FC<AboutCardProps> = ({ title, Icon, delay = 0, children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white/90 backdrop-blur-xl rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ${className}`}
      whileHover={{ y: -5 }}
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-6"
      >
        <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mr-4">
          <Icon size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </motion.div>
      {children}
    </motion.div>
  );
};