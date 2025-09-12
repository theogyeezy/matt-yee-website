import React from 'react';
import { Grid, Column, Tile, Button, Form, TextInput, TextArea } from '@carbon/react';
import { Email, Location, Chat, Send } from '@carbon/icons-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  padding: 5rem 0;
  background: #161616;
  min-height: calc(100vh - 48px);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #f4f4f4;
  font-weight: 400;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  text-align: center;
  color: #c6c6c6;
  margin-bottom: 3rem;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const ContactTile = styled(Tile)`
  padding: 2rem;
  text-align: center;
  background: #262626;
  border: 1px solid #393939;
  height: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    border-color: #0f62fe;
    box-shadow: 0 8px 32px rgba(15, 98, 254, 0.2);
  }
`;

const ContactIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: #0f62fe;
`;

const ContactTitle = styled.h3`
  color: #f4f4f4;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const ContactInfo = styled.p`
  color: #c6c6c6;
  line-height: 1.6;
  font-size: 0.875rem;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const ContactLink = styled.a`
  color: #0f62fe;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: #0353e9;
    text-decoration: underline;
  }
`;

const CTASection = styled.div`
  background: #262626;
  padding: 3rem;
  border-radius: 8px;
  margin-top: 3rem;
  border: 1px solid #393939;
`;

const CTATitle = styled.h3`
  color: #f4f4f4;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const CTAText = styled.p`
  color: #c6c6c6;
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-align: center;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const CTAButtonContainer = styled.div`
  text-align: center;
`;

const ContactSectionCarbon = () => {
  return (
    <ContactContainer>
      <Grid>
        <Column lg={{ span: 12, offset: 2 }} md={8} sm={4}>
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
        </Column>
      </Grid>

      <Grid>
        <Column lg={4} md={4} sm={4} style={{ marginBottom: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ height: '100%' }}
          >
            <ContactTile>
              <ContactIcon>
                <Email size={32} />
              </ContactIcon>
              <ContactTitle>Email</ContactTitle>
              <ContactInfo>
                <ContactLink href="mailto:matt.sam.yee@gmail.com">
                  matt.sam.yee@gmail.com
                </ContactLink>
              </ContactInfo>
            </ContactTile>
          </motion.div>
        </Column>

        <Column lg={4} md={4} sm={4} style={{ marginBottom: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ height: '100%' }}
          >
            <ContactTile>
              <ContactIcon>
                <Location size={32} />
              </ContactIcon>
              <ContactTitle>Location</ContactTitle>
              <ContactInfo>
                Austin, Texas<br />
                Available for remote consulting worldwide
              </ContactInfo>
            </ContactTile>
          </motion.div>
        </Column>

        <Column lg={4} md={4} sm={4} style={{ marginBottom: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ height: '100%' }}
          >
            <ContactTile>
              <ContactIcon>
                <Chat size={32} />
              </ContactIcon>
              <ContactTitle>Consulting</ContactTitle>
              <ContactInfo>
                AI/ML Strategy • Startup Scaling<br />
                Innovation Leadership • Executive Advisory
              </ContactInfo>
            </ContactTile>
          </motion.div>
        </Column>
      </Grid>

      <Grid>
        <Column lg={{ span: 8, offset: 4 }} md={8} sm={4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <CTASection>
              <CTATitle>Ready to turn bold ideas into breakthrough solutions?</CTATitle>
              <CTAText>
                Whether you're building the next AI breakthrough, scaling a startup, or transforming 
                your organization's innovation capabilities, let's explore how we can work together.
              </CTAText>
              <CTAButtonContainer>
                <Button
                  size="lg"
                  href="mailto:matt.sam.yee@gmail.com?subject=Consulting%20Inquiry"
                  renderIcon={Send}
                >
                  Start the Conversation
                </Button>
              </CTAButtonContainer>
            </CTASection>
          </motion.div>
        </Column>
      </Grid>
    </ContactContainer>
  );
};

export default ContactSectionCarbon;