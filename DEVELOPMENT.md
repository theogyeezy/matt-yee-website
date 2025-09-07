# Development Guide

## Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/theogyeezy/matt-yee-website.git
cd matt-yee-website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env
```

4. **Start the development environment:**
```bash
npm run dev
```

This will start both the React frontend (port 5173) and the local API server (port 3001).

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:client` - Start only the React frontend
- `npm run dev:server` - Start only the local API server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to AWS

## Local Development Environment

### Frontend (React + Vite)
- **URL**: http://localhost:5173
- **Hot reload**: Enabled
- **Source maps**: Enabled in development

### Backend (Express API)
- **URL**: http://localhost:3001
- **API Base**: http://localhost:3001/api
- **Health Check**: http://localhost:3001/api/health

### Available API Endpoints

- `GET /api/posts` - Get all published blog posts
- `GET /api/posts/:id` - Get a specific blog post
- `POST /api/posts` - Create new post (admin only)
- `PUT /api/posts/:id` - Update post (admin only)
- `DELETE /api/posts/:id` - Delete post (admin only)

### Admin Authentication

For local development, the admin password is: `MattYeeAdmin2024!`

**Admin Panel Access:**
1. Navigate to http://localhost:5173/admin
2. Enter the password
3. Use the blog editor to create/edit posts

## Project Structure

```
matt-yee-website/
├── src/
│   ├── components/
│   │   ├── JarvisLoader.jsx    # Iron Man-style loading animation
│   │   └── Navigation.jsx      # Site navigation
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── About.jsx          # About Matt
│   │   ├── Blog.jsx           # Blog listing (Medium-style)
│   │   ├── BlogPost.jsx       # Individual blog post
│   │   ├── Contact.jsx        # Contact form
│   │   └── Admin.jsx          # Hidden admin panel
│   ├── hooks/
│   │   ├── useBlogPosts.js    # Fetch blog posts
│   │   └── useBlogPost.js     # Fetch single post
│   └── styles/
│       └── global.css         # Global styles
├── server/
│   └── dev-server.js          # Local API server
├── aws/
│   └── cloudformation.yaml   # AWS infrastructure
└── deploy.sh                 # Deployment script
```

## Environment Variables

### Development (.env)
```bash
VITE_API_URL=http://localhost:3001/api
VITE_DEV_MODE=true
VITE_ADMIN_PASSWORD=MattYeeAdmin2024!
```

### Production
```bash
VITE_API_URL=https://your-api.execute-api.region.amazonaws.com/prod
VITE_DEV_MODE=false
AWS_REGION=us-east-1
AWS_S3_BUCKET=matt-yee-website
CLOUDFRONT_DISTRIBUTION_ID=your-distribution-id
```

## Testing the Blog Functionality

### Create a New Blog Post

1. Start the development server: `npm run dev`
2. Navigate to http://localhost:5173/admin
3. Login with password: `MattYeeAdmin2024!`
4. Fill out the blog editor:
   - **Title**: Your post title
   - **Excerpt**: Brief description
   - **Category**: Select from dropdown
   - **Tags**: Press Enter after each tag
   - **Content**: Write in Markdown format
5. Click "Save Draft" or "Publish"

### View Blog Posts

1. Navigate to http://localhost:5173/blog
2. See the Medium-style listing
3. Click on any post to view the full article

### API Testing

Test the API directly:

```bash
# Get all posts
curl http://localhost:3001/api/posts

# Get specific post
curl http://localhost:3001/api/posts/1

# Create new post (requires auth)
curl -X POST http://localhost:3001/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer MattYeeAdmin2024!" \
  -d '{
    "title": "Test Post",
    "excerpt": "This is a test",
    "content": "Full content here",
    "category": "Tech",
    "tags": ["Test", "Development"],
    "published": true
  }'
```

## Styling Guide

The website uses a dual theme approach:

### Main Site Theme
- **Background**: Dark (#0a0a0a)
- **Text**: White (#ffffff)
- **Accent**: Purple gradient (#667eea to #764ba2)
- **Font**: Inter + Orbitron for headers

### Blog Theme (Medium-style)
- **Background**: White (#ffffff)
- **Text**: Dark gray (#292929)
- **Body text**: Medium gray (#757575)
- **Font**: Georgia serif for readability

## Jarvis Animation

The opening animation includes:
- Arc reactor with rotating rings
- HUD elements that fade in
- Scan line animation
- System initialization text
- Smooth transition to main site

**Customization:**
- Edit `src/components/JarvisLoader.jsx`
- Modify timing in `src/App.jsx` (currently 4 seconds)
- Disable for admin route

## Troubleshooting

### Port Already in Use
```bash
# Kill processes on ports 3001 and 5173
lsof -ti:3001 | xargs kill -9
lsof -ti:5173 | xargs kill -9
```

### Dependencies Issues
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Issues
```bash
# Check for TypeScript errors
npm run build 2>&1 | grep error

# Clear Vite cache
rm -rf .vite
npm run dev
```

### API Connection Issues
1. Verify server is running on port 3001
2. Check `.env` file has correct `VITE_API_URL`
3. Check browser network tab for CORS errors

## Next Steps

1. **Deploy to AWS**: Follow AWS deployment guide in README.md
2. **Custom Domain**: Add Route 53 and ACM certificate
3. **Analytics**: Add Google Analytics or similar
4. **Performance**: Add service worker for caching
5. **Security**: Implement proper authentication for admin panel

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -m "Add your feature"`
3. Push to GitHub: `git push origin feature/your-feature`
4. Create a Pull Request

## Support

For questions or issues:
- Email: matt.sam.yee@gmail.com
- GitHub Issues: https://github.com/theogyeezy/matt-yee-website/issues