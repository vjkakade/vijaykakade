# AI Coding Agent Instructions for Portfolio Website

## Project Overview
A modern, responsive portfolio website showcasing a professional profile. Single-page design with a hero section featuring animated typing text, social links, and a call-to-action button. Uses custom CSS with Font Awesome icons.

## Architecture & Key Components

### File Structure
- `index.html` - Single HTML file containing header navigation and hero section with profile content
- `style.css` - All styling (271 lines) handling layout, animations, and responsive design
- `main.jpg` - Profile image displayed in circular frame on hero section

### Core Design Pattern
- **Mobile-first responsive approach**: Uses `@media` queries at breakpoints (1000px, 995px)
- **Fixed header**: Navigation stays at top with z-index: 100
- **Animated typing effect**: Pseudo-element animation in `.typing-text span::before` with 20-second loop cycling through job titles
- **Color scheme**: Dark background (black #000000) with accent color #b74b4b (red-brown) for highlights

## Critical CSS Patterns & Conventions

### Responsive Breakpoints
- **1000px and below**: Adjusts `.home` layout spacing
- **995px and below**: Converts nav to dropdown menu (hidden by default, shown when `.active` class applied), stacks home section vertically

### Animation System
- **Typing effect**: Uses `@keyframes words` (20s infinite) changing `.typing-text span::before` content every 20% interval
- **Cursor blinking**: `@keyframes cursor` (0.6s infinite) toggles border-left color between black and accent color
- **Hover transitions**: Consistent 0.3s ease timing for interactive elements

### Styling Conventions
- **Base font size**: 62.5% on `html` for rem calculations (1rem = 10px)
- **Font family**: 'Poppins' from Google Fonts, imported at top
- **Accent color**: Always #b74b4b for active states, borders, text highlights
- **Button style**: Border-based design with hover fill effect (transparent → #b74b4b background)

## Development Workflow

### When Adding New Sections
1. Add `<section>` with appropriate class (inherits `min-height: 100vh`, `padding: 5rem 9%`)
2. Follow existing HTML structure: semantic sections with descriptive classes
3. Style with mobile breakpoints in mind - define desktop first, then override at breakpoints
4. Use rem units exclusively (no px) for scalability

### When Modifying Navigation
- The nav menu has `.active` state handling for mobile
- `nav a.active` marks current page (red underline on desktop, padding+border on mobile)
- Ensure all navigation links follow the existing font-size (1.8rem desktop, 2rem mobile)

### Image Handling
- Profile image in `.home-img img`: circular with `border-radius: 50%`
- Glow effect: `box-shadow: 0 0 25px solid #b74b4b`
- Responsive sizing: 32vw desktop, 70vw mobile

## Common Customization Points

- **Job titles animation**: Edit content values in `@keyframes words` (currently: Web Developer, Developer, Web Designer, Youtuber, Script Writer)
- **Social links**: Add/remove `<a>` tags in `.social-icons` with Font Awesome icons
- **Header brand name**: Change `.logo` text ("Alex" currently)
- **Timing adjustments**: Modify animation durations (cursor 0.6s, words 20s, transitions 0.3s)

## Naming Conventions
- Classes: kebab-case (`.home-content`, `.social-icons`)
- Animations: descriptive names (`cursor`, `words`)
- No element styling - all rules are class-based for flexibility
