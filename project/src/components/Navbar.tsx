import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter, Facebook, Terminal } from 'lucide-react';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';

const socialLinks = [
  { icon: <Github size={20} />, url: 'https://github.com/v-s-abhishek', name: 'GitHub' },
  { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/siva-abhi-shek-veera-6955a9250/', name: 'LinkedIn' },
  { icon: <Instagram size={20} />, url: 'https://www.instagram.com/rocky_abhishek_1433/', name: 'Instagram' },
  { icon: <Twitter size={20} />, url: 'https://x.com/Rocky_abhi_143', name: 'Twitter' },
  { icon: <Facebook size={20} />, url: 'https://www.facebook.com/people/Abhi-Shek/pfbid0258Y84bAkP62PvEBHNkomztCSDV4tPLjioF8u8eMJrfhPoBVE6iGamfw9CmiEfic2l/', name: 'Facebook' }
];

const Navbar = () => {
  const location = useLocation();

  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" fixed="top" className="py-3">
      <Container>
        <BsNavbar.Brand as={Link} to="/">
          <motion.div
            className="d-flex align-items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Terminal className="me-2" />
            <span className="fw-bold">VSA</span>
          </motion.div>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="navbar-nav" />
        <BsNavbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === '/'}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" active={location.pathname === '/about'}>
              About
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="nav-link d-inline-block mx-2"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;