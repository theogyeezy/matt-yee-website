#!/bin/bash

# Matt Yee Website AWS Deployment Script
# This script builds and deploys the website to AWS S3 and CloudFront

set -e

echo "🚀 Starting deployment process..."

# Configuration
S3_BUCKET="matt-yee-website"
CLOUDFRONT_DISTRIBUTION_ID=""  # Will be set after CloudFront is created
AWS_REGION="us-east-1"

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

# Invalidate CloudFront cache (if distribution ID is set)
if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
        --paths "/*"
fi

echo "✅ Deployment complete!"
echo "🌐 Website URL: https://matt-yee-website.s3-website-$AWS_REGION.amazonaws.com"