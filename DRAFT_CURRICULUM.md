# Draft curriculum review and release

The proposed curriculum lives in `draft_docs/` and is served at `/draft` by the
`draft` documentation plugin. Current and dated curricula continue using the
`default` plugin. Draft is editable, public after deployment, marked noindex,
and excluded from sitemap and dated-snapshot retention.

## Source to page checklist

Source documents supplied for this revision:

- Engineering Fundamentals.docx
- Soft Landing — Core Systems _ Student Guide.docx

| Source section | Draft destination | Review focus |
| --- | --- | --- |
| EF purpose, goals, outcomes, prerequisites | Engineering Fundamentals introduction | Python/algebra/English readiness; NumPy before linear algebra |
| Terminal and filesystem | Terminal page | All 19 lessons and interactive exercises |
| Git and GitHub | Git page | Branch, PR, conflict resolution, merge |
| Debugging | Debugging page | Runtime, logic, and edge-case failures |
| HackerRank preparation kit | Algorithms page | Full four-week kit remains required |
| Linear algebra | Linear algebra page | Five units; four notebooks; no integrated project |
| Core statistics | Statistics page | Units 1–5 and 7–12; 80% on every unit test; Academy verification |
| Excluded study design | Statistics page | Unit 6 explicitly excluded; no mandatory full-course challenge |
| Advanced inference | Advanced Statistical Inference page | Units 13–16 together earn one optional extension |
| NumPy, Pandas, SQL, EDA | Four data module pages and Data Foundations overview | Practical outputs and interpretation |
| Five EF extensions | Optional Extensions page | Optional; paid access notes retained; no required count |
| Core Systems purpose and prerequisites | Soft Landing and Core Systems introductions | Equivalent direct entry; six required modules |
| R1–R6 | Six required-module pages | Learning, resources, practice, expected outputs, review |
| E1–E5 | Five elective pages and Electives overview | Exactly two; separate evidence for each |
| Integrated project | Integrated Project page | Baseline, evaluation, persistence, deployment, review revision |
| Learning approach and completion | Completion page | Five completion dimensions; responsible AI use; access alternatives |
| Existing specializations | Copied specialization pages | Requirements unchanged; local links use `/draft` |

## Revisions made beyond the guides

- Added a required Python environment exercise before dependent notebooks and
  scripts: isolated environment, dependencies, kernel selection, recreation,
  and an import-failure diagnosis. R1 still introduces uv project management.
- Added a derivatives bridge before R3. Derivatives are no longer required at
  stage entry. Practice covers finite differences, gradient direction, and a
  learning-rate failure; a complete calculus course is not required.
- Specified the four linear algebra notebook evidence areas without introducing
  an integrated EF project.
- Added explicit submission and review checks. Statistics retains its numeric
  threshold; other modules require all stated competencies rather than a new
  aggregate score. Incomplete evidence is revised after feedback.
- Preserved advanced algorithm requirements and Unit 6 exclusion; rebalancing
  either is outside this revision.
- Marked source hour estimates provisional. Other workloads remain pending
  pilot. No new overall total or cohort calendar is asserted.
- Retained former Core Systems routes as unlisted compatibility pages. Required
  curriculum navigation goes to the new modules.

## Resource audit

The Word hyperlink targets are preserved, except direct GitHub Skills course
links replace the course catalog and the Andrew Ng resource links directly to
its existing lecture source. Added setup references use Python and JupyterLab
documentation. The derivatives bridge uses selected Khan Academy calculus.

Khan Academy's Statistics and Probability course must be selected rather than
AP Statistics. Unit 15 and Unit 16 are present in the provider's current index;
follow the topic names if numbering changes. Unit test scores and Academy
verification remain separate evidence. External providers can change content,
login requirements, pricing, or model availability; review the assigned subset
before using this curriculum with a cohort. Paid optional DataCamp/book access
is identified in the extension page. No resource-completion certificate alone
substitutes for the required practical evidence.

## Initial publication

1. Review this change register and the source-to-page checklist in one PR.
2. Run `npm run typecheck`, `npm run build`, and `npm run draft:check`.
3. Inspect desktop/mobile Draft navigation, banners, overview, module lists,
   and a copied specialization. Check Current and a dated snapshot too.
4. Merge after review. Publish Docs deploys changes to Draft content, config,
   sidebar, and theme. No package tag or curriculum snapshot is needed.
5. Verify `/draft` on the deployed site. Keep editing Draft during feedback;
   do not silently replace Current.

The current production workflow publishes to GitHub Pages. A Wrangler static
assets config also exists; this change uses the existing Publish Docs workflow
and does not change hosting infrastructure.

## Later promotion

Promotion is a separate reviewed change. First archive the outgoing Current
curriculum with Publish Curriculum Version from main, using the actual
publication date, then explicitly run Publish Docs to publish that archive.
Do not rely on a push made by GITHUB_TOKEN to trigger another workflow.

Migrate the approved Draft content to `docs/`, update README and homepage
summaries, preserve compatibility URLs, and replace the Draft plugin with
redirects from each `/draft` URL to its corresponding `/docs` URL. Remove the
Draft menu link and banner support. Validate redirects and existing historical
version navigation before merging. Publish a new dated snapshot of the revised
curriculum after promotion and explicitly deploy it. Never edit an existing
published snapshot to incorporate the Draft.
