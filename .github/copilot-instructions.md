# AI Coding Agent Instructions for DevOps Portfolio Website

## Project Overview

A modern, responsive portfolio website showcasing Vijay Kakade's DevOps, cloud infrastructure, and automation expertise. Single-page application with dynamic sections for home, skills, projects, and contact. Features animated typing text, skill cards grid, project showcase, and integrated contact form.

**Tech Stack:** Vanilla HTML5, CSS3, JavaScript (no frameworks); PWA-enabled with service worker for offline support; deployed on GitHub Pages (CNAME: vijaykakade.dev).

## Architecture & Key Components

### File Structure

- `index.html` — Main HTML with 4 key sections: home (hero), skills grid, projects showcase, contact form
- `style.css` — All styling (813 lines); responsive design with mobile-first approach
- `images/` — Directory for skill logos (Azure, AWS, GCP, etc.) and project thumbnails
- `main.jpg` — Profile photo displayed in hero section
- `package.json` — npm dependencies (stylelint, htmlhint) and lint scripts

### Core Sections

#### 1. Home Section (Hero)
- Profile image with glow effect
- Name and dynamic typing animation (DevOps Engineer → Cloud Engineer → etc.)
- Professional bio paragraph
- Social media links (LinkedIn, GitHub, Twitter, Instagram)
- "Hire me" CTA button
- **Key elements:** `.home`, `.home-img`, `.home-content`, `.typing-text`, `.social-icons`

#### 2. Skills Section
- Grid layout (4 columns on desktop, responsive on mobile)
- Skill cards with icons and labels
- Side label "Skills" with vertical rotation
- Hover effects with transform and glow
- **Key elements:** `.skills`, `.skills-grid`, `.skill-card`, `.skills-side-label`

#### 3. Projects Section
- Project cards with description and dual action buttons (Demo Video, GitHub Repo)
- Cards stack vertically on mobile
- **Key elements:** `.projects`, `.project-card`, `.project-buttons`, `.project-btn`

#### 4. Contact Section
- Two-column layout: icon on left, form on right
- Form fields: name, email, message
- Integrates with Formspree for email delivery
- Client-side validation (name, email format, message length)
- **Key elements:** `.contact`, `.contact-form`, form inputs

## Critical CSS Patterns & Conventions

### Responsive Breakpoints

- **Desktop:** Default styles, 4-column skills grid, flex layout for home/contact
- **900px and below:** Skills grid switches to `auto-fit` columns, reduced gaps
- **995px and below:** Navigation becomes hidden dropdown menu (`.active` state shows it), home section stacks vertically
- **Mobile (<600px):** Further optimizations for button sizing, padding, font sizes

### Animation System

- **Typing effect:** Text cycles through 6 roles with 100ms typing speed, 50ms delete speed, 1000ms pause between words
- **Hover effects:** Consistent 0.3s ease timing for interactive elements
- **Glow effects:** `box-shadow: 0 0 25px rgb(183 75 75 / 60%)` for accent color emphasis
- **Transforms:** `translateY(-8px)` on card hover for subtle lift effect

### Styling Conventions

- **Font:** Poppins (Google Fonts) for all text
- **Base font size:** 62.5% on `html` for rem-based scaling (1rem = 10px)
- **Accent color:** #b74b4b (red-brown) used for highlights, borders, hover states, glows
- **Button style:** Transparent background with border, inverts on hover (border becomes fill)
- **Card style:** Dark background (#0a0a0a), thin border (#111), glow on hover
- **Color scheme:** Black (#000000) background, white text, #b74b4b accents

### Accessibility Patterns

- **Focus states:** All interactive elements have visible focus outlines (2px solid #b74b4b with 2px offset)
- **Alt text:** All images have descriptive alt attributes
- **Form validation:** Client-side validation with clear error messages
- **Semantic HTML:** `<section>`, `<form>`, `<button>` tags used appropriately

## Development Workflow

### When Adding New Skill Cards

1. Add `<div class="skill-card">` with icon image and label
2. Icon should be 70x70px PNG/SVG with transparent background
3. Label text is 1.6rem white font
4. Hover effect automatically applies (see `.skill-card:hover`)
5. Icons are stored in `images/` folder

### When Adding New Project Cards

1. Add `<div class="project-card">` with description and two action buttons
2. Buttons link to demo video and GitHub repo
3. Card styling handled by `.project-card` and `.project-content`
4. Layout stacks on mobile, side-by-side on desktop

### When Modifying Form

1. Update form fields in `<form class="contact-form">`
2. Update validation logic in the form submission script
3. Keep Formspree integration `action="https://formspree.io/f/mgvrvelo"` or replace with new endpoint
4. Test validation: name required, email format validated, message minimum 10 chars

### When Modifying Navigation

- Update anchor links in `<nav>` to match section IDs
- `.active` class marks current section link
- Navigation auto-toggles on mobile via CSS (hidden/shown with `.active` state)
- Link styling: 1.8rem desktop, 2rem mobile; underline on hover/active

## Common Customization Points

- **Typing text roles:** Edit array in JavaScript ([index.html](index.html#L263)): `["DevOps Engineer", "Cloud Engineer", "Linux Engineer", ...]`
- **Skills grid columns:** Search for `.skills-grid` in CSS: `grid-template-columns: repeat(4, minmax(180px, 1fr))`
- **Accent color:** Search `#b74b4b` and replace with new color throughout CSS
- **Social media URLs:** Update links in `.social-icons` section ([index.html](index.html#L119))
- **Form endpoint:** Update Formspree action URL in contact form ([index.html](index.html#L220)) — currently `https://formspree.io/f/mrbnreak`
- **Profile image:** Replace `main.jpg` with new file (same name or update src)

## Naming Conventions

- **Classes:** kebab-case (`.home-content`, `.skill-card`, `.project-card`)
- **IDs:** kebab-case for sections (`id="home"`, `id="skills"`, `id="projects"`, `id="contact"`)
- **Animations:** Descriptive names (`blink`, `words`)
- **Variables in JS:** camelCase (`typingSpan`, `formData`, `submitBtn`)
- **No element styling** — all rules are class-based for flexibility

## Development Commands

```bash
npm install          # Install dev dependencies (stylelint, htmlhint)
npm run lint         # Run linters (stylelint + htmlhint)
npm run lint:css     # CSS linting only
npm run lint:html    # HTML linting only
```

On Windows PowerShell with execution policy restrictions:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run lint
```

## Testing & Quality

- **Linting:** Uses `stylelint-config-standard` for CSS and `htmlhint@1.8.0` for HTML
- **Browser testing:** Test on Chrome, Firefox, Safari, and mobile browsers
- **Mobile testing:** Check at 375px (iPhone), 768px (iPad), 1024px (tablet)
- **Form testing:** Verify Formspree integration sends emails correctly; test validation

## Performance & PWA Features

- **Minimize image sizes:** Skill cards icons should be <10KB each; use SVG for logos/icons where possible
- **Profile image:** `main.jpg` should be optimized (aim for <100KB)
- **Service Worker:** [sw.js](sw.js) implements offline-first caching strategy
  - Caches critical resources on install: `style.css`, `main.jpg`, `manifest.json`, root path
  - Fetch strategy: serves cached version if available, falls back to network
  - Cache cleanup on activate removes old cache versions
  - Registered in HTML via `navigator.serviceWorker.register('sw.js')`
- **PWA Configuration:** [manifest.json](manifest.json) enables "Add to Home Screen" on mobile
  - Includes multiple favicon sizes (16x16, 32x32, 192x192, 512x512)
  - `display: "standalone"` for app-like experience
  - Update cache name in `sw.js` (`CACHE_NAME = 'vijay-kakade-portfolio-vX'`) when deploying breaking changes

## Cross-Cutting Concerns

### Form Submission Flow ([index.html](index.html#L300-L365))

1. User submits form → validation checks (name required, email regex, message ≥10 chars)
2. On error: Display alert with warning, preserve form data
3. On success: Show "Sending..." state on button, disable submit
4. POST to Formspree endpoint ([index.html](index.html#L220) — currently `https://formspree.io/f/mrbnreak`)
5. On response: Reset form, show success alert, restore button
6. Always restore button state even on errors (try/catch/finally pattern)

### Navigation Active State Management

- JavaScript detects scroll position and updates `.active` class on corresponding nav link
- Mobile: hamburger menu toggles visibility via `.active` class on nav element
- Desktop (≥995px): Always visible nav, hover/active underline styling
- Critical: Keep section IDs (`#home`, `#skills`, `#projects`, `#contact`) synced with nav href targets

### Mobile-First Breakpoints (from CSS)

- **<600px:** 2-column skills grid, stacked contact layout, reduced padding
- **600-900px:** Auto-fit skills columns, hamburger menu active
- **900-995px:** Nav dropdown, home section vertical stack
- **≥995px:** Full desktop: 4-column skills grid, flex home/contact side-by-side, persistent nav
- **Key pattern:** Max-width media queries override mobile defaults; don't use `max-width: 100%` on `.container`

### JavaScript Interactivity Patterns

1. **Typing animation:** Setup once on page load ([index.html](index.html#L274)); cycles through `texts` array ([index.html](index.html#L263)) with setTimeout delays (100ms typing, 50ms delete, 1000ms pause)
2. **Service Worker registration:** Safe try/catch in `window.addEventListener('load')` ([index.html](index.html#L410)); silently fails in non-HTTPS or unsupported browsers
3. **Form event handling:** Use `addEventListener` ([index.html](index.html#L341)), not inline `onsubmit`; async/await for fetch calls with try/catch/finally
4. **Navigation updates:** Scroll listener detects current section and updates `.active` class on nav links ([index.html](index.html#L390))
5. **No global state:** Each module (typing, form, nav) manages its own state locally
