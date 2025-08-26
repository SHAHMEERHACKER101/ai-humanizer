# 🚀 Quick Start Guide

Deploy NexusRank Pro in 5 minutes!

## Step 1: Upload to GitHub
1. Create new repository: `nexusrank-pro`
2. Upload ALL files from this folder
3. Set repository to public

## Step 2: Deploy Frontend (Cloudflare Pages)
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect to Git → Select your repository
3. Build settings:
   - **Build command**: Leave empty
   - **Build output directory**: `/`
4. Click "Save and Deploy"

## Step 3: Deploy Backend (Cloudflare Worker)
```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy worker
wrangler deploy backend/worker.js

# Set API key
wrangler secret put DEEPSEEK_API_KEY
```

## Step 4: Get DeepSeek API Key
1. Visit [platform.deepseek.com](https://platform.deepseek.com)
2. Create account → Get API key
3. Paste when prompted in Step 3

## Step 5: Update Configuration
Edit `_redirects` file:
```
# Replace YOUR-USERNAME with your actual username
/api/*  https://nexusrank-pro-worker.yourusername.workers.dev/:splat  200
```

## ✅ Done!
- Frontend: `https://nexusrank-pro.pages.dev`
- Worker: `https://nexusrank-pro-worker.yourusername.workers.dev`

## 🛠️ Troubleshooting
- **Worker not responding**: Check API key is set
- **CORS errors**: Verify worker URL in `_redirects`
- **Build failed**: Ensure all files uploaded to GitHub

## 📊 Test Your Deployment
1. Visit your Pages URL
2. Click any AI tool
3. Enter text and process
4. Should get AI-generated results

Need help? Check `DEPLOYMENT_GUIDE.md` for detailed instructions.