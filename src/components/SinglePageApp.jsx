import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Import existing page components as sections
import JarvisLoader from './JarvisLoader';
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
  scroll-snap-align: start;
`;

const ScrollContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  height: 100vh;
`;

const SinglePageApp = () => {
  const [loading, setLoading] = useState(true);
  const [jarvisComplete, setJarvisComplete] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const timer = setTimeout(() => {
      setJarvisComplete(true);
      setTimeout(() => setLoading(false), 500);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'consulting', 'blog', 'contact'];
      
      // Use different thresholds for mobile vs desktop
      const isMobile = window.innerWidth <= 768;
      const threshold = isMobile 
        ? window.innerHeight * 0.7  // More scrolling required on mobile
        : window.innerHeight * 0.5; // Less sensitive on desktop
      
      const scrollPosition = window.scrollY + threshold;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Recalculate on resize
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading) {
    return <JarvisLoader isComplete={jarvisComplete} />;
  }

  return (
    <>
      <Helmet>
        <title>Matt Yee - AI/ML Director, Former NY Mets Bullpen Catcher, Startup Entrepreneur</title>
        <meta name="description" content="Matt Yee: Director of AI/ML Innovation Solutions, former New York Mets bullpen catcher, professional baseball player with Cosmic Baseball Organization, startup entrepreneur from Austin, Texas." />
        <meta name="keywords" content="Matt Yee, AI ML director, artificial intelligence, New York Mets, bullpen catcher, Cosmic Baseball Organization, professional baseball player, startup entrepreneur, Austin Texas, innovation solutions, think tank, agentic AI" />
        <meta property="og:title" content="Matt Yee - AI/ML Innovation Director & Former Pro Baseball Player" />
        <meta property="og:description" content="From NY Mets bullpen catcher to AI/ML Innovation Director. Building technology that bends industries from Austin, Texas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themattyee.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Matt Yee - AI/ML Director & Former NY Mets Bullpen Catcher" />
        <meta name="twitter:description" content="AI/ML Innovation Director, former professional baseball player, startup entrepreneur from Austin, Texas." />
        
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://themattyee.com" />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Matt Yee",
            "jobTitle": "Director of AI/ML - Innovation Solutions",
            "description": "AI/ML Director, former New York Mets bullpen catcher, professional baseball player with Cosmic Baseball Organization, startup entrepreneur",
            "url": "https://themattyee.com",
            "alumniOf": [
              {
                "@type": "Organization",
                "name": "New York Mets",
                "description": "Major League Baseball Organization"
              },
              {
                "@type": "Organization", 
                "name": "Cosmic Baseball Organization",
                "description": "Professional Independent Baseball League"
              }
            ],
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning", 
              "Startup Strategy",
              "Innovation Leadership",
              "Professional Baseball",
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
        <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />
        
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
        </ScrollContainer>
      </AppContainer>
    </>
  );
};

export default SinglePageApp;