import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import AboutParticlesBackground from '../components/about/AboutParticlesBackground';

const About = () => {
  const internships = [
    {
      title: "Ethical Hacker",
      company: "EduSkills",
      period: "July - September 2024"
    },
    {
      title: "Cyber Security Intern",
      company: "SSB Automations Pvt Ltd",
      period: "July 2024"
    },
    {
      title: "Data Engineer",
      company: "AWS",
      period: "April - June 2024"
    },
    {
      title: "Cloud Virtual Internship",
      company: "AWS",
      period: "January - March 2024"
    }
  ];

  const certifications = [
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      year: "2024"
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024"
    },
    {
      title: "MERN Stack Development",
      issuer: "MongoDB University",
      year: "2024"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024"
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      year: "2024"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0d1117]">
      <AboutParticlesBackground />
      <Section className="py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mt-5 pt-5"
        >
          <motion.h1 
            className="text-4xl font-bold mb-12 text-center gradient-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>

          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white flex items-center">
                <GraduationCap className="mr-2" /> Education
              </h2>
              <div className="mb-4">
                <h3 className="text-xl font-medium text-white">B.Tech in Computer Science</h3>
                <p className="text-gray-300">KL University - 2020-2024</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <Briefcase className="mr-2" /> Internships
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {internships.map((internship, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-xl font-medium text-white mb-2">{internship.title}</h3>
                    <p className="text-purple-400 font-medium mb-1">{internship.company}</p>
                    <p className="text-gray-400">{internship.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <Award className="mr-2" /> Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-lg font-medium text-white mb-2">{cert.title}</h3>
                    <p className="text-purple-400 font-medium mb-1">{cert.issuer}</p>
                    <p className="text-gray-400">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default About;