# Architecture & Development Guide

This document explains the technical architecture of the HumblebeeAI Academy Curriculum repository and how to work with it effectively.

## 🏗️ Tech Stack

This project is a static site generator built with:

* **[Docusaurus v3](https://docusaurus.io/)**: The core framework. It converts MDX files into a React-based single-page application (SPA).
* **[React](https://react.dev/)**: Used for the UI components and custom pages.
* **[MDX](https://mdxjs.com/)**: Allows us to write content in Markdown while embedding interactive React components.
* **[TypeScript](https://www.typescriptlang.org/)**: Used for type safety in configuration and components.
* **[Node.js](https://nodejs.org/)**: The runtime environment for building the site.

## 📂 Project Structure

```
/
├── .github/                # GitHub templates and workflows
├── docs/                   # 📚 THE CURRICULUM CONTENT
│   ├── school/             # Phase 1: School Program content
│   ├── softlanding/        # Phase 2: Soft Landing Program content
│   └── ...
├── src/                    # ⚛️ Source code
│   ├── components/         # Reusable React components (buttons, cards, etc.)
│   ├── css/                # Global styles (custom.css)
│   └── pages/              # Custom React pages (e.g., Landing Page)
├── static/                 # Static assets (images, downloadable files)
├── docusaurus.config.ts    # ⚙️ Main configuration file (nav, footer, plugins)
├── sidebars.ts             # 🧭 Sidebar navigation structure
└── package.json            # Dependencies and scripts
```

## 🛠️ Build Process

1. **Development**: `npm start`
    * Starts a local Webpack dev server with hot reloading.
    * Files are served from memory.

2. **Production Build**: `npm run build`
    * Docusaurus generates static HTML files for every route in the `build/` directory.
    * These files are ready to be served by any static hosting provider (Vercel, Netlify, GitHub Pages).
    * Static files are optimized (minified, code-split).

## 🧩 Component Library

We use a custom set of MDX components to enhance the learning experience. These are located in `src/components/`.

* **`<LearningPath />`**: Visualizes progress through modules.
* **`<Quiz />`**: Interactive quizzes (client-side).
* **`<TerminalBlock />`**: Mimics a terminal window for code examples.

*(Note: Component library expansion is planned for Phase 2)*

## 🌍 Internationalization (i18n)

*Currently in Setup Phase.*
Docusaurus supports i18n out of the box. We plan to support Spanish (es) and Korean (ko).
Translations will live in `i18n/[locale]/docusaurus-plugin-content-docs/current`.

## 🤝 Key Configuration Files

* **`docusaurus.config.ts`**: The brain of the site. Modify this to change the navbar, footer, site title, or add plugins.
* **`sidebars.ts`**: Controls the left navigation menu. When adding a new module, you usually need to register it here.
* **`src/css/custom.css`**: Global CSS variables and utility classes. We use standard CSS variables for theming (dark/light mode).
