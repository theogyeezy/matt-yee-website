import React from 'react';
import { Grid, Column, Tile, ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent, Tag } from '@carbon/react';
import { Idea, Rocket, UserMultiple, Code } from '@carbon/icons-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 5rem 0;
  background: #262626;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #f4f4f4;
  font-weight: 400;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const IntroText = styled(motion.p)`
  font-size: 1.25rem;
  text-align: center;
  color: #c6c6c6;
  margin-bottom: 3rem;
  font-style: italic;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const StoryText = styled(motion.div)`
  color: #c6c6c6;
  line-height: 1.8;
  font-size: 1rem;
  font-family: 'IBM Plex Sans', sans-serif;
  margin-bottom: 3rem;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  strong {
    color: #f4f4f4;
    font-weight: 600;
  }
`;

const SkillIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #0f62fe;
`;

const SkillTitle = styled.h3`
  color: #f4f4f4;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const SkillDescription = styled.p`
  color: #c6c6c6;
  font-size: 0.875rem;
  line-height: 1.6;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const TimelineYear = styled.div`
  font-weight: 600;
  color: #0f62fe;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const TimelineTitle = styled.h3`
  color: #f4f4f4;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const TimelineDescription = styled.p`
  color: #c6c6c6;
  line-height: 1.6;
  font-size: 0.875rem;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const AboutSectionCarbon = () => {
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
      <Grid>
        <Column lg={{ span: 12, offset: 2 }} md={8} sm={4}>
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

            <motion.p variants={itemVariants}>
              My journey has taken me from aerospace engineering to leading-edge innovation labs, with a few startups and wild 
              adventures along the way (yes, Everest is on the list). I've learned to thrive at the intersection of technology 
              and innovation, blending the precision of engineering with entrepreneurial fearlessness.
            </motion.p>

            <motion.p variants={itemVariants}>
              This site is a snapshot of that mission: <strong>to build, to play, to give back, and to live life at full throttle.</strong>
            </motion.p>
          </StoryText>
        </Column>
      </Grid>

      <Grid style={{ marginTop: '3rem' }}>
        <Column lg={4} md={4} sm={4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Tile>
              <SkillIcon>
                <Code size={32} />
              </SkillIcon>
              <SkillTitle>AI/ML Innovation</SkillTitle>
              <SkillDescription>
                Leading teams in cutting-edge machine learning and artificial intelligence
              </SkillDescription>
            </Tile>
          </motion.div>
        </Column>

        <Column lg={4} md={4} sm={4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Tile>
              <SkillIcon>
                <Idea size={32} />
              </SkillIcon>
              <SkillTitle>Startup Strategy</SkillTitle>
              <SkillDescription>
                Building and scaling innovative companies from concept to reality
              </SkillDescription>
            </Tile>
          </motion.div>
        </Column>

        <Column lg={4} md={4} sm={4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Tile>
              <SkillIcon>
                <Rocket size={32} />
              </SkillIcon>
              <SkillTitle>Innovation Strategy</SkillTitle>
              <SkillDescription>
                Transforming bold ideas into breakthrough technologies
              </SkillDescription>
            </Tile>
          </motion.div>
        </Column>

        <Column lg={4} md={4} sm={4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Tile>
              <SkillIcon>
                <UserMultiple size={32} />
              </SkillIcon>
              <SkillTitle>Leadership</SkillTitle>
              <SkillDescription>
                Inspiring teams to achieve beyond their perceived limitations
              </SkillDescription>
            </Tile>
          </motion.div>
        </Column>
      </Grid>

      <Grid style={{ marginTop: '4rem' }}>
        <Column lg={{ span: 12, offset: 2 }} md={8} sm={4}>
          <SectionTitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '2rem', marginBottom: '2rem' }}
          >
            The Journey
          </SectionTitle>
        </Column>

        <Column lg={{ span: 12, offset: 2 }} md={8} sm={4}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '1.5rem' }}
          >
            <ExpandableTile>
              <TileAboveTheFoldContent>
                <TimelineYear>Present</TimelineYear>
                <TimelineTitle>Director of AI/ML</TimelineTitle>
              </TileAboveTheFoldContent>
              <TileBelowTheFoldContent>
                <TimelineDescription>
                  I lead an AI/ML org that runs like a think tank where bold ideas don't just live on whiteboards, 
                  they become real tools. From Austin, Texas, I'm pushing the limits of applied research in agentic AI 
                  and machine learning, building tech that bends industries, breaks barriers, and lets me channel my 
                  inner Tony Stark (minus the billionaire status).
                </TimelineDescription>
              </TileBelowTheFoldContent>
            </ExpandableTile>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ marginBottom: '1.5rem' }}
          >
            <ExpandableTile>
              <TileAboveTheFoldContent>
                <TimelineYear>Ongoing</TimelineYear>
                <TimelineTitle>Startup Ventures</TimelineTitle>
              </TileAboveTheFoldContent>
              <TileBelowTheFoldContent>
                <TimelineDescription>
                  Building multiple technology startups focused on innovation and impact
                </TimelineDescription>
              </TileBelowTheFoldContent>
            </ExpandableTile>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: '1.5rem' }}
          >
            <ExpandableTile>
              <TileAboveTheFoldContent>
                <TimelineYear>Past</TimelineYear>
                <TimelineTitle>Engineering Career</TimelineTitle>
              </TileAboveTheFoldContent>
              <TileBelowTheFoldContent>
                <TimelineDescription>
                  My career has taken me from aerospace engineering to advanced R&D labs and internal innovation think tanks. 
                  I've contributed to projects that reached beyond our planet, worked on bold "moonshot" ideas designed to 
                  reshape the future, and helped drive research in next-generation connectivity. Along the way, I've also 
                  led engineering teams focused on cloud infrastructure, artificial intelligence, and machine learning, 
                  pushing the boundaries of what technology can deliver at scale.
                </TimelineDescription>
              </TileBelowTheFoldContent>
            </ExpandableTile>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <ExpandableTile>
              <TileAboveTheFoldContent>
                <TimelineYear>Future</TimelineYear>
                <TimelineTitle>The Next Adventure</TimelineTitle>
              </TileAboveTheFoldContent>
              <TileBelowTheFoldContent>
                <TimelineDescription>
                  Everest? Another startup? The next breakthrough in AI? Stay tuned...
                </TimelineDescription>
              </TileBelowTheFoldContent>
            </ExpandableTile>
          </motion.div>
        </Column>
      </Grid>
    </AboutContainer>
  );
};

export default AboutSectionCarbon;