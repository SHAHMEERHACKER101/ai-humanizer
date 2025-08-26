# NexusRank Pro - Complete Deployment Guide

This guide will help you deploy NexusRank Pro to GitHub and Cloudflare with full backend functionality.

## 📋 Prerequisites

- GitHub account
- Cloudflare account
- DeepSeek API key (get from [DeepSeek Platform](https://platform.deepseek.com/))
- Node.js (for local development)

## 🚀 Step-by-Step Deployment

### 1. Upload to GitHub

1. **Create a new repository** on GitHub:
   - Go to https://github.com/new
   - Name it `nexusrank-pro` (or your preferred name)
   - Make it public
   - Don't initialize with README (we have one)

2. **Upload all files**:
   - Download this entire `github-deploy` folder
   - Upload all contents to your GitHub repository
   - OR use Git commands:
     ```bash
     git clone https://github.com/yourusername/nexusrank-pro.git
     cd nexusrank-pro
     # Copy all files from github-deploy folder to root
     git add .
     git commit -m "Initial deployment"
     git push origin main
     ```

### 2. Deploy Frontend to Cloudflare Pages

1. **Go to Cloudflare Pages**:
   - Visit https://pages.cloudflare.com/
   - Click "Create a project"
   - Click "Connect to Git"

2. **Connect GitHub**:
   - Authorize Cloudflare to access your GitHub
   - Select your `nexusrank-pro` repository

3. **Configure deployment**:
   - **Project name**: `nexusrank-pro`
   - **Production branch**: `main`
   - **Build command**: Leave empty (static site)
   - **Build output directory**: `/` (root)
   - **Root directory**: Leave empty
   - Click "Save and Deploy"

4. **Wait for deployment**:
   - Your site will be available at `https://nexusrank-pro.pages.dev`
   - Note down this URL

### 3. Deploy Backend Worker

1. **Install Wrangler CLI**:
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```
   - This will open a browser to authenticate

3. **Navigate to your project**:
   ```bash
   cd your-project-folder
   ```

4. **Deploy the worker**:
   ```bash
   wrangler deploy backend/worker.js
   ```
   - Note the worker URL (e.g., `nexusrank-pro-worker.yourusername.workers.dev`)

### 4. Configure DeepSeek API Key

1. **Get your DeepSeek API Key**:
   - Visit https://platform.deepseek.com/
   - Create account and get API key

2. **Set the API key in Cloudflare**:
   ```bash
   wrangler secret put DEEPSEEK_API_KEY
   ```
   - Paste your DeepSeek API key when prompted

3. **Verify the secret is set**:
   ```bash
   wrangler secret list
   ```

### 5. Update Frontend Configuration

**Option A: Manual Update**
1. **Edit `/js/app.js`**:
   - Find this line:
     ```javascript
     const response = await fetch('https://nexusrank-pro-worker.YOUR-USERNAME.workers.dev/', {
     ```
   - Replace `YOUR-USERNAME` with your actual Cloudflare username:
     ```javascript
     const response = await fetch('https://nexusrank-pro-worker.yourusername.workers.dev/', {
     ```

2. **Commit and push changes**:
   ```bash
   git add js/app.js
   git commit -m "Update worker URL"
   git push origin main
   ```

**Option B: Use _redirects file (Recommended)**
The deployment includes a `_redirects` file that automatically routes `/api/*` to your worker. Update it:
1. Edit `_redirects` file
2. Replace `YOUR-USERNAME` with your actual username
3. Commit and push

### 6. Test Your Deployment

1. **Visit your site**: `https://nexusrank-pro.pages.dev`
2. **Test a tool**:
   - Click on any AI tool
   - Enter some text
   - Click "Process Text"
   - Should get AI-generated results

3. **Check worker health**:
   - Visit: `https://your-worker-url.workers.dev/health`
   - Should return: `{"status":"healthy",...}`

## 🔧 Configuration Options

### Custom Domain (Optional)

1. **In Cloudflare Pages**:
   - Go to your project > Custom domains
   - Add your domain
   - Update DNS records as instructed

2. **Update worker routes** (if needed):
   - Edit `wrangler.toml`
   - Add routes for your custom domain

### Environment Variables

Set these in your Cloudflare Worker dashboard:

- `DEEPSEEK_API_KEY` - Your DeepSeek API key

### Pro User Credentials

The default Pro credentials are:
- Username: `prouser606`
- Password: `tUChSUZ7drfMkYm`

To change these, edit `js/app.js` in the `handleLogin` function.

## 🛠️ Troubleshooting

### Worker Not Responding
- Check if API key is set: `wrangler secret list`
- Check worker logs: `wrangler tail`
- Verify worker URL is correct in `js/app.js`

### CORS Errors
- Worker includes CORS headers
- Make sure worker URL is correct
- Check browser console for exact error

### API Errors
- Verify DeepSeek API key is valid
- Check API quota/billing
- Monitor worker logs for specific errors

### Build Failures
- Make sure all files are uploaded to GitHub
- Check Cloudflare Pages build logs
- Verify file paths are correct

## 📊 Monitoring

### Worker Analytics
- View in Cloudflare dashboard
- Monitor requests, errors, CPU usage

### Pages Analytics
- Built-in Cloudflare analytics
- Real user monitoring available

### API Usage
- Monitor DeepSeek API usage in their dashboard
- Set up billing alerts

## 🔄 Updates

### Frontend Updates
1. Make changes to HTML/CSS/JS files
2. Push to GitHub
3. Cloudflare Pages auto-deploys

### Worker Updates
1. Edit `backend/worker.js`
2. Run `wrangler deploy`
3. Changes are live immediately

## 💰 Cost Considerations

### Cloudflare
- Pages: Free tier (100k requests/month)
- Workers: Free tier (100k requests/day)
- Paid plans available for higher limits

### DeepSeek API
- Pay-per-use pricing
- Monitor usage in DeepSeek dashboard
- Set up billing alerts

## 🔒 Security

### API Key Protection
- Never commit API keys to GitHub
- Use Cloudflare secrets for sensitive data
- Rotate keys regularly

### Content Filtering
- Worker validates input
- Rate limiting available in Cloudflare
- Consider adding abuse detection

## 📞 Support

### Issues
- Check GitHub Issues for common problems
- Worker logs: `wrangler tail`
- Cloudflare support documentation

### Pro Support
- Available for Patreon subscribers
- Email support through contact form
- Priority response for Pro users

---

🎉 **Congratulations!** Your NexusRank Pro deployment should now be live and fully functional with AI-powered tools!