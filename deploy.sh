#!/bin/bash

# Matt Yee Website AWS Deployment Script
# This script builds and deploys the website to AWS S3 and CloudFront

set -e

echo "🚀 Starting deployment process..."

# Configuration
DOMAIN_NAME="themattyee.com"
S3_BUCKET="${DOMAIN_NAME}-website"
CLOUDFRONT_DISTRIBUTION_ID=""  # Will be retrieved from CloudFormation stack
AWS_REGION="us-east-1"
STACK_NAME="matt-yee-website"

# Build the application
echo "📦 Building the application..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist directory not found."
    exit 1
fi

# Deploy to S3
echo "☁️ Deploying to S3..."
aws s3 sync dist/ s3://$S3_BUCKET \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "index.html" \
    --exclude "*.json"

# Upload index.html and JSON files with no-cache headers
aws s3 cp dist/index.html s3://$S3_BUCKET/index.html \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "text/html"

aws s3 cp dist/ s3://$S3_BUCKET/ \
    --recursive \
    --exclude "*" \
    --include "*.json" \
    --cache-control "no-cache, no-store, must-revalidate"

# Get CloudFront Distribution ID from CloudFormation stack
echo "🔍 Getting CloudFront Distribution ID..."
CLOUDFRONT_DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
    --stack-name $STACK_NAME \
    --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
    --output text \
    --region $AWS_REGION)

if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
        --paths "/*" \
        --region $AWS_REGION
fi

echo "✅ Deployment complete!"
echo "🌐 Website URL: https://$DOMAIN_NAME"
echo "📄 CloudFront URL: $(aws cloudformation describe-stacks --stack-name $STACK_NAME --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontURL`].OutputValue' --output text --region $AWS_REGION)"