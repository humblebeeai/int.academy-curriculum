# Architecture & Development Guide

This document explains the technical architecture of the HumbleBeeAI Academy Curriculum repository and how to work with it effectively.

## 🏗️ Tech Stack

This project is a static site generator built with:

- **[Docusaurus v3](https://docusaurus.io/)**: The core framework. It converts MDX files into a React-based single-page application (SPA).
- **[React](https://react.dev/)**: Used for the UI components and custom pages.
- **[MDX](https://mdxjs.com/)**: Allows us to write content in Markdown while embedding interactive React components.
- **[TypeScript](https://www.typescriptlang.org/)**: Used for type safety in configuration and components.
- **[Node.js](https://nodejs.org/)**: The runtime environment for building the site.

## 📂 Project Structure

```
/
├── .github/                # GitHub templates and workflows
├── docs/                   # 📚 THE CURRICULUM CONTENT
│   ├── engineering-fundamentals/   # Engineering Fundamentals content
│   ├── softlanding/        # Soft Landing Program content
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

## 🧩 Component Library

We use a custom set of MDX components to enhance the learning experience. These are located in `src/components/`.

- **`<LearningPath />`**: Visualizes progress through modules.
- **`<Quiz />`**: Interactive quizzes (client-side).
- **`<TerminalBlock />`**: Mimics a terminal window for code examples.

_(Note: Component library expansion is planned for Soft Landing)_

## 🤝 Key Configuration Files

- **`docusaurus.config.ts`**: The brain of the site. Modify this to change the navbar, footer, site title, or add plugins.
- **`sidebars.ts`**: Controls the left navigation menu. Uses auto-generation from the docs folder structure.
- **`src/css/custom.css`**: Global CSS variables and utility classes. We use standard CSS variables for theming (dark/light mode).
