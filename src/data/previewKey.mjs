// Normalised lookup key for src/data/resource-previews.json, shared by
// scripts/fetch-resource-previews.mjs and the ResourceCard component so
// variants of one link (www., trailing slash, #hash) find the same preview.
export function previewKey(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase().replace(/^(www|m)\./, '');
    return `${host}${parsed.pathname.replace(/\/$/, '')}${parsed.search}`;
  } catch {
    return url;
  }
}
