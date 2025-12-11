# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and Font Awesome icons. Features a hero section with animated typing text, social links, and a fixed navigation header.

## Quick Start

Install dependencies and run linters:

```powershell
npm install
npm run lint
```

## PowerShell Execution Policy

On Windows PowerShell, you may see an error about `npm.ps1` being blocked. To temporarily bypass the policy for your current session:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
npm run lint
```

Alternatively, use Command Prompt (no policy change required):

```cmd
npm install
npm run lint
```

## Linting

This project uses **stylelint** and **htmlhint** to enforce code quality standards.

### Available Commands

- `npm run lint` — Run both CSS and HTML linters
- `npm run lint:css` — Run stylelint on all CSS files
- `npm run lint:html` — Run htmlhint on all HTML files

### Configuration

- **Stylelint** (`.stylelintrc.json`): Extends `stylelint-config-standard` with a project-specific rule enforcing kebab-case class names
- **HTMLHint** (`.htmlhintrc`): Enforces basic HTML best practices
- **GitHub Actions** (`.github/workflows/lint.yml`): Runs linters automatically on push and pull requests

### Known Linting Rules

Disabled rules (for flexibility in this small project):

- `no-descending-specificity` — Allows CSS selectors to be written naturally without strict ordering

## Project Structure

```text
.
├── index.html              # Main HTML file with header and hero section
├── style.css               # All styling (responsive, animations)
├── main.jpg                # Profile image
├── package.json            # Dependencies and lint scripts
├── .stylelintrc.json       # CSS linting configuration
├── .htmlhintrc             # HTML linting configuration
└── .github/workflows/lint.yml  # CI/CD linting workflow
```

## Features

- **Responsive design** with mobile-first breakpoints (995px, 1000px)
- **Animated typing effect** cycling through job titles
- **Fixed header** with dropdown navigation on mobile
- **Accent color** (#b74b4b) throughout for visual consistency
- **Social media links** with Font Awesome icons

See [.github/copilot-instructions.md](.github/copilot-instructions.md) for AI agent development guidelines.
