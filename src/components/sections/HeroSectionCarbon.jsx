import React from 'react';
import { Grid, Column, Button } from '@carbon/react';
import { ArrowDown } from '@carbon/icons-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  min-height: calc(100vh - 48px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #161616 0%, #262626 100%);
  position: relative;
  padding: 2rem 0;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #0f62fe 0%, #8a3ffc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'IBM Plex Sans', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #f4f4f4;
  font-weight: 300;
  font-family: 'IBM Plex Sans', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  margin-bottom: 3rem;
  color: #c6c6c6;
  line-height: 1.8;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'IBM Plex Sans', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const HeroSectionCarbon = () => {
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
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <HeroContainer>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <HeroContent
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Title variants={itemVariants}>
              MATT YEE
            </Title>
            
            <Subtitle variants={itemVariants}>
              Engineer. Entrepreneur. Inventor. Philanthropist. (Not Tony Stark)
            </Subtitle>
            
            <Description variants={itemVariants}>
              Director of AI/ML, pushing the limits of applied research in agentic AI 
              and machine learning. From Austin, Texas, building tech that bends industries 
              and breaks barriers.
            </Description>
            
            <motion.div variants={itemVariants}>
              <Button 
                size="lg"
                kind="primary"
                onClick={handleScrollDown}
                renderIcon={ArrowDown}
              >
                Explore My Work
              </Button>
            </motion.div>
          </HeroContent>
        </Column>
      </Grid>
      
      <ScrollIndicator
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={handleScrollDown}
      >
        <ArrowDown size={32} style={{ color: '#8d8d8d' }} />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSectionCarbon;