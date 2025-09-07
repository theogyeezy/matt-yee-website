import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogContainer = styled.div`
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

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  text-align: center;
  color: #cccccc;
  margin-bottom: 3rem;
  font-style: italic;
  line-height: 1.6;
`;

const ComingSoon = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 10px;
  margin: 2rem 0;
`;

const ComingSoonTitle = styled.h3`
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'Orbitron', monospace;
`;

const ComingSoonText = styled.p`
  color: #cccccc;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const BlogPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const BlogCard = styled(motion.div)`
  background: #0a0a0a;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #222222;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    border-color: #667eea;
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.1);
  }
`;

const BlogTitle = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const BlogExcerpt = styled.p`
  color: #cccccc;
  line-height: 1.6;
  font-size: 0.9rem;
`;

const ViewBlogButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  }
`;

const BlogSection = () => {
  const latestPosts = [
    {
      title: "The Future of Agentic AI: Beyond Automation",
      excerpt: "Exploring how agentic AI systems will transform industries by making autonomous decisions...",
      date: "Coming Soon"
    },
    {
      title: "From Baseball to AI: Lessons in Team Performance", 
      excerpt: "What my experience as a NY Mets bullpen catcher taught me about building high-performing AI/ML teams...",
      date: "Coming Soon"
    }
  ];

  return (
    <BlogContainer>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Blog
        </SectionTitle>
        
        <Subtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Latest insights on AI/ML, startups, and innovation
        </Subtitle>

        <BlogPreview>
          {latestPosts.map((post, index) => (
            <BlogCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <BlogTitle>{post.title}</BlogTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <div style={{ fontSize: '0.8rem', color: '#667eea', marginTop: '0.5rem' }}>
                {post.date}
              </div>
            </BlogCard>
          ))}
        </BlogPreview>

        <div style={{ textAlign: 'center' }}>
          <ViewBlogButton
            href="/blog"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts
          </ViewBlogButton>
        </div>
      </Container>
    </BlogContainer>
  );
};

export default BlogSection;