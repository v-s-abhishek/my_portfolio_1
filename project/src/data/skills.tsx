import { Shield, Code, Database, Server } from 'lucide-react';
import { Skill } from '../types';

export const skillsData: Skill[] = [
  {
    icon: <Shield size={40} />,
    title: "Cybersecurity",
    description: "Expert in ethical hacking, penetration testing, and security auditing"
  },
  {
    icon: <Code size={40} />,
    title: "Full Stack Development",
    description: "Proficient in MERN, Python, Java, and PHP full-stack development"
  },
  {
    icon: <Database size={40} />,
    title: "Database Management",
    description: "Experience with PostgreSQL, MySQL, and MongoDB"
  },
  {
    icon: <Server size={40} />,
    title: "Backend Systems",
    description: "Strong knowledge of server architecture and API development"
  }
];