import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ConsultingContainer = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  background: #0a0a0a;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Orbitron', monospace;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  text-align: center;
  color: #cccccc;
  margin-bottom: 3rem;
  font-style: italic;
  line-height: 1.6;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const ServiceCard = styled(motion.div)`
  background: #111111;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #222222;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    border-color: #667eea;
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-family: 'Orbitron', monospace;
`;

const ServiceDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
  font-size: 1rem;
`;

const CTAButton = styled(motion.button)`
  display: block;
  margin: 3rem auto 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  }
`;

const ConsultingSection = ({ onSectionClick }) => {
  const handleContactClick = () => {
    if (onSectionClick) {
      onSectionClick('contact');
    }
  };

  return (
    <ConsultingContainer>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Consulting Services
        </SectionTitle>
        
        <Subtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Where bold ideas turn into breakthrough solutions
        </Subtitle>

        <motion.p 
          style={{ 
            color: '#cccccc', 
            fontSize: '1.1rem', 
            lineHeight: '1.8', 
            marginBottom: '3rem', 
            textAlign: 'center' 
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          I help companies and startups navigate the intersection of <strong style={{ color: '#ffffff' }}>cutting-edge AI/ML</strong>, 
          <strong style={{ color: '#ffffff' }}> strategic innovation</strong>, and <strong style={{ color: '#ffffff' }}>scalable execution</strong>. 
          From Austin, Texas, I bring think tank-level strategy with real-world implementation experience.
        </motion.p>

        <ServiceGrid>
          <ServiceCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ServiceIcon>🧠</ServiceIcon>
            <ServiceTitle>AI/ML Strategy & Implementation</ServiceTitle>
            <ServiceDescription>
              Transform your business with custom AI/ML solutions that actually deliver ROI. 
              From strategy to deployment, I help companies build AI that works.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ServiceIcon>🚀</ServiceIcon>
            <ServiceTitle>Startup Strategy & Scaling</ServiceTitle>
            <ServiceDescription>
              Navigate the startup journey with battle-tested strategies for building, 
              scaling, and avoiding the pitfalls that kill great ideas.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ServiceIcon>💡</ServiceIcon>
            <ServiceTitle>Innovation Leadership</ServiceTitle>
            <ServiceDescription>
              Build internal innovation capabilities that consistently turn bold ideas 
              into market-changing products and services.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <ServiceIcon>🎯</ServiceIcon>
            <ServiceTitle>Executive Advisory</ServiceTitle>
            <ServiceDescription>
              Strategic guidance for executives navigating digital transformation, 
              AI adoption, and building technology-driven competitive advantages.
            </ServiceDescription>
          </ServiceCard>
        </ServiceGrid>

        <CTAButton
          onClick={handleContactClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk Strategy
        </CTAButton>
      </Container>
    </ConsultingContainer>
  );
};

export default ConsultingSection;