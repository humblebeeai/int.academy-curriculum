# Contributing to HumblebeeAI Academy Curriculum

First off, thank you for considering contributing to HumblebeeAI Academy! It's people like you that make this open-source curriculum such a powerful tool for the community.

We welcome contributions from everyone. By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## ⚡ Quick Start

1. **Fork** the repository.
2. **Clone** your fork:

    ```bash
    git clone https://github.com/YOUR_USERNAME/int.academy-curriculum.git
    cd int.academy-curriculum
    ```

3. **Install dependencies**:

    ```bash
    npm ci
    ```

4. **Start the dev server**:

    ```bash
    npm start
    ```

5. Open `http://localhost:3000`.

## 🛠️ Development Workflow

We follow a standard GitHub Flow.

1. **Branching**: always create a new branch for your work.
    * `feat/` for new content or features
    * `fix/` for bug fixes or typo corrections
    * `docs/` for documentation updates

    ```bash
    git checkout -b feat/advanced-nlp-module
    ```

2. **Committing**: We prefer [Conventional Commits](https://www.conventionalcommits.org/).
    * `feat: add new vector database module`
    * `fix: correct broken link in math primer`
    * `docs: update installation guide`

3. **Pull Requests**:
    * Submit PRs to the `main` branch.
    * Keep PRs small and focused. One concept per PR is best.
    * Fill out the PR template completely.

## 📝 Content Guidelines

### Writing Style

* **Voice**: Senior Engineer Mentor. Supportive, authoritative, direct.
* **Clarity**: Explain "Why" before "How".
* **Brevity**: Respect the reader's time. Use bullets and diagrams.

### Technical format

* Use **MDX** for all content.
* Use our **AutoIcon** system for lists (e.g., `- ✅ ...`).
* **Images**: Place in `static/img/`. Use focused, high-res diagrams.
* **Code**: Use fenced code blocks with language specification: ` ```python `.

## 📐 Coding Standards

This project uses:

* **Prettier** for formatting.
* **TypeScript** for config and components.
* **Docusaurus v3** strict mode.

Run checks before pushing:

```bash
npm run typecheck
npm run build
```

## ⚖️ License & IP

By contributing, you agree that:

1. Your **content contributions** (guides, educational text) are licensed under **CC-BY-SA 4.0**.
2. Your **code contributions** (components, scripts) are licensed under **MIT**.
3. You have the right to contribute this work.

## 🐛 Reporting Isues

* **Security**: See [SECURITY.md](SECURITY.md).
* **Bugs/Typos**: File a [GitHub Issue](https://github.com/humblebeeai/int.academy-curriculum/issues).

Thank you for helping us build the world's best open-source AI engineering curriculum! 🐝
