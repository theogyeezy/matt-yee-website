import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  background: #0a0a0a;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const ContactCard = styled(motion.div)`
  background: #111111;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #222222;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    border-color: #667eea;
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.1);
  }
`;

const ContactIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ContactTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-family: 'Orbitron', monospace;
`;

const ContactInfo = styled.p`
  color: #cccccc;
  line-height: 1.6;
  font-size: 1rem;
`;

const ContactLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    color: #ffffff;
  }
`;

const CTASection = styled(motion.div)`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 10px;
`;

const CTATitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CTAText = styled.p`
  color: #cccccc;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const EmailButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  }
`;

const ContactSection = () => {
  return (
    <ContactContainer>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </SectionTitle>
        
        <Subtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let's discuss technology, startups, or your next big idea
        </Subtitle>

        <ContactGrid>
          <ContactCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ContactIcon>📧</ContactIcon>
            <ContactTitle>Email</ContactTitle>
            <ContactInfo>
              <ContactLink href="mailto:matt.sam.yee@gmail.com">
                matt.sam.yee@gmail.com
              </ContactLink>
            </ContactInfo>
          </ContactCard>

          <ContactCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ContactIcon>🌎</ContactIcon>
            <ContactTitle>Location</ContactTitle>
            <ContactInfo>
              Austin, Texas<br />
              Available for remote consulting worldwide
            </ContactInfo>
          </ContactCard>

          <ContactCard
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ContactIcon>💼</ContactIcon>
            <ContactTitle>Consulting</ContactTitle>
            <ContactInfo>
              AI/ML Strategy • Startup Scaling<br />
              Innovation Leadership • Executive Advisory
            </ContactInfo>
          </ContactCard>
        </ContactGrid>

        <CTASection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <CTATitle>Ready to turn bold ideas into breakthrough solutions?</CTATitle>
          <CTAText>
            Whether you're building the next AI breakthrough, scaling a startup, or transforming 
            your organization's innovation capabilities, let's explore how we can work together.
          </CTAText>
          <EmailButton
            href="mailto:matt.sam.yee@gmail.com?subject=Consulting%20Inquiry"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start the Conversation
          </EmailButton>
        </CTASection>
      </Container>
    </ContactContainer>
  );
};

export default ContactSection;