import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: #0a0a0a;
`;

const HeroSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Orbitron', monospace;
`;

const IntroText = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  text-align: center;
  color: #ffffff;
  margin-bottom: 3rem;
  font-style: italic;
  line-height: 1.6;
`;

const ContentSection = styled.section`
  padding: 4rem 0;
`;

const StoryText = styled(motion.div)`
  color: #cccccc;
  line-height: 1.8;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  
  p {
    margin-bottom: 1.5rem;
  }
  
  strong {
    color: #ffffff;
    font-weight: 600;
  }
`;

const HighlightBox = styled(motion.div)`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-left: 4px solid #667eea;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const SkillCard = styled(motion.div)`
  background: #111111;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #222222;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    border-color: #667eea;
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const SkillTitle = styled.h3`
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  color: #999999;
  font-size: 0.9rem;
`;

const TimelineSection = styled.section`
  padding: 4rem 0;
  background: #111111;
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 10px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TimelineYear = styled.div`
  min-width: 100px;
  font-weight: 700;
  color: #667eea;
  font-size: 1.2rem;
`;

const TimelineContent = styled.div`
  flex: 1;
  
  h3 {
    color: #ffffff;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #cccccc;
    line-height: 1.6;
  }
`;

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
        <title>About Matt Yee - Engineer, Entrepreneur, Baseball Junkie</title>
        <meta name="description" content="From professional baseball fields to leading-edge innovation labs, Matt Yee thrives at the intersection of technology, sports, and storytelling." />
        <meta property="og:title" content="About Matt Yee" />
        <meta property="og:description" content="Engineer. Entrepreneur. Baseball Junkie. Philanthropist. Building technology that pushes boundaries." />
      </Helmet>

      <AboutContainer>
        <HeroSection>
          <Container>
            <Title
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Matt Yee
            </Title>
            <IntroText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Not quite Tony Stark — but close enough to keep things interesting.
            </IntroText>
          </Container>
        </HeroSection>

        <ContentSection>
          <Container>
            <StoryText
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p variants={itemVariants}>
                I'm <strong>Matt Yee</strong>: Engineer. Entrepreneur. Baseball Junkie. Philanthropist(ish).
              </motion.p>
              
              <motion.p variants={itemVariants}>
                By day, I lead AI/ML teams and build technology that pushes the boundaries of what's possible. 
                By night (and often weekends), I'm still chasing baseballs, building startups, and dreaming up 
                the next big thing. Somewhere in between, I find time to give back, whether it's through mentoring, 
                supporting causes close to me, or fueling friends with BBQ.
              </motion.p>

              <HighlightBox variants={itemVariants}>
                <p>
                  My journey has taken me from professional baseball fields to leading-edge innovation labs, 
                  with a few startups and wild adventures along the way (yes, Everest is on the list). 
                  I thrive at the intersection of technology, sports, and storytelling — blending the discipline 
                  of engineering with the creativity of a ballplayer.
                </p>
              </HighlightBox>

              <motion.p variants={itemVariants}>
                This site is a snapshot of that mission: <strong>to build, to play, to give back, and to live life at full throttle.</strong>
              </motion.p>
            </StoryText>

            <SkillsGrid>
              <SkillCard
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <SkillIcon>🧠</SkillIcon>
                <SkillTitle>AI/ML Innovation</SkillTitle>
                <SkillDescription>
                  Leading teams in cutting-edge machine learning and artificial intelligence
                </SkillDescription>
              </SkillCard>

              <SkillCard
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <SkillIcon>💡</SkillIcon>
                <SkillTitle>Startup Strategy</SkillTitle>
                <SkillDescription>
                  Building and scaling innovative companies from concept to reality
                </SkillDescription>
              </SkillCard>

              <SkillCard
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <SkillIcon>⚾</SkillIcon>
                <SkillTitle>Athletic Discipline</SkillTitle>
                <SkillDescription>
                  Bringing the focus and teamwork of professional sports to tech
                </SkillDescription>
              </SkillCard>

              <SkillCard
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <SkillIcon>🎯</SkillIcon>
                <SkillTitle>Leadership</SkillTitle>
                <SkillDescription>
                  Inspiring teams to achieve beyond their perceived limitations
                </SkillDescription>
              </SkillCard>
            </SkillsGrid>
          </Container>
        </ContentSection>

        <TimelineSection>
          <Container>
            <Title
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              The Journey
            </Title>
            
            <TimelineItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <TimelineYear>Present</TimelineYear>
              <TimelineContent>
                <h3>AI/ML Leadership</h3>
                <p>Leading teams in building cutting-edge AI solutions that transform industries</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <TimelineYear>Ongoing</TimelineYear>
              <TimelineContent>
                <h3>Startup Ventures</h3>
                <p>Building multiple technology startups focused on innovation and impact</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <TimelineYear>Past</TimelineYear>
              <TimelineContent>
                <h3>Professional Baseball</h3>
                <p>Competed at the highest levels, learning discipline, teamwork, and perseverance</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <TimelineYear>Future</TimelineYear>
              <TimelineContent>
                <h3>The Next Adventure</h3>
                <p>Everest? Another startup? The next breakthrough in AI? Stay tuned...</p>
              </TimelineContent>
            </TimelineItem>
          </Container>
        </TimelineSection>
      </AboutContainer>
    </>
  );
};

export default About;