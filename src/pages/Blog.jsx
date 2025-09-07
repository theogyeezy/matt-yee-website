import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useBlogPosts } from '../hooks/useBlogPosts';

const BlogContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: #ffffff;
`;

const HeroSection = styled.section`
  padding: 4rem 0 2rem;
  background: #ffffff;
  border-bottom: 1px solid #e6e6e6;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  text-align: center;
  margin-bottom: 1rem;
  color: #292929;
  font-family: 'Georgia', serif;
  font-weight: 400;
  letter-spacing: -0.5px;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: #757575;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  margin-bottom: 2rem;
  font-family: 'Georgia', serif;
`;

const BlogGrid = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 3rem 0;
`;

const BlogCard = styled(motion.article)`
  background: #ffffff;
  padding: 2rem 0;
  border-bottom: 1px solid #e6e6e6;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: rgba(0, 0, 0, 0.01);
  }
`;

const BlogAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.p`
  color: #292929;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const BlogContent = styled.div`
  padding-left: 64px;
`;

const BlogDate = styled.p`
  color: #757575;
  font-size: 0.9rem;
`;

const BlogTitle = styled.h2`
  color: #292929;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  font-family: 'Georgia', serif;
  font-weight: 700;
`;

const BlogExcerpt = styled.p`
  color: #757575;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-family: 'Georgia', serif;
  font-size: 1.05rem;
`;

const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: #f2f2f2;
  color: #757575;
  padding: 0.25rem 0.75rem;
  border-radius: 3px;
  font-size: 0.85rem;
`;

const ReadTime = styled.span`
  color: #757575;
  font-size: 0.9rem;
  
  &::before {
    content: '·';
    margin: 0 0.5rem;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  color: #cccccc;
  padding: 4rem 0;
  font-size: 1.2rem;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #ff6b6b;
  padding: 4rem 0;
  font-size: 1.2rem;
`;

const NoPosts = styled.div`
  text-align: center;
  color: #cccccc;
  padding: 4rem 0;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #ffffff;
  }
  
  p {
    margin-bottom: 2rem;
  }
`;

const Blog = () => {
  const { posts, loading, error } = useBlogPosts();

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

  const getIcon = (category) => {
    const icons = {
      'Tech': '💻',
      'AI/ML': '🤖',
      'Sports': '⚾',
      'Life': '🌟',
      'Startup': '🚀',
      'Leadership': '👥',
      'default': '📝'
    };
    return icons[category] || icons['default'];
  };

  return (
    <>
      <Helmet>
        <title>Blog - Matt Yee</title>
        <meta name="description" content="Thoughts on technology, startups, baseball, and living life at full throttle. Read Matt Yee's insights on AI/ML, entrepreneurship, and more." />
        <meta property="og:title" content="Matt Yee's Blog" />
        <meta property="og:description" content="Insights on AI/ML, startups, sports, and pushing boundaries." />
      </Helmet>

      <BlogContainer>
        <HeroSection>
          <Container>
            <Title
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Thoughts & Insights
            </Title>
            <Subtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              On technology, startups, baseball, and living life at full throttle
            </Subtitle>
          </Container>
        </HeroSection>

        <Container>
          {loading && (
            <LoadingMessage>Loading posts...</LoadingMessage>
          )}

          {error && (
            <ErrorMessage>
              Unable to load blog posts. Please try again later.
            </ErrorMessage>
          )}

          {!loading && !error && posts.length === 0 && (
            <NoPosts>
              <h3>Coming Soon!</h3>
              <p>Blog posts are being prepared. Check back soon for insights on AI/ML, startups, and more.</p>
            </NoPosts>
          )}

          {!loading && !error && posts.length > 0 && (
            <motion.div 
              style={{ maxWidth: '700px', margin: '0 auto', padding: '3rem 0' }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {posts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
                    <BlogAuthor>
                      <AuthorAvatar>MY</AuthorAvatar>
                      <AuthorInfo>
                        <AuthorName>Matt Yee</AuthorName>
                        <BlogDate>
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                          <ReadTime>{post.readTime || 5} min read</ReadTime>
                        </BlogDate>
                      </AuthorInfo>
                    </BlogAuthor>
                    <BlogContent>
                      <BlogTitle>{post.title}</BlogTitle>
                      <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                      <BlogTags>
                        {post.tags?.slice(0, 3).map((tag, index) => (
                          <Tag key={index}>{tag}</Tag>
                        ))}
                      </BlogTags>
                    </BlogContent>
                  </Link>
                </BlogCard>
              ))}
            </motion.div>
          )}
        </Container>
      </BlogContainer>
    </>
  );
};

export default Blog;