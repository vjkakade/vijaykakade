catoin# DevOps Portfolio Website

A modern, responsive portfolio website showcasing Vijay Kakade's DevOps, cloud infrastructure, and automation expertise. Single-page application with dynamic sections for home, skills, projects, and contact. Features animated typing text, skill cards grid, project showcase, and integrated contact form.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download Node.js](https://nodejs.org/)
- **Git** (for version control) - [Download Git](https://git-scm.com/)

### Install & Run Locally

```powershell
# Clone the repository
git clone https://github.com/vjkakade/vijaykakade.git
cd vijaykakade

# Install dependencies
npm install

# Start local development server
npm start
# Open http://localhost:8000 in browser
```

### Deploy to Web

See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step guides to deploy on:

- **GitHub Pages** (Free, GitHub-native)
- **Netlify** (Free, with auto-deployment)
- **Vercel** (Free, with auto-deployment)
- **Traditional hosting** (Bluehost, SiteGround, etc.)

## ✨ Features

### Home Section

- Animated profile image with glow effect
- Dynamic typing animation cycling through roles
  - DevOps Engineer → Cloud Engineer → Infrastructure Specialist → etc.
- Professional bio and introduction
- Social media links (LinkedIn, GitHub, Twitter)
- "Hire me" call-to-action button

### Skills Section

- Grid layout (4 columns desktop, 2 columns mobile)
- Professional skill cards with colorful SVG icons:
  - Azure, AWS, GCP, Oracle Cloud, Azure DevOps
  - Jenkins, GitHub, Terraform, CI/CD Pipelines
  - MongoDB, IWMS (TRIRIGA), Python
  - Cloud, Artificial Intelligence, Agentic AI, Generative AI
- Hover effects with smooth transitions
- Vertical "Skills" label with rotation effect

### Projects Section

- Detailed project cards with descriptions
- Demo video and GitHub repo links for each project
- Responsive layout (stacks on mobile)
- Currently showcasing:
  - Multi-Cloud Infrastructure Deployment (Terraform + Azure DevOps)
  - Production-Grade Azure Infrastructure (Auto-scaling)

### Certifications Section

- Industry-recognized certifications in cloud and AI technologies
- Professional credentials from Oracle Cloud Infrastructure
- Demonstrates commitment to continuous learning and expertise validation
- Currently showcasing:
  - GitHub Copilot
  - Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate
  - Oracle Cloud Infrastructure 2025 Certified Generative AI Professional
  - Oracle AI Vector Search Certified Professional
  - Oracle Cloud Infrastructure 2025 Certified DevOps Professional
  - Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional
  - Oracle Cloud Infrastructure 2025 Certified Architect Associate
  - Redhat Certified Engineer
  - Novell Certified Network +
  - Microsoft Certified IT Professional

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Setup
1. Fork the repository and clone your fork.
2. Follow the [Quick Start](#-quick-start) guide to set up the project locally.
3. Create a feature branch: `git checkout -b feature/your-feature-name`.

### Coding Standards
- Use kebab-case for CSS classes and IDs.
- Follow HTML5 semantic elements.
- Ensure code passes linting: `npm run lint`.
- Write descriptive commit messages (e.g., "feat: add new skill card for Docker").

### Pull Request Process
1. Test your changes thoroughly (see [Testing](#-testing)).
2. Update documentation if needed.
3. Submit a PR with a clear description of changes.
4. Wait for review and address feedback.

## 🏗️ Project Architecture and Key Components

This is a static single-page application (SPA) built with vanilla technologies for simplicity and performance.

### Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with responsive breakpoints
- **PWA Features**: Service Worker (sw.js) for offline caching, Web App Manifest (manifest.json)
- **Linting**: Stylelint for CSS, HTMLHint for HTML
- **Deployment**: Static hosting (GitHub Pages, Netlify, etc.)

### Key Components
- **index.html**: Main page with all sections (home, skills, projects, contact)
- **style.css**: Responsive styles with animations and hover effects
- **main.js** (inline in index.html): Handles typing animation, form submission, navigation
- **sw.js**: Service worker for caching and offline support
- **images/**: SVG icons for skills

The app uses CSS Grid and Flexbox for layouts, with JavaScript for interactivity.
```text
vijaykakade/
├── index.html                    # Main HTML with all sections
├── style.css                     # All styling (responsive design)
├── main.jpg                      # Profile photo
├── package.json                  # Dependencies and npm scripts
├── .stylelintrc.json            # CSS linting configuration
├── .htmlhintrc                  # HTML linting configuration
├── .github/
│   ├── copilot-instructions.md  # AI agent development guide
│   └── workflows/lint.yml       # CI/CD linting automation
├── images/                       # Skill icons (SVG)
│   ├── azure.png
│   ├── aws.png
│   ├── gcp.png
│   ├── oracle.png
│   ├── azure-devops.png
│   ├── jenkins.png
│   ├── github.png
│   ├── terraform.png
│   └── cicd.png
├── README.md                     # This file
├── LINTING.md                   # Linting setup and commands
├── TESTING.md                   # Comprehensive testing guide
└── DEPLOYMENT.md                # Deployment instructions
```

## 🛠️ Development

## 🧪 Testing

This project emphasizes quality through manual testing and linting. For comprehensive testing procedures, see [TESTING.md](TESTING.md).

### Quick Test Commands
- **Linting**: `npm run lint` (CSS and HTML)
- **Start Server**: `npm start`
- **Cross-browser testing**: Manually test on Chrome, Firefox, Safari, and mobile browsers
- **Responsive testing**: Check layouts at 375px, 768px, 1024px, and 1920px widths

Ensure all features (typing animation, form submission, PWA offline mode) work before submitting changes.

### Available Commands

```bash
# Install dev dependencies
npm install

# Start the development server
npm start

# Run all linters (CSS + HTML)
npm run lint

# Run CSS linter only
npm run lint:css

# Run HTML linter only
npm run lint:html

# Auto-fix CSS issues
npx stylelint "**/*.css" --fix
```

### PowerShell Note

On Windows PowerShell, you may need to bypass execution policy:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
npm run lint
```

Or use Command Prompt instead (no policy change needed).

## 🎨 Customization

### Change Accent Color

Search for `#b74b4b` in `style.css` and replace with your color:

```css
/* Change from red-brown to blue */
#0078D4  /* Azure Blue */
#FF9900  /* AWS Orange */
#4285F4  /* GCP Blue */
```

### Update Typing Animation Roles

Edit the `texts` array in `index.html` (around line 155):

```javascript
const texts = [
    " Artificial Intelligence",
    " Technical Support",
    " Content Creation",
    " DevOps Engineering",
    " Cloud Technologies",
    " Linux Engineering",
    " Mountain Trekking",
    " Freelancing"
];
```

### Update Skills

Add/remove skill cards in the `.skills-grid` section:

```html
<div class="skill-card">
    <img src="images/your-icon.svg" alt="Your Skill">
    <p>Skill Name</p>
</div>
```

### Update Projects

Modify project descriptions and links in the `.projects-container` section.

### Change Social Links

Update URLs in `.social-icons` section:

```html
<a href="https://your-profile-url" target="_blank">
    <i class="fa-brands fa-linkedin"></i>
</a>
```

## 📱 Responsive Design

The site is fully responsive with optimized layouts for:

| Device  | Width            | Breakpoint | Grid Columns            |
| ------- | ---------------- | ---------- | ----------------------- |
| Desktop | 1024px+          | Default    | 4 columns               |
| Tablet  | 768px - 1023px   | 768px      | 3-4 columns             |
| Mobile  | 600px - 767px    | 600px      | 2 columns               |
| Phone   | <600px           | <600px     | 2 columns (smaller)     |

## ✅ Quality Assurance

### Code Quality

- **CSS Linting:** stylelint with `stylelint-config-standard`
- **HTML Linting:** HTMLHint with best practices
- **Zero dependency vulnerabilities** (npm audit: 0 found)

### Accessibility

- ✅ Keyboard navigation support (Tab, Enter)
- ✅ Visible focus states on all interactive elements
- ✅ Descriptive alt text for all images
- ✅ Semantic HTML structure
- ✅ Color contrast compliant (WCAG AAA)

### Performance

- ✅ Optimized SVG icons (<5KB each)
- ✅ Optimized profile image (<100KB)
- ✅ No unnecessary JavaScript
- ✅ Smooth animations (60fps)

### Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, Firefox Mobile)

## 📝 Testing

See [TESTING.md](TESTING.md) for comprehensive testing guide including:

- Cross-browser testing checklist
- Form integration testing
- Performance testing (Lighthouse)
- Accessibility testing
- Mobile testing specifics
- SEO optimization

Quick test:

```powershell
npm run lint              # Verify code quality
npm start                # Start local server
# Open http://localhost:8000 and test manually
```

## 🚀 Deployment

### GitHub Pages (Recommended)

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vijaykakade.github.io.git
git push -u origin main
```

Then enable GitHub Pages in repository settings.

### Netlify

1. Connect GitHub repo
2. Deploy settings: Build command = empty, Publish = `/`
3. Auto-deploys on push

### Vercel

1. Import GitHub repo
2. Deploy (no configuration needed)
3. Auto-deploys on push

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions and comparison of all options.

## 📧 Form Integration

The contact form uses **Formspree** (ID: `mgvrvelo`) for email delivery.

### Setup

1. Visit [formspree.io](https://formspree.io)
2. Verify the form is active
3. Configure email forwarding
4. Test form submission (see TESTING.md)

### Form Validation

- Name: Required (non-empty)
- Email: Must be valid format (user AT domain DOT com)
- Message: Minimum 10 characters

### Troubleshooting

If form doesn't work:

1. Check Formspree dashboard settings
2. Verify spam/junk folder for test emails
3. Test in browser console (see TESTING.md)
4. Consider alternative services (FormSubmit.co, Basin, etc.)

## 📚 Documentation

- **[.github/copilot-instructions.md](.github/copilot-instructions.md)** - AI agent development guide with architecture, patterns, and workflows
- **[LINTING.md](LINTING.md)** - CSS/HTML linting setup and troubleshooting
- **[TESTING.md](TESTING.md)** - Comprehensive testing checklist and procedures
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment guide for all platforms

## 🔧 Tech Stack

| Layer | Technology |
| ------- | ----------- |
| HTML | Semantic HTML5 |
| CSS | Modern CSS3, responsive design, animations |
| JavaScript | Vanilla JS (no frameworks) |
| Icons | Font Awesome 6.5.2 |
| Fonts | Google Fonts (Poppins) |
| Forms | Formspree |
| Linting | stylelint + htmlhint |
| Deployment | GitHub Pages / Netlify / Vercel |

## 📊 Performance Targets

- Lighthouse Performance: >80
- Lighthouse Accessibility: >90
- Lighthouse Best Practices: >90
- Lighthouse SEO: >90
- Page load time: <2 seconds
- Core Web Vitals: All green

## 🤝 Contributing

### Development Workflow

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/vijaykakade.git
   cd vijaykakade
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Make Changes**
   - Edit files using your preferred editor
   - Follow the coding conventions outlined in [.github/copilot-instructions.md](.github/copilot-instructions.md)

4. **Test Your Changes**
   ```bash
   npm run lint              # Check code quality
   npm start                 # Start local server
   # Test in browser at http://localhost:8000
   ```

5. **Commit and Push**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

### Code Style Guidelines

- **CSS Classes:** Use kebab-case (`.home-content`, `.skill-card`)
- **JavaScript:** Use camelCase for variables (`typingSpan`, `formData`)
- **File Naming:** kebab-case for files (`style.css`, `main.jpg`)
- **Indentation:** 2 spaces (no tabs)
- **Quotes:** Double quotes for HTML attributes, single quotes for CSS values

### Adding New Features

#### Adding a New Skill Card
1. Add SVG icon to `/images/` folder (70x70px recommended)
2. Add HTML in `.skills-grid` section:
   ```html
   <div class="skill-card">
       <img src="images/your-skill.svg" alt="Your Skill">
       <p>Your Skill</p>
   </div>
   ```

#### Adding a New Project
1. Add project card in `.projects-container`:
   ```html
   <div class="project-card">
       <div class="project-content">
           <h3>Project Title</h3>
           <p>Project description goes here.</p>
           <div class="project-buttons">
               <a href="https://demo-url.com" target="_blank" class="project-btn">Demo Video</a>
               <a href="https://github.com/your-repo" target="_blank" class="project-btn">GitHub Repo</a>
           </div>
       </div>
   </div>
   ```

#### Updating Contact Form
- Formspree endpoint: `https://formspree.io/f/mgvrvelo`
- Validation rules: Name required, email format validated, message ≥10 chars
- Test form submissions in [Formspree dashboard](https://formspree.io)

### Testing Requirements

Before submitting changes:

- [ ] Run `npm run lint` - No CSS/HTML errors
- [ ] Test on desktop (1920x1080) and mobile (375x667)
- [ ] Verify all links work correctly
- [ ] Test form submission (if modified)
- [ ] Check responsive behavior at all breakpoints
- [ ] Ensure accessibility (keyboard navigation, alt text)

### Pull Request Guidelines

1. Create a new branch for your feature
2. Write clear, descriptive commit messages
3. Update this README if your changes affect functionality
4. Ensure all tests pass before submitting
5. Be responsive to feedback and ready to make changes

### Common Issues & Solutions

**PowerShell Execution Policy Error:**
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run lint
```

**Form Not Working:**
- Check Formspree dashboard for active form
- Verify email forwarding settings
- Test with browser console (see TESTING.md)

**Images Not Loading:**
- Ensure images are in correct `/images/` folder
- Check file names match HTML references
- Verify image dimensions and file size

**Linting Errors:**
- Run `npx stylelint "**/*.css" --fix` to auto-fix CSS issues
- Check `.stylelintrc.json` for project-specific rules
- Review HTMLHint errors for HTML issues

## 🔧 Troubleshooting

### Development Environment Issues

**Node.js Not Found:**
```bash
# Check Node.js installation
node --version
npm --version

# If not installed, download from: https://nodejs.org/
```

**Port Already in Use:**
```bash
# Use different port by editing package.json start script
"start": "http-server -p 8081"
# Access at http://localhost:8081
```

### Browser Issues

**Changes Not Reflecting:**
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check browser console for errors

**Service Worker Caching Old Files:**
- Open DevTools > Application > Service Workers
- Click "Unregister" to clear cache
- Or disable service worker in DevTools > Application > Service Workers

**Mobile View Not Working:**
- Use DevTools device toolbar: Ctrl+Shift+M (Windows) or Cmd+Shift+M (Mac)
- Check viewport meta tag in HTML head
- Verify CSS media queries

### Git Issues

**Permission Denied Errors:**
```bash
# Check remote URL
git remote -v

# Update to SSH if using HTTPS with 2FA
git remote set-url origin git@github.com:username/repo.git
```

**Merge Conflicts:**
```bash
# Check status
git status

# Resolve conflicts manually in files
# Add resolved files
git add .

# Commit resolution
git commit -m "Resolve merge conflicts"
```

### Performance Issues

**Slow Page Load:**
- Check image sizes (should be optimized)
- Verify no unnecessary CSS/JS
- Use browser DevTools Network tab to identify bottlenecks

**Animations Janky:**
- Check for expensive CSS properties (avoid layout thrashing)
- Use `transform` and `opacity` for animations
- Verify hardware acceleration is enabled

### Getting Help

If you're stuck:

1. **Check Documentation:**
   - [TESTING.md](TESTING.md) - Comprehensive testing guide
   - [LINTING.md](LINTING.md) - Code quality setup
   - [.github/copilot-instructions.md](.github/copilot-instructions.md) - Development patterns

2. **Common Debugging Steps:**
   ```bash
   # Verify dependencies
   npm list
   
   # Check for vulnerabilities
   npm audit
   
   # Run all checks
   npm run lint
   ```

3. **Browser Developer Tools:**
   - Console tab for JavaScript errors
   - Network tab for loading issues
   - Elements tab for CSS problems
   - Application tab for service worker/cache issues

4. **Community Help:**
   - Create GitHub issue with detailed description
   - Include browser version, OS, and steps to reproduce
   - Attach screenshots if relevant

## 📄 License

Open source. Feel free to use as inspiration for your own portfolio.

## 🎯 Future Enhancements

- [ ] Blog section with technical articles
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Certificate showcase section
- [ ] Testimonials carousel
- [ ] Newsletter signup
- [ ] Advanced analytics

## 📞 Contact

- **Email:** Via contact form on the site
- **LinkedIn:** [linkedin.com/in/vjkakade](https://www.linkedin.com/in/vjkakade/)
- **GitHub:** [github.com/vjkakade](https://github.com/vjkakade)
- **Twitter:** (Update in HTML)

---

**Last Updated:** March 2026  
**Status:** ✅ Production Ready  
**Linting:** ✅ All checks pass (0 errors)  
**Security:** ✅ npm audit: 0 vulnerabilities
