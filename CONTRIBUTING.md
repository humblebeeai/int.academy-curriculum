# Contributing to the HumbleBeeAI Open Curriculum

Thank you for your interest in contributing. This curriculum is community-built and designed to stay current, high-quality, and useful for learners worldwide.

## Who Can Contribute

We welcome contributions from experienced practitioners who can raise the quality of the curriculum:

- **5+ years** relevant experience (industry or research)
- Ability to curate open resources responsibly
- Willingness to write clear outcomes, exercises, and project specs

## What You Can Contribute

**In scope:**

- Content additions and module improvements
- Projects and case studies
- Exercises and rubrics
- Templates for evaluation and reporting
- Track improvements and restructuring
- Bug fixes and corrections

**Out of scope:**

- Certification answer keys or internal evaluation materials
- Proprietary or paywalled resources

## Contribution Principles

1. **Outcome-first** — State what the learner can do after finishing.
2. **Proof-first** — Every module needs exercises or a project, ideally both.
3. **Role alignment** — Map additions to a specialization track or to Core Systems.
4. **Maintainability** — Prefer clean structure and strong modules over long lists.
5. **Respect creators** — Reference open resources correctly. Do not re-publish restricted content.

## Quality Gates

A contribution should satisfy all four gates:

### Gate A: Credible Authorship

5+ years relevant experience or equivalent research background.

### Gate B: Open and Reusable Sources

- Resources must be free and open.
- HumbleBeeAI-authored text and structure is CC BY-SA 4.0.
- Third-party resources remain under their own licenses.

### Gate C: Exercises and Projects Included

- Clear deliverables
- Acceptance criteria
- Suggested evaluation approach

### Gate D: Evaluation Clarity

- Metrics or rubric
- Common pitfalls and failure cases

## Module Submission Template

When proposing a new module or significant addition, use this structure:

```
Module title:
Role mapping:          (Core Systems / CV / DS / NLP / GenAI / SWE)
Prerequisites:
Learning outcomes:     (measurable — what the learner can do)
Open resources:        (with notes on why each is chosen)
Exercises:             (expected outputs)
Project spec:          (deliverables, acceptance criteria)
Evaluation rubric:     (or checklist)
Time estimate:         (rough hours)
Common pitfalls:
```

## How to Submit

### GitHub Pull Requests (preferred)

1. Fork the repository.
2. Create a feature branch (`feat/module-name`).
3. Make your changes following the template and principles above.
4. Submit a pull request with a clear description of what you are adding and why.

### Proposals and Discussion

For larger additions or structural changes, open a GitHub Issue first to discuss scope and alignment before writing a full module.

## Local Development Setup

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full tech stack and project structure.

**Quick start:**

```bash
git clone https://github.com/humblebeeai/int.academy-curriculum.git
cd int.academy-curriculum
npm install
npm start
```

The site runs at `http://localhost:3000` with hot reload. Curriculum content lives in the `docs/` directory as `.mdx` files.

## Content Guidelines

- Curriculum content uses [MDX](https://mdxjs.com/) (Markdown with React components).
- Use the existing custom components (`ResourceCard`, `TimeEstimate`, `SkillShowcase`, etc.) for consistency. See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full component library.
- Keep language direct and clear. Avoid filler.
- Time estimates should be honest and based on real experience.

## Review Process

1. Submit a PR or open an issue with your proposal.
2. Maintainers review for alignment with contribution principles and quality gates.
3. Feedback and iteration as needed.
4. Merge and publish with version notes.

Final approvals are handled by HumbleBeeAI department heads and core maintainers.

## Licensing

- **Project content and code**: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

By submitting a contribution, you agree that your contributions are licensed under CC BY-NC-SA 4.0.

---

## Message for Learners

> Just follow the mentors, do not miss the details because the details are the most important
