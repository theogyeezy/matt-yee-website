import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled(motion.div)`
  z-index: 2;
  max-width: 800px;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 8vw, 4rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Orbitron', monospace;
  font-weight: 900;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 2rem;
  color: #ffffff;
  font-style: italic;
  font-weight: 300;
  line-height: 1.4;
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  margin-bottom: 3rem;
  color: #cccccc;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;


const FloatingParticle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: float 10s infinite ease-in-out;
  
  &:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    top: 60%;
    left: 80%;
    animation-delay: 3s;
  }
  
  &:nth-child(3) {
    top: 80%;
    left: 30%;
    animation-delay: 6s;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); }
    33% { transform: translateY(-30px) translateX(30px); }
    66% { transform: translateY(30px) translateX(-30px); }
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  padding: 1rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffffff;
    background: rgba(102, 126, 234, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateX(-50%) translateY(-5px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }
`;

const ScrollText = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-family: 'Orbitron', monospace;
`;

const ScrollArrow = styled.div`
  width: 28px;
  height: 28px;
  border: 3px solid currentColor;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(45deg); }
    40% { transform: translateY(-15px) rotate(45deg); }
    60% { transform: translateY(-8px) rotate(45deg); }
  }
`;

const HeroSection = ({ onSectionClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleScrollDown = () => {
    if (onSectionClick) {
      onSectionClick('about');
    }
  };

  return (
    <HeroContainer>
      <FloatingParticle />
      <FloatingParticle />
      <FloatingParticle />
      
      <HeroContent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title variants={itemVariants}>
          MATT YEE
        </Title>
        
        <Subtitle variants={itemVariants}>
          Engineer. Entrepreneur. Athlete. Philanthropist. (Not Tony Stark)
        </Subtitle>
        
        <Description variants={itemVariants}>
          Director of AI/ML Innovation Solutions, pushing the limits of applied research in agentic AI 
          and machine learning. From Austin, Texas, building tech that bends industries and breaks barriers.
        </Description>
      </HeroContent>

      <ScrollIndicator
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
      >
        <ScrollText>Explore</ScrollText>
        <ScrollArrow />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;