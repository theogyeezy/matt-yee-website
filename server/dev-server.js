const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for development (replace with DynamoDB in production)
let blogPosts = [
  {
    id: '1',
    title: 'Building AI Systems That Actually Work',
    excerpt: 'Lessons learned from leading ML teams and shipping production AI features that scale.',
    content: `
      <p>After years of leading AI/ML teams and watching countless projects succeed (and fail), I've learned that building AI systems that actually work in production is as much about engineering discipline as it is about algorithmic sophistication.</p>
      
      <h2>The Reality Check</h2>
      <p>Most AI projects fail not because the models aren't good enough, but because teams focus on the wrong problems. They optimize for accuracy when they should optimize for reliability. They chase state-of-the-art when they should chase maintainability.</p>
      
      <blockquote>The best AI system is the one that actually ships and provides value, not the one with the highest benchmark scores.</blockquote>
      
      <h2>Key Principles</h2>
      <p>Here are the principles I've found most valuable when building production AI systems:</p>
      
      <ul>
        <li><strong>Start simple:</strong> A logistic regression that ships beats a transformer that doesn't.</li>
        <li><strong>Monitor everything:</strong> You can't improve what you don't measure.</li>
        <li><strong>Plan for failure:</strong> Every model will fail. Design for graceful degradation.</li>
        <li><strong>Iterate rapidly:</strong> Ship early, learn fast, improve constantly.</li>
      </ul>
      
      <h2>The Baseball Connection</h2>
      <p>My background in professional baseball taught me something crucial: consistency beats brilliance. A .300 hitter who shows up every day is more valuable than a .400 hitter who's injured half the season. The same applies to AI systems.</p>
      
      <p>Build systems that hit singles consistently, not systems that swing for the fences and strike out.</p>
    `,
    date: '2024-01-15T00:00:00.000Z',
    category: 'AI/ML',
    tags: ['AI', 'Machine Learning', 'Leadership', 'Engineering'],
    readTime: 5,
    author: 'Matt Yee',
    published: true
  },
  {
    id: '2',
    title: 'From Baseball to Boardrooms: Leadership Lessons',
    excerpt: 'How professional sports shaped my approach to building and leading technology teams.',
    content: `
      <p>The transition from professional baseball to leading technology teams taught me that the fundamentals of high-performance remain consistent across domains.</p>
      
      <h2>Team Chemistry Matters More Than Talent</h2>
      <p>In baseball, you can have the most talented roster on paper, but if the team chemistry is off, you won't win games. The same applies to engineering teams.</p>
      
      <p>I've seen brilliant engineers struggle in teams where communication breaks down, and I've seen average teams achieve extraordinary results because they trusted each other and communicated well.</p>
      
      <h2>Practice Like You Play</h2>
      <p>In baseball, we had a saying: "Practice like you play, and you'll play like you practice." This translates perfectly to software development.</p>
      
      <ul>
        <li>Code reviews should mirror production standards</li>
        <li>Testing environments should match production as closely as possible</li>
        <li>Team meetings should be as focused as sprint planning</li>
      </ul>
      
      <h2>Embrace Failure as Data</h2>
      <p>In baseball, failing 70% of the time makes you a Hall of Famer. In technology, every bug, every failed deployment, every missed estimate is data that makes the next attempt better.</p>
      
      <blockquote>The goal isn't to avoid failure—it's to fail fast, learn quickly, and improve continuously.</blockquote>
    `,
    date: '2024-01-10T00:00:00.000Z',
    category: 'Leadership',
    tags: ['Leadership', 'Sports', 'Team Building', 'Management'],
    readTime: 7,
    author: 'Matt Yee',
    published: true
  }
];

// Routes

// Get all published posts
app.get('/api/posts', (req, res) => {
  const publishedPosts = blogPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  
  res.json(publishedPosts);
});

// Get single post
app.get('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  res.json(post);
});

// Create new post (admin only)
app.post('/api/posts', (req, res) => {
  // Simple auth check for development
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.includes('MattYeeAdmin2024!')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  const newPost = {
    id: uuidv4(),
    ...req.body,
    date: new Date().toISOString(),
    author: 'Matt Yee'
  };
  
  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

// Update post (admin only)
app.put('/api/posts/:id', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.includes('MattYeeAdmin2024!')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  const { id } = req.params;
  const postIndex = blogPosts.findIndex(p => p.id === id);
  
  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  blogPosts[postIndex] = { ...blogPosts[postIndex], ...req.body };
  res.json(blogPosts[postIndex]);
});

// Delete post (admin only)
app.delete('/api/posts/:id', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.includes('MattYeeAdmin2024!')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  const { id } = req.params;
  const postIndex = blogPosts.findIndex(p => p.id === id);
  
  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  blogPosts.splice(postIndex, 1);
  res.status(204).send();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Development server running on http://localhost:${PORT}`);
  console.log(`📝 API endpoints available at http://localhost:${PORT}/api`);
  console.log(`🔧 Use admin password: MattYeeAdmin2024! for protected routes`);
});