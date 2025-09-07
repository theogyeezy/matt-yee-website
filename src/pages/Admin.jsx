import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AdminContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: #0a0a0a;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const LoginForm = styled.form`
  max-width: 400px;
  margin: 100px auto;
  background: #111111;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #222222;
`;

const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: calc(100vh - 120px);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const EditorPane = styled.div`
  background: #111111;
  border-radius: 10px;
  padding: 2rem;
  overflow-y: auto;
`;

const PreviewPane = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  overflow-y: auto;
  color: #000000;
  
  h1, h2, h3 {
    font-family: 'Georgia', serif;
    margin: 1.5rem 0 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-family: 'Georgia', serif;
  }
  
  blockquote {
    border-left: 3px solid #000;
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
  }
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Input = styled.input`
  width: 100%;
  background: #0a0a0a;
  border: 1px solid #333333;
  color: #ffffff;
  padding: 0.75rem;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  color: #ffffff;
  padding: 0.75rem 0;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #666666;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background: #0a0a0a;
  border: 1px solid #333333;
  color: #ffffff;
  padding: 0.75rem;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 400px;
  resize: vertical;
  font-family: 'Courier New', monospace;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const TagInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  button {
    background: none;
    border: none;
    color: #667eea;
    cursor: pointer;
    padding: 0;
    font-size: 1.2rem;
    line-height: 1;
  }
`;

const Select = styled.select`
  width: 100%;
  background: #0a0a0a;
  border: 1px solid #333333;
  color: #ffffff;
  padding: 0.75rem;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const Admin = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [post, setPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Tech',
    tags: [],
    published: false
  });
  const [currentTag, setCurrentTag] = useState('');

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'MattYeeAdmin2024!') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
    } else {
      alert('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    navigate('/');
  };

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && currentTag.trim()) {
      e.preventDefault();
      setPost({
        ...post,
        tags: [...post.tags, currentTag.trim()]
      });
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setPost({
      ...post,
      tags: post.tags.filter((_, index) => index !== indexToRemove)
    });
  };

  const handleSave = async () => {
    // Here you would save to DynamoDB via API Gateway
    console.log('Saving post:', post);
    alert('Post saved! (In production, this would save to DynamoDB)');
  };

  const handlePublish = async () => {
    setPost({ ...post, published: true });
    handleSave();
  };

  const renderMarkdown = (text) => {
    // Simple markdown to HTML conversion
    let html = text;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*)\*/g, '<em>$1</em>');
    
    // Paragraphs
    html = html.replace(/\n\n/g, '</p><p>');
    html = '<p>' + html + '</p>';
    
    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
    
    return html;
  };

  if (!isAuthenticated) {
    return (
      <AdminContainer>
        <Container>
          <LoginForm onSubmit={handleLogin}>
            <h2 style={{ color: '#ffffff', marginBottom: '1.5rem', textAlign: 'center' }}>
              Admin Login
            </h2>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" style={{ width: '100%' }}>
              Login
            </Button>
          </LoginForm>
        </Container>
      </AdminContainer>
    );
  }

  return (
    <AdminContainer>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <h1 style={{ color: '#ffffff' }}>Blog Editor</h1>
          <ButtonGroup>
            <Button onClick={handleSave}>Save Draft</Button>
            <Button onClick={handlePublish}>Publish</Button>
            <Button onClick={handleLogout} style={{ background: '#ff4444' }}>
              Logout
            </Button>
          </ButtonGroup>
        </div>

        <EditorContainer>
          <EditorPane>
            <TitleInput
              type="text"
              placeholder="Post title..."
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            
            <Input
              type="text"
              placeholder="Brief excerpt..."
              value={post.excerpt}
              onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
            />
            
            <Select
              value={post.category}
              onChange={(e) => setPost({ ...post, category: e.target.value })}
            >
              <option value="Tech">Tech</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Sports">Sports</option>
              <option value="Life">Life</option>
              <option value="Startup">Startup</option>
              <option value="Leadership">Leadership</option>
            </Select>
            
            <TagInput>
              {post.tags.map((tag, index) => (
                <Tag key={index}>
                  {tag}
                  <button onClick={() => handleRemoveTag(index)}>×</button>
                </Tag>
              ))}
              <Input
                type="text"
                placeholder="Add tags (press Enter)..."
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyDown={handleAddTag}
                style={{ width: '200px', marginBottom: 0 }}
              />
            </TagInput>
            
            <Textarea
              placeholder="Write your post in Markdown..."
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
            />
          </EditorPane>

          <PreviewPane>
            <h1>{post.title || 'Post Title'}</h1>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '2rem' }}>
              {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} · {Math.ceil(post.content.split(' ').length / 200)} min read
            </p>
            <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
          </PreviewPane>
        </EditorContainer>
      </Container>
    </AdminContainer>
  );
};

export default Admin;