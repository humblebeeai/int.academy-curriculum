import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const build = resolve(root, 'build');
const docs = resolve(build, 'docs');
const metadata = JSON.parse(readFileSync(resolve(root, 'curriculum-versions.json'), 'utf8'));
const snapshotNames = new Set(metadata.map(({ name }) => name));
assert(existsSync(docs), 'Build the website before running curriculum:check.');

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(path) : entry.name.endsWith('.html') ? [path] : [];
  });
}

const docMetadataDir = resolve(root, '.docusaurus/docusaurus-plugin-content-docs/default');
const unlistedRoutes = new Set(readdirSync(docMetadataDir).filter((file) => file.endsWith('.json')).map((file) => JSON.parse(readFileSync(resolve(docMetadataDir, file), 'utf8'))).filter((doc) => doc.version === 'current' && doc.unlisted).map((doc) => doc.permalink.replace(/\/$/, '')));
const pages = htmlFiles(docs).filter((path) => !snapshotNames.has(relative(docs, path).split('/')[0]));

for (const path of pages) {
  const html = readFileSync(path, 'utf8');
  const label = relative(build, path);
  const route = "/" + relative(build, path).replace(/\/index\.html$/, "");
  if (!unlistedRoutes.has(route)) assert(!/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html), `${label}: Current must be indexable`);
  assert(!html.includes('Draft curriculum — requirements may change during review.'), `${label}: remove the Draft banner`);
  assert(!/href="\/draft"/.test(html), `${label}: remove the Draft navigation entry`);
  for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
    assert(html.includes(`id="${decodeURIComponent(anchor)}"`), `${label}: missing in-page section #${anchor}`);
  }
  for (const [, href] of html.matchAll(/href="(\/docs[^"?]*)"/g)) {
    const [route, anchor] = href.split('#');
    const target = resolve(build, route.slice(1));
    const file = [target, `${target}.html`, resolve(target, 'index.html')].find((candidate) => existsSync(candidate) && candidate.endsWith('.html'));
    assert(file, `${label}: missing local route ${href}`);
    if (anchor) assert(readFileSync(file, 'utf8').includes(`id="${decodeURIComponent(anchor)}"`), `${label}: missing section ${href}`);
  }
}
const sitemap = readFileSync(resolve(build, 'sitemap.xml'), 'utf8');
assert(!sitemap.includes('/draft'), 'Legacy Draft redirects must not appear in sitemap.');
assert(sitemap.includes('/docs/engineering-fundamentals/math-for-ai'), 'Current modules must appear in sitemap.');

const efRequired = ['terminal-algorithmic-basics', 'math-for-ai', 'data-manipulation'];
const efElectiveSections = ['data-visualization', 'github-actions', 'advanced-sql', 'bash-automation', 'algorithms', 'advanced-statistical-inference'];
const efElectives = ['electives'];
const coreRequired = ['software-engineering', 'applied-ml-deep-learning', 'llm-applications', 'systems-networking-data', 'apis-containers-deployment'];
const coreElectiveSections = ['e1-retrieval-rag', 'e2-agents-tools', 'e3-model-adaptation', 'e4-backend-data', 'e5-delivery-mlops'];
const electives = ['electives'];
const generated = resolve(root, '.docusaurus/docusaurus-plugin-content-docs/default/p');
const version = readdirSync(generated).map((file) => JSON.parse(readFileSync(resolve(generated, file), 'utf8'))).find((data) => data.version?.pluginId === 'default' && data.version.version === 'current').version;
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
  for (const slug of [...required, ...electiveModules]) assert(overview.includes(`/docs/${prefix}/${slug}`), `${label}: overview missing ${slug}`);
  for (const slug of electiveModules) {
    const item = visible.find((entry) => entry.docId === `${prefix}/${slug}`);
    assert(item.label.startsWith(`${electiveLabel} · `), `${slug}: missing visible ${electiveLabel} label`);
  }
  for (const slug of [...required, ...electiveModules]) {
    const source = readFileSync(resolve(root, `docs/${prefix}/${slug}.mdx`), 'utf8');
    const html = readFileSync(resolve(build, `docs/${prefix}/${slug}/index.html`), 'utf8');
    const article = html.match(/<article[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert(article, `${slug}: missing rendered article`);
    assert(!/\bOptional\b/.test(article), `${slug}: use Elective for module choices and Further reading for supporting resources`);
    assert(article.includes(`/docs/${prefix}`), `${slug}: missing stage return link`);
    const decoded = article.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"');
    const cards = [...source.matchAll(/<ResourceCard\s+([\s\S]*?)\/>/g)];
    assert(cards.length, `${slug}: missing clickable learning resources`);
    assert.equal([...article.matchAll(/data-resource-scope="full"/g)].length, cards.length, `${slug}: every resource must show its full assigned scope`);
    for (const [, props] of cards) {
      const attributes = Object.fromEntries([...props.matchAll(/(title|url|description)=("(?:[^"\\]|\\.)*")/g)].map(([, key, value]) => [key, JSON.parse(value)]));
      assert(attributes.description?.length > 20, `${slug}: resource missing assigned scope`);
      assert(decoded.includes(`href="${attributes.url}"`), `${slug}: resource link did not render: ${attributes.title}`);
      assert(decoded.includes(attributes.title), `${slug}: resource title did not render: ${attributes.title}`);
      assert(decoded.includes(attributes.description), `${slug}: resource scope did not render: ${attributes.title}`);
    }
  }
}
checkStage('Engineering Fundamentals', 'engineering-fundamentals', efRequired, efElectives, 'Electives');
checkStage('Core Systems', 'softlanding/core-systems', coreRequired, electives, 'Electives', ['handover']);
for (const [slug, anchors] of Object.entries({
  'software-engineering': ['r1'], 'applied-ml-deep-learning': ['r2', 'derivatives-preparation', 'r3'],
  'llm-applications': ['r4'], 'systems-networking-data': ['r5'], 'apis-containers-deployment': ['r6'],
  'handover': ['project', 'completion'],
})) {
  const html = readFileSync(resolve(docs, `softlanding/core-systems/${slug}/index.html`), 'utf8');
  for (const anchor of anchors) assert(html.includes(`id="${anchor}"`), `${slug}: missing learning section ${anchor}`);
}
const coreOverview = readFileSync(resolve(docs, 'softlanding/core-systems/index.html'), 'utf8');
assert(coreOverview.includes('exactly two electives'), 'Core Systems must require exactly two electives.');
const efOverview = readFileSync(resolve(docs, 'engineering-fundamentals/index.html'), 'utf8');
assert(efOverview.includes('Complete exactly two electives') && efOverview.includes('three required modules and two electives'), 'Engineering Fundamentals must require two electives.');
const math = readFileSync(resolve(docs, 'engineering-fundamentals/math-for-ai/index.html'), 'utf8');
for (const anchor of ['linear-algebra', 'probability-statistics', 'completion']) assert(math.includes(`id="${anchor}"`), `Math for AI: missing ${anchor}`);

const illustrations = {
  'engineering-fundamentals/math-for-ai': 'math_ml',
  'engineering-fundamentals/data-manipulation': 'data_engineering',
  'softlanding/core-systems/software-engineering': 'software_eng',
  'softlanding/core-systems/applied-ml-deep-learning': 'advanced_ai',
  'softlanding/core-systems/llm-applications': 'nlp',
  'softlanding/core-systems/systems-networking-data': 'systems',
  'softlanding/core-systems/apis-containers-deployment': 'fullstack',
};
for (const [route, asset] of Object.entries(illustrations)) {
  const html = readFileSync(resolve(docs, `${route}/index.html`), 'utf8');
  const img = [...html.matchAll(/<img[^>]*>/g)].map(([tag]) => tag).find((tag) => tag.includes(`/assets/images/${asset}-`));
  assert(img, `${route}: missing matching illustration ${asset}`);
  assert(/alt="Illustration[^"]+"/.test(img), `${route}: missing descriptive image alt text`);
  assert(img.includes('width="1536"') && img.includes('height="1024"'), `${route}: reserve image dimensions`);
  const src = img.match(/src="([^"]+)"/)[1];
  assert(existsSync(resolve(build, src.slice(1))), `${route}: missing built image ${src}`);
}
for (const [overview, count] of [[efOverview, 4], [coreOverview, 6]]) {
  assert.equal([...overview.matchAll(/data-curriculum-module-grid="true"/g)].length, 2, 'Stage overview must have required and elective grids.');
  assert.equal([...overview.matchAll(/class="[^"]*moduleCard_[^"]*"/g)].length, count, 'Stage grid must retain all module destinations.');
}

for (const [prefix, sections] of [['engineering-fundamentals', efElectiveSections], ['softlanding/core-systems', coreElectiveSections]]) {
  const html = readFileSync(resolve(docs, `${prefix}/electives/index.html`), 'utf8');
  assert(html.includes('Complete exactly two electives'), `${prefix}: elective module must require two choices`);
  for (const section of sections) assert(html.includes(`id="${section}"`), `${prefix}: missing elective section ${section}`);
}
function visibleCoreEntries(items) {
  return items.filter((item) => !item.unlisted).flatMap((item) => [item, ...(item.items ? visibleCoreEntries(item.items) : [])]).filter((item) => item.label === 'Core Systems');
}
assert.equal(visibleCoreEntries(version.docsSidebars.tutorialSidebar).length, 1, 'Core Systems must have one visible sidebar entry.');
const introduction = readFileSync(resolve(docs, 'index.html'), 'utf8');
assert(introduction.includes('src="https://www.youtube.com/embed/PskcGbCAb0w"'), 'Restore the original introduction video with its native thumbnail.');
assert(introduction.includes('href="https://www.youtube.com/watch?v=PskcGbCAb0w"'), 'Keep a direct YouTube introduction link.');

const current = readFileSync(resolve(docs, 'index.html'), 'utf8');
assert(current.includes('plugin-id-default') && current.includes('docs-version-current'), 'The revised curriculum must be Current in the default plugin.');
assert(!current.includes('Draft curriculum') && !current.includes('proposed curriculum'), 'Remove proposal wording from Current.');
assert(metadata.every(({ name }) => /^\d{4}-\d{2}-\d{2}$/.test(name)), 'Snapshots must remain dated.');
const redirects = JSON.parse(readFileSync(resolve(root, 'curriculum-redirects.json'), 'utf8'));
for (const { from, to } of redirects) {
  const html = readFileSync(resolve(build, from.slice(1), 'index.html'), 'utf8');
  assert(html.includes(`content="0;url=${to}"`), `${from}: missing redirect to Current`);
  assert(html.includes('location.search + location.hash'), `${from}: preserve query and section bookmarks`);
  assert(existsSync(resolve(build, to.slice(1), 'index.html')), `${from}: missing redirect destination ${to}`);
}
for (const { name } of metadata) {
  const historical = readFileSync(resolve(build, `docs/${name}/index.html`), 'utf8');
  assert(historical.includes('This snapshot is preserved for comparison and is no longer updated.'), `Historical banner missing for ${name}`);
  assert(!historical.includes('Draft curriculum — requirements may change during review.'), `Historical version ${name} shows Draft banner`);
  assert(!historical.includes('data-curriculum-module-grid'), `Historical version ${name} must retain its original content`);
}
console.log(`Verified ${pages.length} Current pages: no Draft banner/menu, indexing, local routes and anchors, three EF modules and five Core modules covering R1–R6, one elective module per stage with two choices required, one Core Systems sidebar entry, original introduction video, illustrations and module grids, rendered resource links and full scopes, Current sitemap inclusion, ${redirects.length} legacy redirects, and historical isolation.`);
