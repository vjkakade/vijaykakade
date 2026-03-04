# DevOps Portfolio Website

A modern, responsive portfolio website showcasing Vijay Kakade's DevOps, cloud infrastructure, and automation expertise. Single-page application with dynamic sections for home, skills, projects, and contact. Features animated typing text, skill cards grid, project showcase, and integrated contact form.

## 🚀 Quick Start

### Install & Run Locally

```powershell
# Install dependencies
npm install

# Run linters (CSS & HTML validation)
npm run lint

# Start local development server
python -m http.server 8000
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
- Social media links (LinkedIn, GitHub, Twitter, Instagram)
- "Hire me" call-to-action button

### Skills Section

- Grid layout (4 columns desktop, 2 columns mobile)
- Professional skill cards with colorful SVG icons:
  - Azure, AWS, GCP, Oracle Cloud, Azure DevOps
  - Jenkins, GitHub, Terraform, CI/CD Pipelines
- Hover effects with smooth transitions
- Vertical "Skills" label with rotation effect

### Projects Section

- Detailed project cards with descriptions
- Demo video and GitHub repo links for each project
- Responsive layout (stacks on mobile)
- Currently showcasing:
  - Multi-Cloud Infrastructure Deployment (Terraform + Azure DevOps)
  - Production-Grade Azure Infrastructure (Auto-scaling)

### Contact Section

- Professional contact form with validation
- Form fields: Name, Email, Message
- Client-side validation with user-friendly error messages
- Integrated with Formspree for email delivery
- Loading feedback and success confirmation

## 📋 Project Structure

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
│   ├── azure.svg
│   ├── aws.svg
│   ├── gcp.svg
│   ├── oracle.svg
│   ├── azure-devops.svg
│   ├── jenkins.svg
│   ├── github.svg
│   ├── terraform.svg
│   └── cicd.svg
├── README.md                     # This file
├── LINTING.md                   # Linting setup and commands
├── TESTING.md                   # Comprehensive testing guide
└── DEPLOYMENT.md                # Deployment instructions
```

## 🛠️ Development

### Available Commands

```bash
# Install dev dependencies
npm install

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
    " DevOps Engineer",
    " Cloud Engineer",
    " Infrastructure Specialist",
    " Mountaineer",
    " Biker Rider",
    " Freelancer"
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
python -m http.server    # Start local server
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

To modify the portfolio:

1. Make changes locally
2. Run `npm run lint` to verify quality
3. Test on mobile and desktop
4. Push to main branch (auto-deploys)

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

**Last Updated:** December 2025  
**Status:** ✅ Production Ready  
**Linting:** ✅ All checks pass (0 errors)  
**Security:** ✅ npm audit: 0 vulnerabilities
