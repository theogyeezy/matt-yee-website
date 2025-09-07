# GitHub Actions Setup Guide

## 🔐 AWS Credentials Setup

To enable GitHub Actions to deploy to AWS, you need to configure AWS credentials as GitHub secrets.

### Step 1: Create AWS IAM User for GitHub Actions

1. **Go to AWS IAM Console**: https://console.aws.amazon.com/iam/
2. **Create User**:
   - Click "Users" → "Create user"
   - Username: `github-actions-matt-yee-website`
   - Select "Programmatic access"

3. **Attach Policies**:
   - `AmazonS3FullAccess`
   - `CloudFrontFullAccess`
   - `CloudFormationFullAccess` 
   - `AmazonDynamoDBFullAccess`
   - `AWSLambdaFullAccess`
   - `IAMFullAccess`
   - `AmazonRoute53FullAccess`
   - `AWSCertificateManagerFullAccess`

4. **Save Credentials**:
   - Copy the `Access Key ID`
   - Copy the `Secret Access Key`

### Step 2: Add GitHub Secrets

1. **Go to GitHub Repository**: https://github.com/theogyeezy/matt-yee-website
2. **Navigate to Settings**:
   - Click "Settings" tab
   - Click "Secrets and variables" → "Actions"

3. **Add Repository Secrets**:
   ```
   Name: AWS_ACCESS_KEY_ID
   Value: [Your AWS Access Key ID]
   
   Name: AWS_SECRET_ACCESS_KEY
   Value: [Your AWS Secret Access Key]
   ```

## 🚀 GitHub Actions Workflows

### 1. **Main Deployment** (`deploy.yml`)
- **Triggers**: Push to `main` branch
- **Actions**: Build → Deploy to S3 → Invalidate CloudFront
- **Result**: Live website updated at https://themattyee.com

### 2. **Infrastructure Updates** (`infrastructure.yml`)
- **Triggers**: Changes to `aws/` folder or manual
- **Actions**: Validate → Update CloudFormation stack
- **Result**: AWS infrastructure updated

### 3. **PR Previews** (`pr-preview.yml`)
- **Triggers**: Pull request opened/updated
- **Actions**: Build → Deploy to temporary S3 bucket
- **Result**: Preview URL posted in PR comments

## 📋 Current Configuration

### Environment Variables (already configured):
```yaml
AWS_REGION: us-east-1
S3_BUCKET: themattyee.com-website
CLOUDFORMATION_STACK: matt-yee-website
```

### API URL (already configured):
```yaml
VITE_API_URL: https://x8nj23b2ej.execute-api.us-east-1.amazonaws.com/prod
```

## 🧪 Testing GitHub Actions

### After setting up secrets:

1. **Test Infrastructure Workflow**:
   - Go to "Actions" tab in GitHub
   - Find "Update Infrastructure"
   - Click "Run workflow" → Select "validate"

2. **Test Deployment**:
   - Make a small change to any file
   - Commit and push to `main` branch
   - Watch the "Deploy to AWS" workflow run

3. **Test PR Preview**:
   - Create a new branch: `git checkout -b test-feature`
   - Make a change and push
   - Create a Pull Request
   - Check for preview URL in PR comments

## 🔍 Workflow Status

Once secrets are configured, you can monitor deployments at:
https://github.com/theogyeezy/matt-yee-website/actions

## 🚨 Security Notes

- GitHub secrets are encrypted and only available to workflows
- IAM user has specific permissions for this project only
- PR previews use temporary buckets that auto-cleanup
- Never commit AWS credentials to code

## 🆘 Troubleshooting

### Common Issues:
1. **"Access Denied" errors**: Check IAM user permissions
2. **"Bucket not found" errors**: Ensure S3 bucket name matches
3. **"Stack does not exist" errors**: Infrastructure workflow needs to run first

### Debug Commands:
```bash
# Check current stack status
aws cloudformation describe-stacks --stack-name matt-yee-website --region us-east-1

# List S3 buckets
aws s3 ls

# Check CloudFront distributions
aws cloudfront list-distributions
```