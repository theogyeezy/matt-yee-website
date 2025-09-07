import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 2;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -2px;
  color: #ffffff;
  font-family: 'Orbitron', monospace;
`;

const Tagline = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 300;
  margin-bottom: 1rem;
  opacity: 0.95;
  color: #ffffff;
`;

const SubTagline = styled(motion.p)`
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-weight: 400;
  margin-bottom: 2rem;
  opacity: 0.9;
  color: #ffffff;
  font-style: italic;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled(Link)`
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  
  &.primary {
    background: #ffffff;
    color: #764ba2;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
  }
  
  &.secondary {
    background: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;
    
    &:hover {
      background: #ffffff;
      color: #764ba2;
    }
  }
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

const FeaturesSection = styled.section`
  padding: 5rem 0;
  background: #0a0a0a;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  padding: 2rem;
  background: #111111;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #222222;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #667eea;
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 1rem;
  color: #ffffff;
`;

const FeatureDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
`;

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Matt Yee - AI/ML Director, Former NY Mets Bullpen Catcher, Startup Entrepreneur</title>
        <meta name="description" content="Matt Yee: Director of AI/ML Innovation Solutions, former New York Mets bullpen catcher, professional baseball player with Cosmic Baseball Organization, startup entrepreneur from Austin, Texas." />
        <meta name="keywords" content="Matt Yee, AI ML director, artificial intelligence, New York Mets, bullpen catcher, Cosmic Baseball Organization, professional baseball player, startup entrepreneur, Austin Texas, innovation solutions, think tank" />
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
              "Think Tank Operations"
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

      <HeroSection>
        <HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Title variants={itemVariants}>MATT YEE</Title>
          <Tagline variants={itemVariants}>
            Engineer. Entrepreneur. Athlete. Philanthropist
          </Tagline>
          <SubTagline variants={itemVariants}>
            (Not Tony Stark — but close enough to keep things interesting)
          </SubTagline>
          <motion.div variants={itemVariants}>
            <ButtonGroup>
              <Button to="/about" className="primary">
                Learn My Story
              </Button>
              <Button to="/blog" className="secondary">
                Read My Thoughts
              </Button>
            </ButtonGroup>
          </motion.div>
        </HeroContent>

        <FloatingParticle />
        <FloatingParticle />
        <FloatingParticle />
      </HeroSection>

      <FeaturesSection>
        <Container>
          <SectionTitle>What I Do</SectionTitle>
          <FeaturesGrid>
            <FeatureCard
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FeatureIcon>🤖</FeatureIcon>
              <FeatureTitle>AI/ML Leadership</FeatureTitle>
              <FeatureDescription>
                Leading teams that build cutting-edge AI solutions, pushing the boundaries of what's possible in machine learning.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FeatureIcon>🚀</FeatureIcon>
              <FeatureTitle>Startup Builder</FeatureTitle>
              <FeatureDescription>
                Building and scaling startups from idea to impact, with a focus on innovative technology solutions.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureIcon>⚾</FeatureIcon>
              <FeatureTitle>Baseball Junkie</FeatureTitle>
              <FeatureDescription>
                From professional fields to weekend leagues, baseball isn't just a game — it's a way of life.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FeatureIcon>🌟</FeatureIcon>
              <FeatureTitle>Giving Back</FeatureTitle>
              <FeatureDescription>
                Mentoring the next generation, supporting meaningful causes, and fueling friends with legendary BBQ.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
    </>
  );
};

export default Home;