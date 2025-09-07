# Matt Yee Personal Website

A modern personal website featuring a Jarvis-style opening animation, professional portfolio, and Medium-style blog platform.

## Features

- **Jarvis Opening Animation**: Iron Man-inspired loading sequence
- **Professional Portfolio**: Clean, modern design optimized for mobile
- **Blog Platform**: Medium.com-style blog with hidden admin panel
- **SEO Optimized**: Full meta tags and structured data
- **AWS Hosted**: Scalable infrastructure using S3, CloudFront, and DynamoDB

## Tech Stack

- **Frontend**: React 18, React Router, Styled Components, Framer Motion
- **Build Tool**: Vite
- **Backend**: AWS Lambda, API Gateway, DynamoDB
- **Hosting**: AWS S3, CloudFront
- **Deployment**: AWS CloudFormation

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## AWS Deployment

### Prerequisites
- AWS CLI configured with appropriate credentials
- Node.js 18+ installed

### Initial Setup

1. Deploy AWS infrastructure:
```bash
aws cloudformation create-stack \
  --stack-name matt-yee-website \
  --template-body file://aws/cloudformation.yaml \
  --capabilities CAPABILITY_IAM \
  --region us-east-1
```

2. Wait for stack creation to complete:
```bash
aws cloudformation wait stack-create-complete \
  --stack-name matt-yee-website \
  --region us-east-1
```

3. Get the CloudFront distribution ID:
```bash
aws cloudformation describe-stacks \
  --stack-name matt-yee-website \
  --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
  --output text
```

4. Update `deploy.sh` with your CloudFront distribution ID.

5. Make deploy script executable:
```bash
chmod +x deploy.sh
```

### Deploy Website

Run the deployment script:
```bash
./deploy.sh
```

## Admin Access

The website includes a hidden admin panel for blog management:

1. Navigate to `/admin`
2. Use the configured password to login
3. Create and manage blog posts with the Medium-style editor

## Blog API Endpoints

- `GET /posts` - List all published posts
- `GET /posts/{id}` - Get single post
- `POST /posts` - Create new post (requires authentication)
- `PUT /posts/{id}` - Update post (requires authentication)
- `DELETE /posts/{id}` - Delete post (requires authentication)

## Environment Variables

Create a `.env` file for local development:
```
VITE_API_URL=https://your-api-gateway-url.execute-api.region.amazonaws.com/prod
```

## Security Notes

- Admin password should be changed from the default
- Enable CloudFront signed URLs for additional security
- Consider adding AWS WAF for DDoS protection
- Implement rate limiting on API Gateway

## Custom Domain (Optional)

To use a custom domain:

1. Register domain in Route 53
2. Request ACM certificate
3. Update CloudFormation template with domain
4. Redeploy stack

## Contact

Matt Yee - matt.sam.yee@gmail.com

## License

Private - All Rights Reserved# Test deployment pipeline
