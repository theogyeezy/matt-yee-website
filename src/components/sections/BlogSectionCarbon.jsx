import React, { useEffect, useState } from 'react';
import { Grid, Column, Tile, Button, Tag, SkeletonText } from '@carbon/react';
import { ArrowRight, Calendar, Time } from '@carbon/icons-react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogContainer = styled.div`
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

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  text-align: center;
  color: #c6c6c6;
  margin-bottom: 3rem;
  font-style: italic;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const BlogTile = styled(Tile)`
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: #161616;
  border: 1px solid #393939;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(8px);
    border-color: #0f62fe;
    box-shadow: 0 4px 16px rgba(15, 98, 254, 0.2);
  }
`;

const BlogTitle = styled.h3`
  color: #f4f4f4;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const BlogExcerpt = styled.p`
  color: #c6c6c6;
  line-height: 1.6;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #8d8d8d;
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const CTAContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const BlogSectionCarbon = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data.slice(0, 3)); // Show only first 3 posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const handleBlogClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const handleViewAllClick = () => {
    navigate('/blog');
  };

  return (
    <BlogContainer>
      <Grid>
        <Column lg={{ span: 12, offset: 2 }} md={8} sm={4}>
          <SectionTitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Blog & Insights
          </SectionTitle>
          
          <Subtitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Thoughts on AI, startups, and building the future
          </Subtitle>
        </Column>

        <Column lg={{ span: 12, offset: 2 }} md={8} sm={4}>
          {loading ? (
            <>
              <BlogTile>
                <SkeletonText paragraph />
              </BlogTile>
              <BlogTile>
                <SkeletonText paragraph />
              </BlogTile>
              <BlogTile>
                <SkeletonText paragraph />
              </BlogTile>
            </>
          ) : posts.length > 0 ? (
            posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogTile onClick={() => handleBlogClick(post.id)}>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogMeta>
                    <MetaItem>
                      <Calendar size={16} />
                      {formatDate(post.date)}
                    </MetaItem>
                    <MetaItem>
                      <Time size={16} />
                      {post.readTime || '5 min read'}
                    </MetaItem>
                  </BlogMeta>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  <TagContainer>
                    {post.tags && post.tags.map((tag, idx) => (
                      <Tag key={idx} type="blue" size="sm">
                        {tag}
                      </Tag>
                    ))}
                  </TagContainer>
                </BlogTile>
              </motion.div>
            ))
          ) : (
            <BlogTile>
              <BlogTitle>Coming Soon</BlogTitle>
              <BlogExcerpt>
                I'm working on some exciting content about AI, startups, and innovation. 
                Check back soon for insights and stories from the trenches.
              </BlogExcerpt>
            </BlogTile>
          )}

          <CTAContainer>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                kind="tertiary"
                onClick={handleViewAllClick}
                renderIcon={ArrowRight}
              >
                View All Posts
              </Button>
            </motion.div>
          </CTAContainer>
        </Column>
      </Grid>
    </BlogContainer>
  );
};

export default BlogSectionCarbon;