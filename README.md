# NexusRank Pro

Professional AI-Powered SEO Toolkit with 6 cutting-edge AI tools for content creation, optimization, and analysis.

## 🚀 Features

- **AI SEO Writer** - Generate comprehensive, SEO-optimized articles up to 10,000 words
- **AI Humanizer** - Transform AI-generated content into natural, human-like text
- **AI Detector** - Detect AI-generated content with advanced analysis
- **Paraphraser** - Rewrite content while preserving meaning and improving clarity
- **Grammar Checker** - Advanced grammar and style checking with suggestions
- **Text Improver** - Enhance readability, style, and overall content quality

## 🎮 Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Backend**: Cloudflare Workers with DeepSeek AI API
- **Deployment**: Cloudflare Pages + Workers
- **Design**: 3D Gaming Cyberpunk Theme with Neon Effects
- **PWA**: Service Worker for offline support

## 🔧 Quick Deployment

### 1. Deploy to Cloudflare Pages

1. Fork this repository to your GitHub account
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your GitHub account and select this repository
4. Set build settings:
   - **Build command**: `npm run build` (or leave empty)
   - **Build output directory**: `/` (root directory)
   - **Root directory**: `/` (or leave empty)
5. Deploy your site

### 2. Deploy the Worker Backend

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy the worker:
   ```bash
   cd github-deploy
   wrangler deploy backend/worker.js
   ```

4. Set your DeepSeek API key:
   ```bash
   wrangler secret put DEEPSEEK_API_KEY
   ```
   Enter your DeepSeek API key when prompted.

### 3. Configure Worker URL

**Option A: Use _redirects (Recommended)**
1. Edit `_redirects` file
2. Replace `YOUR-USERNAME` with your Cloudflare username
3. The app will automatically use `/api/` which redirects to your worker

**Option B: Direct URL**
Update the API endpoint in `/js/app.js`:
```javascript
// Change this:
const response = await fetch('/api/', {

// To your worker URL:
const response = await fetch('https://nexusrank-pro-worker.yourusername.workers.dev/', {
```

## 🔑 Getting DeepSeek API Key

1. Visit [DeepSeek Platform](https://platform.deepseek.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key and add it to your Cloudflare Worker environment variables

## 🛠️ Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nexusrank-pro.git
   cd nexusrank-pro/github-deploy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start local development server:
   ```bash
   npm run serve
   ```

4. For worker development:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
github-deploy/
├── index.html              # Main application page
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── package.json            # Dependencies and scripts
├── wrangler.toml          # Cloudflare Worker configuration
├── README.md              # This file
├── css/
│   └── style.css          # Main stylesheet with cyberpunk theme
├── js/
│   └── app.js             # Frontend JavaScript application
├── pages/
│   ├── about.html         # About page
│   ├── contact.html       # Contact page
│   ├── privacy.html       # Privacy policy
│   ├── terms.html         # Terms of service
│   └── cookie-policy.html # Cookie policy
├── backend/
│   └── worker.js          # Cloudflare Worker backend
└── icons/
    ├── icon-192x192.png   # PWA icons
    └── icon-512x512.png
```

## ⚙️ Configuration

### Environment Variables

Set these in your Cloudflare Worker dashboard:

- `DEEPSEEK_API_KEY` - Your DeepSeek API key for AI processing

### Worker Configuration

The worker is configured in `wrangler.toml`:
- CPU time limit: 30 seconds
- Compatibility date: 2024-01-01
- Main script: `backend/worker.js`

## 🎨 Customization

### Styling
- Edit `css/style.css` to modify the cyberpunk theme
- Colors are defined as CSS custom properties
- Animations and effects are configurable

### Tools
- Modify tool configurations in `js/app.js`
- Update prompts and processing logic in `backend/worker.js`
- Add new tools by extending both frontend and backend

### Branding
- Update logos and icons in the `/icons/` directory
- Modify site metadata in HTML files
- Customize PWA settings in `manifest.json`

## 🔒 Security Features

- CORS headers for secure cross-origin requests
- Input validation and sanitization
- API key protection via environment variables
- Content Security Policy headers
- Secure HTTPS-only deployment

## 📊 Freemium Model

- **Free Users**: 1 use per tool
- **Pro Users**: Unlimited usage via Patreon subscription
- Usage tracking via browser local storage
- Pro authentication with secure credentials

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🆘 Support

- **Documentation**: Check this README for deployment instructions
- **Issues**: Report bugs via GitHub Issues
- **Feature Requests**: Submit via GitHub Issues
- **Pro Support**: Available for Patreon subscribers

## 🔗 Links

- **Live Demo**: [https://nexusrankpro.pages.dev](https://nexusrankpro.pages.dev)
- **Support**: [Patreon](https://www.patreon.com/posts/seo-tools-137228615)
- **Worker API**: Deploy your own worker for custom functionality

---

Made with ❤️ by the NexusRank Pro Team