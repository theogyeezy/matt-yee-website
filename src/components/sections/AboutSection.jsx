import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBrain, FaLightbulb, FaRocket, FaBullseye } from 'react-icons/fa';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  background: #111111;
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

const IntroText = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  text-align: center;
  color: #ffffff;
  margin-bottom: 3rem;
  font-style: italic;
  line-height: 1.6;
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
  background: #0a0a0a;
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
  color: #667eea;
  display: flex;
  justify-content: center;
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

const TimelineContainer = styled.div`
  margin-top: 4rem;
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

const AboutSection = () => {
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
    <AboutContainer>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Matt Yee
        </SectionTitle>
        
        <IntroText
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Not quite Tony Stark, but close enough to keep things interesting.
        </IntroText>

        <StoryText
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={itemVariants}>
            I'm <strong>Matt Yee</strong>: Engineer. Entrepreneur. Philanthropist(ish).
          </motion.p>
          
          <motion.p variants={itemVariants}>
            I run an AI/ML org that works like a think tank where bold ideas don't just sit on whiteboards, 
            they turn into real tools. From Austin, Texas, I'm pushing the limits of applied research in agentic AI 
            and machine learning, building tech that bends industries, breaks barriers, and lets me channel my 
            inner Tony Stark (minus the billionaire status). By night (and often weekends), I'm 
            building startups and dreaming up the next big thing. Somewhere in between, I find 
            time to give back, whether it's through mentoring, supporting causes close to me, or fueling friends with BBQ.
          </motion.p>

          <HighlightBox variants={itemVariants}>
            <p>
              My journey has taken me from aerospace engineering to leading-edge innovation labs, with a few startups and wild 
              adventures along the way (yes, Everest is on the list). I've learned to thrive at the intersection of technology 
              and innovation, blending the precision of engineering with entrepreneurial fearlessness.
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
            <SkillIcon><FaBrain /></SkillIcon>
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
            <SkillIcon><FaLightbulb /></SkillIcon>
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
            <SkillIcon><FaRocket /></SkillIcon>
            <SkillTitle>Innovation Strategy</SkillTitle>
            <SkillDescription>
              Transforming bold ideas into breakthrough technologies
            </SkillDescription>
          </SkillCard>

          <SkillCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <SkillIcon><FaBullseye /></SkillIcon>
            <SkillTitle>Leadership</SkillTitle>
            <SkillDescription>
              Inspiring teams to achieve beyond their perceived limitations
            </SkillDescription>
          </SkillCard>
        </SkillsGrid>

        <TimelineContainer>
          <SectionTitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Journey
          </SectionTitle>
          
          <TimelineItem
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <TimelineYear>Present</TimelineYear>
            <TimelineContent>
              <h3>Director of AI/ML</h3>
              <p>I lead an AI/ML org that runs like a think tank where bold ideas don't just live on whiteboards, 
              they become real tools. From Austin, Texas, I'm pushing the limits of applied research in agentic AI 
              and machine learning, building tech that bends industries, breaks barriers, and lets me channel my 
              inner Tony Stark (minus the billionaire status).</p>
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
              <h3>Engineering Career</h3>
              <p>My career has taken me from aerospace engineering to advanced R&D labs and internal innovation think tanks. I've contributed to projects that reached beyond our planet, worked on bold "moonshot" ideas designed to reshape the future, and helped drive research in next-generation connectivity. Along the way, I've also led engineering teams focused on cloud infrastructure, artificial intelligence, and machine learning — pushing the boundaries of what technology can deliver at scale.</p>
            </TimelineContent>
          </TimelineItem>


          <TimelineItem
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <TimelineYear>Future</TimelineYear>
            <TimelineContent>
              <h3>The Next Adventure</h3>
              <p>Everest? Another startup? The next breakthrough in AI? Stay tuned...</p>
            </TimelineContent>
          </TimelineItem>
        </TimelineContainer>
      </Container>
    </AboutContainer>
  );
};

export default AboutSection;