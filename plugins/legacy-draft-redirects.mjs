import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

export default function legacyDraftRedirects(context) {
  const redirects = JSON.parse(readFileSync(resolve(context.siteDir, 'curriculum-redirects.json'), 'utf8'));
  return {
    name: 'legacy-draft-redirects',
    async postBuild({ outDir }) {
      for (const { from, to } of redirects) {
        const path = resolve(outDir, from.slice(1), 'index.html');
        mkdirSync(dirname(path), { recursive: true });
        const canonical = new URL(to, context.siteConfig.url).href;
        writeFileSync(path, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=${to}"><link rel="canonical" href="${canonical}"><title>Curriculum moved</title><script>location.replace(${JSON.stringify(to)} + location.search + location.hash)</script></head><body><p>This curriculum is now <a href="${to}">Current</a>.</p></body></html>`);
      }
    },
  };
}
