# AI Developer Context & Guidelines

## 🧠 Project Overview

**HumblebeeAI Academy Curriculum** is an open-source educational platform built with **Docusaurus**.
It provides a structured learning path for students moving from basic coding to advanced Full Stack and AI engineering.

**Mission:** Transform students into technical junior engineers through rigorous, project-based learning.

---

## 🏗️ Architecture

- **Framework:** Docusaurus (React + MDX)
- **Styling:** CSS Modules + Custom Global CSS (No Tailwind dependency intentionally).
- **State Management:** *None* (Stateless content site).
- **Deployment:** Static site generation (`npm run build`).

## 🎨 Design System

We enforce a **Strict Monochrome + Semantic Color** system.

### 1. Color Palette (HSL)

All colors are defined in `src/css/custom.css`.

- **Primary:** Black (Light Mode) / White (Dark Mode)
- **Status Colors:**
  - `Success`: Green (HSL 142)
  - `Warning`: Amber (HSL 35)
  - `Danger`: Red (HSL 0)
  - `Info`: Blue (HSL 210)
  
**⚠️ Rule:** NEVER use hex codes in components. ALWAYS use semantic variables:

- `var(--ifm-color-success-light)` (Backgrounds)
- `var(--ifm-color-success)` (Borders)
- `var(--ifm-color-success-dark)` (Text)

### 2. Typography

- **Headings:** 'Space Grotesk'
- **Body:** 'Inter'

---

## 🧩 Component Library

All components are located in `src/components/`.

### `ResourceCard`

Use for linking external resources or internal reference material.

```tsx
<ResourceCard 
  title="React Docs" 
  url="https://react.dev" 
  type="documentation" 
  difficulty="intermediate"
  summary="Official documentation for React."
/>
```

### `DifficultyTag`

Visual indicator of content complexity.

```tsx
<DifficultyTag level="beginner" />
<DifficultyTag level="intermediate" />
<DifficultyTag level="advanced" />
```

### `ConceptMap` (Mermaid)

Use for visualizing relationships between topics.

```tsx
<ConceptMap 
  diagram={`
    graph TD;
    A[Start] --> B{Decision};
    B -- Yes --> C[Result];
  `}
/>
```

### `SkillShowcase`

Grid layout for displaying acquired skills.

```tsx
<SkillShowcase 
  skills={[
    { title: "Python", level: "Advanced", icon: "python" },
    { title: "Docker", level: "Intermediate", icon: "docker" }
  ]}
/>
```

---

## 📝 Content Guidelines (MDX)

- **Tone:** Professional, encouraging, technical but accessible.
- **Structure:**
  - Use `[TOC]` for long pages.
  - Use standard Markdown headers (`#`, `##`, `###`).
  - Use Admonitions (`:::info`, `:::tip`, `:::danger`) liberally to highlight key points.
- **Checklists:** Use standard markdown `[ ]` / `[x]` for task tracking. *Do NOT use custom checkbox components.*

## 🛠️ Contribution Workflow

1. **Phase 0:** Plan changes via `implementation_plan.md`.
2. **Phase 1:** Implement changes.
3. **Phase 2:** Verify with `npm run build`.
4. **Phase 3:** Update `task.md`.

## 🤖 Automations

- **Linting:** Standard Docusaurus/ESLint setup.
- **Formatting:** Prettier is recommended.
- **Accessibility:** Ensure WCAG 2.1 AA Compliance (Contrast ratios 4.5:1).
