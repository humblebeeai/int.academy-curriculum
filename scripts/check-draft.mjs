import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const build = resolve(root, 'build');
const draft = resolve(build, 'draft');
assert(existsSync(draft), 'Build the website before running draft:check.');

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(path) : entry.name.endsWith('.html') ? [path] : [];
  });
}

const pages = htmlFiles(draft);

for (const path of pages) {
  const html = readFileSync(path, 'utf8');
  const label = relative(build, path);
  assert(/<meta[^>]*name="robots"[^>]*content="[^"]*noindex[^"]*"/.test(html), `${label}: missing noindex`);
  assert(html.includes('Draft curriculum — requirements may change during review.'), `${label}: missing Draft banner`);
  assert.match(html, /href="\/docs"[^>]*>View the Current curriculum/, `${label}: missing Current link`);
  assert.match(html, /href="\/draft"[^>]*>Draft curriculum/, `${label}: missing Draft menu entry`);
  for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
    assert(html.includes(`id="${decodeURIComponent(anchor)}"`), `${label}: missing in-page section #${anchor}`);
  }
  for (const [, href] of html.matchAll(/href="(\/draft[^"?]*)"/g)) {
    const [route, anchor] = href.split('#');
    const target = resolve(build, route.slice(1));
    const file = [target, `${target}.html`, resolve(target, 'index.html')].find((candidate) => existsSync(candidate) && candidate.endsWith('.html'));
    assert(file, `${label}: missing local route ${href}`);
    if (anchor) assert(readFileSync(file, 'utf8').includes(`id="${decodeURIComponent(anchor)}"`), `${label}: missing section ${href}`);
  }
}
assert(!readFileSync(resolve(build, 'sitemap.xml'), 'utf8').includes('/draft'), 'Draft must not appear in sitemap.');

const efRequired = ['terminal-algorithmic-basics', 'math-for-ai', 'data-manipulation'];
const efElectives = ['elective-data-visualization', 'elective-github-actions', 'elective-advanced-sql', 'elective-bash-automation', 'elective-algorithms', 'advanced-statistical-inference'];
const coreRequired = ['software-engineering', 'applied-ml-deep-learning', 'llm-applications', 'systems-networking-data', 'apis-containers-deployment'];
const electives = ['e1-retrieval-rag', 'e2-agents-tools', 'e3-model-adaptation', 'e4-backend-data', 'e5-delivery-mlops'];
const generated = resolve(root, '.docusaurus/docusaurus-plugin-content-docs/draft/p');
const version = readdirSync(generated).map((file) => JSON.parse(readFileSync(resolve(generated, file), 'utf8'))).find((data) => data.version?.pluginId === 'draft').version;
function category(items, label) {
  for (const item of items) {
    if (item.type === 'category' && item.label === label) return item;
    const nested = item.items && category(item.items, label);
    if (nested) return nested;
  }
}
function checkStage(label, prefix, required, electiveModules, electiveLabel, extra = []) {
  const stage = category(version.docsSidebars.tutorialSidebar, label);
  assert(stage, `Missing sidebar stage ${label}`);
  const visible = stage.items.filter((item) => !item.unlisted);
  assert.deepEqual(visible.map((item) => item.docId), [...required, ...electiveModules, ...extra].map((slug) => `${prefix}/${slug}`), `${label}: required modules and electives must be direct siblings in order`);
  const overview = readFileSync(resolve(build, stage.href.slice(1), 'index.html'), 'utf8');
  for (const slug of [...required, ...electiveModules]) assert(overview.includes(`/draft/${prefix}/${slug}`), `${label}: overview missing ${slug}`);
  for (const slug of electiveModules) {
    const item = visible.find((entry) => entry.docId === `${prefix}/${slug}`);
    assert(item.label.startsWith(`${electiveLabel} · `), `${slug}: missing visible ${electiveLabel} label`);
  }
  for (const slug of [...required, ...electiveModules]) {
    const source = readFileSync(resolve(root, `draft_docs/${prefix}/${slug}.mdx`), 'utf8');
    const html = readFileSync(resolve(build, `draft/${prefix}/${slug}/index.html`), 'utf8');
    const article = html.match(/<article[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert(article, `${slug}: missing rendered article`);
    assert(!/\bOptional\b/.test(article), `${slug}: use Elective for module choices and Further reading for supporting resources`);
    assert(article.includes(`/draft/${prefix}`), `${slug}: missing stage return link`);
    const decoded = article.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"');
    const cards = [...source.matchAll(/<ResourceCard\s+([\s\S]*?)\/>/g)];
    assert(cards.length, `${slug}: missing clickable learning resources`);
    for (const [, props] of cards) {
      const attributes = Object.fromEntries([...props.matchAll(/(title|url|description)=("(?:[^"\\]|\\.)*")/g)].map(([, key, value]) => [key, JSON.parse(value)]));
      assert(attributes.description?.length > 20, `${slug}: resource missing assigned scope`);
      assert(decoded.includes(`href="${attributes.url}"`), `${slug}: resource link did not render: ${attributes.title}`);
      assert(decoded.includes(attributes.title), `${slug}: resource title did not render: ${attributes.title}`);
      assert(decoded.includes(attributes.description), `${slug}: resource scope did not render: ${attributes.title}`);
    }
  }
}
checkStage('Engineering Fundamentals', 'engineering-fundamentals', efRequired, efElectives, 'Elective');
checkStage('Core Systems', 'softlanding/core-systems', coreRequired, electives, 'Elective', ['handover']);
for (const [slug, anchors] of Object.entries({
  'software-engineering': ['r1'], 'applied-ml-deep-learning': ['r2', 'derivatives-preparation', 'r3'],
  'llm-applications': ['r4'], 'systems-networking-data': ['r5'], 'apis-containers-deployment': ['r6'],
  'handover': ['project', 'completion'],
})) {
  const html = readFileSync(resolve(draft, `softlanding/core-systems/${slug}/index.html`), 'utf8');
  for (const anchor of anchors) assert(html.includes(`id="${anchor}"`), `${slug}: missing learning section ${anchor}`);
}
const coreOverview = readFileSync(resolve(draft, 'softlanding/core-systems/index.html'), 'utf8');
assert(coreOverview.includes('exactly two electives'), 'Core Systems must require exactly two electives.');
const efOverview = readFileSync(resolve(draft, 'engineering-fundamentals/index.html'), 'utf8');
assert(efOverview.includes('Complete exactly two electives') && efOverview.includes('three required modules and two electives'), 'Engineering Fundamentals must require two electives.');
const math = readFileSync(resolve(draft, 'engineering-fundamentals/math-for-ai/index.html'), 'utf8');
for (const anchor of ['linear-algebra', 'probability-statistics', 'completion']) assert(math.includes(`id="${anchor}"`), `Math for AI: missing ${anchor}`);

const current = readFileSync(resolve(build, 'docs/index.html'), 'utf8');
assert(!current.includes('Draft curriculum — requirements may change during review.'), 'Current must not display Draft banner.');
assert(!/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/.test(current), 'Current must remain indexable.');
const metadata = JSON.parse(readFileSync(resolve(root, 'curriculum-versions.json'), 'utf8'));
assert(metadata.every(({ name }) => /^\d{4}-\d{2}-\d{2}$/.test(name)), 'Draft must not enter dated snapshot retention.');
for (const { name } of metadata) {
  const historical = readFileSync(resolve(build, `docs/${name}/index.html`), 'utf8');
  assert(historical.includes('This snapshot is preserved for comparison and is no longer updated.'), `Historical banner missing for ${name}`);
  assert(!historical.includes('Draft curriculum — requirements may change during review.'), `Historical version ${name} shows Draft banner`);
}
console.log(`Verified ${pages.length} Draft pages: banners, noindex, menu entry, local routes and anchors, three EF modules with six elective siblings, five Core groups covering R1–R6 with five elective siblings, rendered resource links and scopes, sitemap exclusion, and Current/historical isolation.`);
