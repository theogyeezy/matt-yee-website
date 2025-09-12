import React from 'react';
import { Theme, Content } from '@carbon/react';
import NavigationCarbon from './NavigationCarbon';
import HeroSectionCarbon from './sections/HeroSectionCarbon';
import AboutSectionCarbon from './sections/AboutSectionCarbon';
import ConsultingSectionCarbon from './sections/ConsultingSectionCarbon';
import BlogSectionCarbon from './sections/BlogSectionCarbon';
import ContactSectionCarbon from './sections/ContactSectionCarbon';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const LastEdited = styled.div`
  position: fixed;
  top: 96px;
  right: 32px;
  color: #8d8d8d;
  font-size: 0.875rem;
  z-index: 100;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const Footer = styled.footer`
  background: #161616;
  color: #8d8d8d;
  text-align: center;
  padding: 2rem;
  border-top: 1px solid #393939;
  font-size: 0.875rem;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const SinglePageAppCarbon = () => {
  return (
    <>
      <Helmet>
        <title>Matt Yee - AI/ML Director, Entrepreneur, Inventor</title>
        <meta name="description" content="Matt Yee: Engineer, Entrepreneur, Inventor, and Philanthropist. Director of AI/ML pushing the limits of applied research in agentic AI from Austin, Texas." />
        <meta name="keywords" content="Matt Yee, AI ML director, artificial intelligence, machine learning, startup entrepreneur, inventor, Austin Texas, think tank, agentic AI, innovation leadership" />
        <meta property="og:title" content="Matt Yee - AI/ML Director & Inventor" />
        <meta property="og:description" content="Engineer. Entrepreneur. Inventor. Philanthropist. Building technology that bends industries from Austin, Texas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://themattyee.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Matt Yee - AI/ML Director & Inventor" />
        <meta name="twitter:description" content="Engineer, Entrepreneur, Inventor. Director of AI/ML building breakthrough technology from Austin, Texas." />
        
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://themattyee.com" />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Matt Yee",
            "jobTitle": "Director of AI/ML",
            "description": "Engineer, Entrepreneur, Inventor, and Philanthropist. Director of AI/ML pushing the limits of applied research in agentic AI.",
            "url": "https://themattyee.com",
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning", 
              "Startup Strategy",
              "Innovation Leadership",
              "Think Tank Operations",
              "Agentic AI",
              "Technology Innovation",
              "Executive Advisory",
              "Engineering Leadership"
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

      <Theme theme="g100">
        <LastEdited>Last edited: October 5, 2023</LastEdited>
        <NavigationCarbon />
        
        <Content>
          <section id="hero">
            <HeroSectionCarbon />
          </section>

          <section id="about">
            <AboutSectionCarbon />
          </section>

          <section id="consulting">
            <ConsultingSectionCarbon />
          </section>

          <section id="blog">
            <BlogSectionCarbon />
          </section>

          <section id="contact">
            <ContactSectionCarbon />
          </section>
          
          <Footer>
            © 2023 Matt Yee. All rights reserved.
          </Footer>
        </Content>
      </Theme>
    </>
  );
};

export default SinglePageAppCarbon;