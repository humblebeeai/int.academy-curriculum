# HumbleBeeAI Academy Curriculum

**Mission:** Democratizing AI engineering education to create the top 1% of engineering talent.

This repository contains the **open-source roadmap** we use to train production-ready AI engineers. It gives you a structured progression: **what to learn, in what order, and what to build** at each step.

The curriculum is **fully self-paced and free**. If you want faster iteration and deeper real-world practice, **HumbleBeeAI Academy** follows the same roadmap with an added layer: **mentorship, code reviews, and internal scenario projects** running in parallel.

---

## Why This Exists

Most aspiring AI engineers face three barriers:

- **Theory-Practice Gap**: You learn concepts, but not how to build production systems.
- **Portfolio Paradox**: You need experience to get hired, but need a job to gain experience.
- **Isolated Learning**: Self-teaching is lonely, demotivating, and lacks feedback.

HumbleBeeAI was built to eliminate these barriers through structured learning, hands-on building, and community feedback.

---

## Open Curriculum vs Academy

**The curriculum is the map. The Academy is the applied layer.**

- **Open Curriculum (this repo)**:
  - Self-paced learning path and resources
  - Clear sequencing and project-driven progression
  - Community discussion and contributions

- **HumbleBeeAI Academy (optional)**:
  - Mentorship and code/design reviews
  - Internal scenario-based projects that simulate real work
  - Structured weekly cadence and accountability
  - Learners typically spend **35-70%** on curriculum modules and the rest applying them in scenario projects with mentor review

---

## Curriculum Structure

### Engineering Fundamentals
**Duration:** 2-4 months (self-paced)  
**Goal:** Build the engineering fundamentals that make everything else possible.  
**Outcome:** Strong fundamentals in tools, math, and data workflows so you can build confidently without getting stuck on basics.

Modules:
- Terminal & Algorithmic Basics
- Calculus & Algebra
- Probability & Statistics
- Data Manipulation
- IoT Activation

### Soft Landing
**Duration:** 3-6 months (self-paced)  
**Goal:** Master ML foundations and the system skills required to deploy reliably.  
**Outcome:** Build end-to-end ML systems: training, evaluation, deployment, and reliability basics using modern tooling.

Modules:
- Math & ML Fundamentals (PyTorch, optimization, gradient descent)
- Intro to AI Engineering (deep learning, transformers/LLMs, clean code)
- Systems & Networking (deployment fundamentals, security, cloud mental models)
- Fullstack Toolkit (APIs, databases, product-shaped systems)

### Phase 3: Specializations (Soft Landing)
**Duration:** 2-4 months per track  
**Goal:** Gain deep domain expertise with proof through projects.  
**Outcome:** Domain-specific projects that demonstrate depth. Each track ends with a capstone designed to look like real work: clear problem framing, measurable results, and a reproducible or deployable system.

Tracks:
- Computer Vision (classification, detection)
- Data Science (statistical modeling, BI)
- NLP & LLMs (transformers, fine-tuning, agents)
- AI Software Engineering (distributed systems, scalability, production ML)

---

## Getting Started (Contributors)

To work on the curriculum or docs locally, you can either run the Docusaurus site directly with Node or use Docker.

### Run Locally with Node

**Prerequisites**

- **Node.js:** >= 20 (matches the `engines` field in `package.json`)
- **npm:** Comes bundled with Node (this repo uses `npm` and `package-lock.json`)

**Steps**

1. **Clone the repo**

   ```bash
   git clone https://github.com/humblebeeai/int.academy-curriculum.git
   cd int.academy-curriculum
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the dev server**

   ```bash
   npm start
   ```

   This runs `docusaurus start` and serves the site at `http://localhost:3000` with hot reload.

4. **Build the static site**

   ```bash
   NODE_OPTIONS="--localstorage-file=/tmp/docusaurus-localstorage" npm run build
   ```

5. **Preview the production build**

   ```bash
   npm run serve
   ```

   This serves the built site (by default on `http://localhost:3000`) so you can verify production output.

---

## Versioning Workflow

Use the GitHub Actions workflow **1. Bump Version** to create a release.
Docs snapshots are optional and disabled by default.

Steps:

1. Run **1. Bump Version** and choose `patch`, `minor`, or `major`.
2. The workflow bumps `package.json`, commits, and tags `vX.Y.Z`.
3. **2. Build and Publish** runs on the tag to build and create a GitHub release.
4. **3. Update Changelog** updates `CHANGELOG.md` after the release.
5. **Publish Docs** deploys the updated docs to GitHub Pages.

Local script (manual alternative):

```bash
./scripts/bump-version.sh -b=patch -c -t -p

Optional: include docs snapshot by adding `-d`.
```

### Run Locally with Docker

If you prefer not to install Node locally, you can use the provided `Dockerfile` and `compose.yml`.

From the repo root:

1. **Build the image**

   ```bash
   docker compose build
   ```

2. **Run the container**

   ```bash
   docker compose up
   ```

   After startup, open `http://localhost:3000` in your browser (or whichever port is configured in `compose.yml`).

3. **Stop the container**

   ```bash
   docker compose down
   ```

### Editing Curriculum Content

- Most curriculum content lives under the `docs/` directory as `.mdx` files:
  - Engineering Fundamentals: `docs/engineering-fundamentals/index.mdx`, `docs/engineering-fundamentals/terminal-algorithmic-basics.mdx`, `docs/engineering-fundamentals/calculus-algebra.mdx`, etc.
  - Softlanding / Core Systems: `docs/softlanding/core-systems/**/*.mdx`
  - Specializations: `docs/softlanding/specializations/**/*.mdx`
  - Shared resources: `docs/resources.mdx`, `docs/index.mdx`, etc.
- With the dev server running, changes you make to these files will hot-reload in your browser (for example, editing `docs/engineering-fundamentals/terminal-algorithmic-basics.mdx` updates the corresponding Engineering Fundamentals module page).
- For style and component usage guidelines, see `AI_CONTEXT.md`.
- For contribution workflow (issues/PRs, licensing), see the **Contributing** section below.

---

## Learning Philosophy

- **Learning by Doing**: We reject tutorial-only learning. Build continuously.  
  In the Academy, this is reinforced through scenario projects and mentor reviews.
- **Longitudinal Growth**: Real expertise compounds through progressive difficulty and repetition.
- **Community-Driven**: Learn with peers, ask questions, and contribute improvements.

---

## Community

Join our Telegram community to connect with fellow learners and contributors:

- **[AI Roadmap Community on Telegram](https://t.me/airoadmapcommunity)**
- Ask questions, share resources, and collaborate on projects
- Get support from the community and find accountability partners
- Connect with contributors to suggest improvements

---

## License

- Curriculum content: **CC BY-NC-SA 4.0**
- Code in this repo: **Unlicensed**

---

## Contributing

PRs are welcome. If you spot outdated resources, unclear sections, or missing projects, open an issue or submit a PR.
