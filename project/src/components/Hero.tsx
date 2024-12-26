import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code } from 'lucide-react';
import { Section } from './ui/Section';
import InteractiveAvatar from './ui/InteractiveAvatar';

const Hero = () => {
  return (
    <Section
      className="hero-section min-h-screen d-flex align-items-center text-white position-relative overflow-hidden"
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-lg-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="hero-content"
            >
              <div className="title-wrapper mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="title-line"
                />
                <h1 className="display-3 fw-bold gradient-text">Veera Siva Abhishek</h1>
              </div>
              <h2 className="h3 mb-4 text-gradient">Cybersecurity Expert & Full Stack Developer</h2>
              <p className="lead mb-4 text-light-gray">
                Specializing in ethical hacking, web security, and full-stack development
                across multiple technology stacks including MERN, Python, Java, and PHP.
              </p>
              <div className="d-flex gap-3 mb-4">
                <motion.a
                  href="mailto:2200031363@kluniversity.in"
                  className="btn btn-gradient btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="me-2" /> Contact Me
                </motion.a>
                <motion.a
                  href="#projects"
                  className="btn btn-outline-light btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code className="me-2" /> View Work
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="col-lg-5 d-flex justify-content-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <InteractiveAvatar />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;