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
assert(pages.length >= 51, 'The complete Draft curriculum must be built.');
for (const path of pages) {
  const html = readFileSync(path, 'utf8');
  const label = relative(build, path);
  assert(/<meta[^>]*name="robots"[^>]*content="[^"]*noindex[^"]*"/.test(html), `${label}: missing noindex`);
  assert(html.includes('Draft curriculum — requirements may change during review.'), `${label}: missing Draft banner`);
  assert.match(html, /href="\/docs"[^>]*>View the Current curriculum/, `${label}: missing Current link`);
  assert.match(html, /href="\/draft"[^>]*>Draft curriculum/, `${label}: missing Draft menu entry`);
  for (const [, href] of html.matchAll(/href="(\/draft[^"#?]*)/g)) {
    const target = resolve(build, href.slice(1));
    assert(existsSync(target) || existsSync(`${target}.html`) || existsSync(resolve(target, 'index.html')), `${label}: missing local route ${href}`);
  }
}
assert(!readFileSync(resolve(build, 'sitemap.xml'), 'utf8').includes('/draft'), 'Draft must not appear in sitemap.');

const requiredModules = ['r1-software-engineering', 'r2-applied-ml', 'r3-deep-learning', 'r4-llm-applications', 'r5-systems-data', 'r6-apis-deployment'];
const electives = ['e1-retrieval-rag', 'e2-agents-tools', 'e3-model-adaptation', 'e4-backend-data', 'e5-delivery-mlops'];
const overview = readFileSync(resolve(draft, 'softlanding/core-systems/index.html'), 'utf8');
for (const module of requiredModules) assert(overview.includes(`/draft/softlanding/core-systems/${module}`), `Overview missing ${module}`);
for (const module of electives) assert(existsSync(resolve(draft, `softlanding/core-systems/${module}/index.html`)), `Missing elective ${module}`);

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
console.log(`Verified ${pages.length} Draft pages: banners, noindex, menu entry, local routes, six modules, five electives, sitemap exclusion, and Current/historical isolation.`);
