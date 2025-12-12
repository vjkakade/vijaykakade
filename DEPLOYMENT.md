# Deployment & Quick Start Guide

## Local Development

### Prerequisites
- Node.js 18+ installed
- npm (comes with Node.js)

### Setup

1. **Navigate to project directory:**
   ```powershell
   cd c:\Users\Vijay Kakade\Downloads\vijaykakade
   ```

2. **Install dependencies:**
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   npm install
   ```

3. **Run linting to verify code quality:**
   ```powershell
   npm run lint
   ```

4. **Start a local web server** (choose one):
   
   **Option A: Using Python (if installed):**
   ```powershell
   python -m http.server 8000
   # Opens at http://localhost:8000
   ```

   **Option B: Using VS Code Live Server Extension:**
   - Install "Live Server" by Ritwick Dey
   - Right-click `index.html` → "Open with Live Server"
   - Automatically opens at http://127.0.0.1:5500

   **Option C: Using Node.js http-server:**
   ```powershell
   npm install -g http-server
   http-server
   # Opens at http://localhost:8080
   ```

## Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Name it `vijaykakade.github.io` (or any name)
   - Set to Public
   - Create repository

2. **Push your code:**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/vijaykakade.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to Repository Settings
   - Under "Pages" section, select "Deploy from a branch"
   - Choose "main" branch
   - Save

4. **Access your site:**
   - `https://YOUR_USERNAME.github.io` (if repo is named `USERNAME.github.io`)
   - `https://YOUR_USERNAME.github.io/vijaykakade` (if different repo name)

### Option 2: Netlify (Free with Auto-Deploy)

1. **Sign up at https://netlify.com**

2. **Connect GitHub repository:**
   - Click "New site from Git"
   - Select GitHub
   - Authorize Netlify
   - Choose your portfolio repository

3. **Deploy settings:**
   - Build command: (leave empty - static site)
   - Publish directory: `/` (root)
   - Click "Deploy"

4. **Auto-deployment:**
   - Every push to main branch automatically deploys
   - Netlify provides a free `.netlify.app` subdomain
   - Option to add custom domain

### Option 3: Vercel (Free & Simple)

1. **Sign up at https://vercel.com**

2. **Import project:**
   - Click "New Project"
   - Select GitHub integration
   - Choose your portfolio repo
   - Click "Import"

3. **Deploy:**
   - No configuration needed for static sites
   - Automatic deployment on push
   - Get a free `.vercel.app` domain

### Option 4: Traditional Web Hosting (Paid)

Popular options:
- **Bluehost, SiteGround, GoDaddy** - Standard shared hosting (~$5-15/month)
- **AWS S3 + CloudFront** - Object storage + CDN (~$1-5/month)
- **DigitalOcean App Platform** - Simple app hosting (~$5-12/month)

Steps (vary by provider):
1. Buy hosting plan and domain
2. Upload files via FTP or file manager
3. Point domain DNS to hosting provider
4. Test site is live

## Custom Domain Setup

### For GitHub Pages:
1. Go to Repository Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `vijaykakade.com`)
3. DNS pointing instructions appear
4. Update DNS at your domain registrar (GoDaddy, Namecheap, etc.):
   ```
   A Records:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153

   CNAME (if using subdomain):
   www → YOUR_USERNAME.github.io
   ```

### For Netlify/Vercel:
1. Connect custom domain in dashboard
2. Follow provider's DNS instructions
3. Usually just add CNAME pointing to their servers

## Form Integration (Formspree)

The contact form uses Formspree ID: `mgvrvelo`

### Verify It's Working:
1. Fill out the contact form on your site
2. Click "Send"
3. Check your email (configure in Formspree dashboard)
4. If you don't receive emails, troubleshoot:
   - Login to https://formspree.io
   - Check form settings
   - Ensure email forwarding is enabled
   - Test submission on Formspree website directly

### Alternative Form Services:
- **FormSubmit.co** - Free, no signup needed
- **Basin** - Free form hosting
- **Stripe Billing** - For payment forms
- **Your own backend** - Full control (requires server)

## SEO & Analytics Setup (Optional)

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property (your domain)
3. Verify ownership (DNS or HTML tag)
4. Submit sitemap (optional for static sites)
5. Monitor search performance

### Google Analytics
1. Go to https://analytics.google.com
2. Create new property
3. Add tracking code to `<head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```
   Replace `GA_MEASUREMENT_ID` with your ID

### Meta Tags for Social Sharing
Already should be in HTML `<head>` or add:
```html
<meta property="og:title" content="Vijay Kakade - DevOps & Cloud Engineer">
<meta property="og:description" content="12+ years DevOps/Cloud infrastructure expertise">
<meta property="og:image" content="https://yoursite.com/main.jpg">
<meta property="og:url" content="https://yoursite.com">
<meta name="twitter:card" content="summary_large_image">
```

## Maintenance & Updates

### Regular Checks:
- **Monthly:** Test form submissions work
- **Quarterly:** Run Lighthouse audit (DevTools)
- **Quarterly:** Check external links still work
- **Annually:** Update projects, skills, bio

### Update Workflow:
```powershell
# Make changes locally
# Test with npm run lint
npm run lint

# Commit and push (auto-deploys on GitHub Pages/Netlify)
git add .
git commit -m "Update projects and skills"
git push origin main
```

## Troubleshooting

### Form Not Sending
- [ ] Check Formspree dashboard: https://formspree.io
- [ ] Verify form endpoint is correct: `mgvrvelo`
- [ ] Test in browser console (see TESTING.md)
- [ ] Check spam/junk email folder

### Linting Errors
```powershell
# Check for issues
npm run lint

# Fix common CSS issues automatically
npx stylelint "**/*.css" --fix
```

### Images Not Loading
- [ ] Check file paths are relative (`images/azure.svg` not `/images/...`)
- [ ] Verify files exist in `images/` folder
- [ ] Check browser console for 404 errors (F12 → Console)
- [ ] Ensure SVG files are in correct format

### Mobile Layout Broken
- [ ] Check viewport meta tag exists: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- [ ] Test with DevTools (F12 → Toggle device toolbar)
- [ ] Check CSS media queries (see style.css)

## Performance Tips

1. **Optimize images:**
   - Profile image (main.jpg): Keep under 100KB
   - Use SVG for icons (already done)
   - Consider WebP format for future

2. **Minify CSS/JS** (optional):
   ```powershell
   npm install -g cleancss-cli uglify-js
   cleancss style.css -o style.min.css
   # Update HTML to reference style.min.css
   ```

3. **Enable caching** (hosting-dependent):
   - Set long cache expiration for static assets
   - Use CDN for global delivery (Netlify/Vercel do this automatically)

4. **Lazy load images** (future enhancement):
   - Add `loading="lazy"` to `<img>` tags

## Summary

**Quick Setup:**
```powershell
npm install
npm run lint
python -m http.server 8000
# Visit http://localhost:8000
```

**Quick Deploy:**
- GitHub Pages (free): Push to `gh-pages` branch
- Netlify (free): Connect GitHub repo
- Vercel (free): Connect GitHub repo

**Test Before Going Live:**
- Run `npm run lint` (0 errors)
- Test form on all browsers
- Test on mobile devices
- Check Lighthouse scores
- Verify all links work

Enjoy your portfolio! 🚀
