import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  font-family: 'Orbitron', monospace;
  cursor: pointer;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.button`
  color: #ffffff;
  background: none;
  border: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
  font-size: 1rem;
  font-family: inherit;

  &:hover {
    color: #667eea;
  }

  &.active {
    color: #667eea;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #667eea, #764ba2);
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 60px;
  right: 0;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 0 0 0 10px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Navigation = ({ onSectionClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    if (onSectionClick) {
      onSectionClick(section);
    }
    setMobileMenuOpen(false);
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo onClick={() => handleNavClick('hero')}>MATT YEE</Logo>
        <NavMenu>
          <li>
            <NavLink onClick={() => handleNavClick('hero')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => handleNavClick('about')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => handleNavClick('consulting')}>
              Consulting
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => handleNavClick('blog')}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => handleNavClick('contact')}>
              Contact
            </NavLink>
          </li>
        </NavMenu>
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </NavContainer>
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
        >
          <NavLink onClick={() => handleNavClick('hero')}>
            Home
          </NavLink>
          <NavLink onClick={() => handleNavClick('about')}>
            About
          </NavLink>
          <NavLink onClick={() => handleNavClick('consulting')}>
            Consulting
          </NavLink>
          <NavLink onClick={() => handleNavClick('blog')}>
            Blog
          </NavLink>
          <NavLink onClick={() => handleNavClick('contact')}>
            Contact
          </NavLink>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navigation;