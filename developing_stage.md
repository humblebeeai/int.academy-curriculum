Developing Stage Notes

Date: 2026-03-25

Summary
Detailed refactor and asset cleanup to improve structure, clarity, and build reliability.

Component structure changes
- Reorganized `src/components` into `content/`, `home/`, `ui/`, and `roadmap/`.
- Converted each component into its own folder with `index.tsx` + CSS module.
- Kept a single barrel export in `src/components/index.ts` and updated all export paths.
- Adjusted roadmap internal imports after folder move:
  - `src/components/roadmap/JourneyMap/index.tsx` now imports `phases` from `../roadmapData`.
  - `src/components/roadmap/RoadmapShowcase/index.tsx` now imports `JourneyMap` from `../JourneyMap`.
- Updated MDX import that used a direct component path:
  - `docs/engineering-fundamentals/terminal-algorithmic-basics.mdx` now imports `Skill` from `@site/src/components/content/SkillShowcase`.

Docs asset changes
- Created `docs/assets/images/` for curriculum illustrations.
- Moved 11 curriculum images from `static/img` to `docs/assets/images`.
- Updated all MDX image links to use relative paths into `docs/assets/images`.
- Restored images from git and re-moved them due to binary corruption caused by `apply_patch` on image files.

Component props and typing fixes
- Expanded `ResourceCard` `type` union to include all values used in MDX:
  `docs`, `tutorial`, `guide`, `book`, `paper`, `blog`, `practice`, `talk`.
- Mapped each new type to an icon in `TypeIcons`.

Build/serve validation
- Ran Docusaurus build and serve successfully.
- Build requires localstorage file flag in this environment:
  `NODE_OPTIONS="--localstorage-file=/tmp/docusaurus-localstorage" npm run build`.

Notes / follow-ups
- `static/img/iot.png` is currently unused (no references found).
