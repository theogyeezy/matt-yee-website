#!/bin/bash
echo "🔍 Matt Yee Website Deployment Monitor"
echo "======================================"
echo ""

while true; do
    STATUS=$(aws cloudformation describe-stacks --stack-name matt-yee-website --query 'Stacks[0].StackStatus' --output text --region us-east-1)
    echo "$(date): Stack Status = $STATUS"
    
    if [ "$STATUS" = "CREATE_COMPLETE" ]; then
        echo "🎉 DEPLOYMENT COMPLETE!"
        echo ""
        echo "📋 Final URLs:"
        aws cloudformation describe-stacks \
          --stack-name matt-yee-website \
          --query 'Stacks[0].Outputs[].[OutputKey,OutputValue]' \
          --output table \
          --region us-east-1
        break
    elif [ "$STATUS" = "CREATE_FAILED" ] || [ "$STATUS" = "ROLLBACK_COMPLETE" ]; then
        echo "❌ Deployment failed. Check CloudFormation console."
        break
    fi
    
    sleep 30
done
