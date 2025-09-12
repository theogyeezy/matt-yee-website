import React from 'react';
import { Grid, Column, Tile, Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ConsultingContainer = styled.div`
  padding: 5rem 0;
  background: #161616;
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
  font-style: italic;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const IntroText = styled(motion.p)`
  color: #c6c6c6;
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  text-align: center;
  font-family: 'IBM Plex Sans', sans-serif;
  
  strong {
    color: #f4f4f4;
  }
`;

const ServiceTile = styled(Tile)`
  height: 100%;
  padding: 2rem;
  background: #262626;
  border: 1px solid #393939;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    border-color: #0f62fe;
    box-shadow: 0 8px 32px rgba(15, 98, 254, 0.2);
  }
`;

const ServiceTitle = styled.h3`
  color: #f4f4f4;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const ServiceDescription = styled.p`
  color: #c6c6c6;
  line-height: 1.6;
  font-size: 0.875rem;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const CTAContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const ConsultingSectionCarbon = () => {
  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ConsultingContainer>
      <Grid>
        <Column lg={{ span: 12, offset: 2 }} md={8} sm={4}>
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

          <IntroText
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I help companies and startups navigate the intersection of <strong>cutting-edge AI/ML</strong>, 
            <strong> strategic innovation</strong>, and <strong>scalable execution</strong>. 
            From Austin, Texas, I bring think tank-level strategy with real-world implementation experience.
          </IntroText>
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
            <ServiceTile>
              <ServiceTitle>AI/ML Strategy & Implementation</ServiceTitle>
              <ServiceDescription>
                Transform your business with custom AI/ML solutions that actually deliver ROI. 
                From strategy to deployment, I help companies build AI that works.
              </ServiceDescription>
            </ServiceTile>
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
            <ServiceTile>
              <ServiceTitle>Startup Strategy & Scaling</ServiceTitle>
              <ServiceDescription>
                Navigate the startup journey with battle-tested strategies for building, 
                scaling, and avoiding the pitfalls that kill great ideas.
              </ServiceDescription>
            </ServiceTile>
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
            <ServiceTile>
              <ServiceTitle>Innovation Leadership</ServiceTitle>
              <ServiceDescription>
                Build internal innovation capabilities that consistently turn bold ideas 
                into market-changing products and services.
              </ServiceDescription>
            </ServiceTile>
          </motion.div>
        </Column>

        <Column lg={4} md={4} sm={4} style={{ marginBottom: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ height: '100%' }}
          >
            <ServiceTile>
              <ServiceTitle>Executive Advisory</ServiceTitle>
              <ServiceDescription>
                Strategic guidance for executives navigating digital transformation, 
                AI adoption, and building technology-driven competitive advantages.
              </ServiceDescription>
            </ServiceTile>
          </motion.div>
        </Column>
      </Grid>

      <Grid>
        <Column lg={{ span: 12, offset: 2 }} md={8} sm={4}>
          <CTAContainer>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                onClick={handleContactClick}
                renderIcon={ArrowRight}
              >
                Let's Talk Strategy
              </Button>
            </motion.div>
          </CTAContainer>
        </Column>
      </Grid>
    </ConsultingContainer>
  );
};

export default ConsultingSectionCarbon;