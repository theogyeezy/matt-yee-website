import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useBlogPost } from '../hooks/useBlogPost';

const PostContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: #0a0a0a;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackLink = styled(Link)`
  color: #667eea;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  transition: gap 0.3s ease;
  
  &:hover {
    gap: 1rem;
  }
  
  &::before {
    content: '←';
  }
`;

const PostHeader = styled.header`
  margin-bottom: 3rem;
`;

const PostDate = styled.p`
  color: #667eea;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const PostTitle = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 3rem);
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
`;

const Author = styled.span`
  color: #cccccc;
  font-weight: 500;
`;

const ReadTime = styled.span`
  color: #999999;
  font-size: 0.9rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
`;

const PostContent = styled(motion.div)`
  color: #cccccc;
  line-height: 1.8;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  
  h2 {
    color: #ffffff;
    margin: 2rem 0 1rem;
    font-size: 1.8rem;
  }
  
  h3 {
    color: #ffffff;
    margin: 1.5rem 0 1rem;
    font-size: 1.4rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  blockquote {
    border-left: 4px solid #667eea;
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: #ffffff;
  }
  
  code {
    background: rgba(102, 126, 234, 0.1);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
  }
  
  pre {
    background: #111111;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: 1.5rem;
    
    code {
      background: none;
      padding: 0;
    }
  }
  
  a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #764ba2;
      text-decoration: underline;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 2rem 0;
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
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 2rem;
  }
`;

const ShareSection = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #333333;
  text-align: center;
`;

const ShareTitle = styled.h3`
  color: #ffffff;
  margin-bottom: 1rem;
`;

const ShareButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ShareButton = styled.a`
  padding: 0.75rem 1.5rem;
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #667eea;
    color: #ffffff;
  }
`;

const BlogPost = () => {
  const { id } = useParams();
  const { post, loading, error } = useBlogPost(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content?.split(' ').length || 0;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <PostContainer>
        <Container>
          <LoadingMessage>Loading post...</LoadingMessage>
        </Container>
      </PostContainer>
    );
  }

  if (error || !post) {
    return (
      <PostContainer>
        <Container>
          <ErrorMessage>
            <h2>Post Not Found</h2>
            <p>The blog post you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog" style={{ color: '#667eea' }}>← Back to Blog</Link>
          </ErrorMessage>
        </Container>
      </PostContainer>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(post.title);

  return (
    <>
      <Helmet>
        <title>{post.title} - Matt Yee</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content="Matt Yee" />
        <meta property="article:published_time" content={post.date} />
        {post.tags?.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Helmet>

      <PostContainer>
        <Container>
          <BackLink to="/blog">Back to Blog</BackLink>
          
          <PostHeader>
            <PostDate>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</PostDate>
            
            <PostTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {post.title}
            </PostTitle>
            
            <PostMeta>
              <Author>By Matt Yee</Author>
              <ReadTime>{calculateReadTime(post.content)}</ReadTime>
            </PostMeta>
            
            {post.tags && (
              <Tags>
                {post.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </Tags>
            )}
          </PostHeader>
          
          <PostContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <ShareSection>
            <ShareTitle>Share this post</ShareTitle>
            <ShareButtons>
              <ShareButton
                href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </ShareButton>
              <ShareButton
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </ShareButton>
            </ShareButtons>
          </ShareSection>
        </Container>
      </PostContainer>
    </>
  );
};

export default BlogPost;