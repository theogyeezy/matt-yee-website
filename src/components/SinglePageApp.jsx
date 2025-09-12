import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Import existing page components as sections
import Navigation from './Navigation';

// Section components (we'll convert existing pages to sections)
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ConsultingSection from './sections/ConsultingSection';
import BlogSection from './sections/BlogSection';
import ContactSection from './sections/ContactSection';

const AppContainer = styled.div`
  background: #0a0a0a;
  color: #ffffff;
  overflow-x: hidden;
`;

const Section = styled(motion.section)`
  min-height: 100vh;
  position: relative;
`;

const ScrollContainer = styled.div`
  overflow-y: auto;
  height: 100vh;
`;

const LastEdited = styled.div`
  position: fixed;
  top: 96px;
  right: 20px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
  z-index: 100;
  font-family: 'Orbitron', monospace;
`;

const Footer = styled.footer`
  background: #0a0a0a;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
`;

const SinglePageApp = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Remove automatic scroll detection - let users scroll freely

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Matt Yee - AI/ML Director, Startup Entrepreneur</title>
        <meta name="description" content="Matt Yee: Director of AI/ML, startup entrepreneur from Austin, Texas." />
        <meta name="keywords" content="Matt Yee, AI ML director, artificial intelligence, startup entrepreneur, Austin Texas, think tank, agentic AI" />
        <meta property="og:title" content="Matt Yee - AI/ML Innovation Director" />
        <meta property="og:description" content="AI/ML Innovation Director. Building technology that bends industries from Austin, Texas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themattyee.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Matt Yee - AI/ML Director" />
        <meta name="twitter:description" content="AI/ML Innovation Director, startup entrepreneur from Austin, Texas." />
        
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://themattyee.com" />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Matt Yee",
            "jobTitle": "Director of AI/ML",
            "description": "AI/ML Director, startup entrepreneur",
            "url": "https://themattyee.com",
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning", 
              "Startup Strategy",
              "Innovation Leadership",
              "Think Tank Operations",
              "Agentic AI"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Austin",
              "addressRegion": "Texas",
              "addressCountry": "US"
            }
          }`}
        </script>
      </Helmet>

      <AppContainer>
        <LastEdited>Last edited: October 5, 2023</LastEdited>
        <Navigation onSectionClick={scrollToSection} />
        
        <ScrollContainer>
          <Section id="hero">
            <HeroSection />
          </Section>

          <Section id="about">
            <AboutSection />
          </Section>

          <Section id="consulting">
            <ConsultingSection />
          </Section>

          <Section id="blog">
            <BlogSection />
          </Section>

          <Section id="contact">
            <ContactSection />
          </Section>
          
          <Footer>
            © 2023 Matt Yee. All rights reserved.
          </Footer>
        </ScrollContainer>
      </AppContainer>
    </>
  );
};

export default SinglePageApp;