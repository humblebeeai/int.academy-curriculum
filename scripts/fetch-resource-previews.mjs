// Collects a preview image for every ResourceCard URL in the Current
// curriculum and writes src/data/resource-previews.json ({ url: image }).
// Run manually (npm run curriculum:previews) when resources change and
// commit the result; builds never fetch from the network.
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const output = resolve(root, 'src/data/resource-previews.json');

function mdxFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) return entry.name === 'specializations' ? [] : mdxFiles(path);
    return entry.name.endsWith('.mdx') ? [path] : [];
  });
}

const urls = [...new Set(mdxFiles(resolve(root, 'docs')).flatMap((file) =>
  [...readFileSync(file, 'utf8').matchAll(/<ResourceCard\s[\s\S]*?url="([^"]+)"[\s\S]*?\/>/g)].map(([, url]) => url)))].sort();

const decode = (value) => value.replaceAll('&amp;', '&').replaceAll('&#x2F;', '/').replaceAll('&#47;', '/');

async function previewFor(url) {
  const video = url.match(/youtube\.com\/watch\?v=([\w-]{11})/) ?? url.match(/youtu\.be\/([\w-]{11})/);
  if (video) return `https://i.ytimg.com/vi/${video[1]}/hqdefault.jpg`;
  const response = await fetch(url, {
    headers: { 'user-agent': 'Mozilla/5.0 (compatible; facebookexternalhit/1.1; +https://roadmap.humblebee.ai)' },
    redirect: 'follow',
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) return undefined;
  const html = await response.text();
  for (const name of ['og:image', 'twitter:image', 'og:image:url']) {
    for (const [tag] of html.matchAll(/<meta\b[^>]*>/gi)) {
      if (!new RegExp(`(?:property|name)=["']${name}["']`, 'i').test(tag)) continue;
      const content = tag.match(/content=["']([^"']+)["']/i)?.[1];
      if (content) return new URL(decode(content), response.url).href;
    }
  }
  return undefined;
}

const previews = {};
let missing = 0;
for (const url of urls) {
  try {
    const image = await previewFor(url);
    if (image) previews[url] = image;
    else missing += 1;
    console.log(`${image ? 'ok  ' : 'none'} ${url}`);
  } catch (error) {
    missing += 1;
    console.log(`fail ${url} (${error.message})`);
  }
}

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, `${JSON.stringify(previews, null, 2)}\n`);
console.log(`\n${Object.keys(previews).length} previews, ${missing} without preview → ${output}`);
