#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectDir = resolve(fileURLToPath(new URL("..", import.meta.url)));
const versionsPath = resolve(projectDir, "versions.json");
const metadataPath = resolve(projectDir, "curriculum-versions.json");
const retentionDays = 365;

const args = process.argv.slice(2);
const pruneOnly = args.includes("--prune-only");
const dateArgIndex = args.indexOf("--date");
const requestedDate =
  dateArgIndex >= 0 ? args[dateArgIndex + 1] : new Date().toISOString().slice(0, 10);

function parseDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error(`Invalid publication date: ${value}. Expected YYYY-MM-DD.`);
  }

  const date = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) {
    throw new Error(`Invalid publication date: ${value}.`);
  }
  return date;
}

function readJson(path, fallback) {
  return existsSync(path) ? JSON.parse(readFileSync(path, "utf8")) : fallback;
}

function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

function displayLabel(dateValue) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(parseDate(dateValue));
}

function runDocusaurusVersion(versionName) {
  const executable = process.platform === "win32" ? "npm.cmd" : "npm";
  const result = spawnSync(
    executable,
    ["run", "docusaurus", "--", "docs:version", versionName],
    { cwd: projectDir, stdio: "inherit" },
  );

  if (result.status !== 0) {
    throw new Error(`Docusaurus failed to create curriculum version ${versionName}.`);
  }
}

function rewriteVersionLinks(versionName) {
  const root = resolve(projectDir, "versioned_docs", `version-${versionName}`);
  const visit = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = resolve(directory, entry.name);
      if (entry.isDirectory()) {
        visit(path);
      } else if (/\.mdx?$/.test(entry.name)) {
        const content = readFileSync(path, "utf8");
        writeFileSync(
          path,
          content
            .replaceAll("/docs/", `/docs/${versionName}/`)
            .replaceAll(
              "/img/",
              `/curriculum-versions/${versionName}/`,
            )
            .replaceAll(
              "@site/src/components/SkillShowcase",
              "@site/src/components/doc-components/SkillShowcase",
            ),
        );
      }
    }
  };
  visit(root);
}

function snapshotStaticAssets(versionName) {
  const source = resolve(projectDir, "static", "img");
  const target = resolve(projectDir, "static", "curriculum-versions", versionName);
  const docsRoot = resolve(projectDir, "versioned_docs", `version-${versionName}`);
  const referencedAssets = new Set();
  const visit = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = resolve(directory, entry.name);
      if (entry.isDirectory()) {
        visit(path);
      } else if (/\.mdx?$/.test(entry.name)) {
        const content = readFileSync(path, "utf8");
        for (const match of content.matchAll(/\/img\/([^\s)'"}]+)/g)) {
          referencedAssets.add(match[1]);
        }
      }
    }
  };
  visit(docsRoot);

  for (const relativePath of referencedAssets) {
    const assetSource = resolve(source, relativePath);
    const assetTarget = resolve(target, relativePath);
    if (!existsSync(assetSource)) {
      throw new Error(`Missing curriculum asset: /img/${relativePath}`);
    }
    mkdirSync(resolve(assetTarget, ".."), { recursive: true });
    cpSync(assetSource, assetTarget);
  }
}

function pruneExpiredVersions(now) {
  const today = parseDate(now.toISOString().slice(0, 10));
  const cutoff = new Date(today.getTime() - retentionDays * 24 * 60 * 60 * 1000);
  const versions = readJson(versionsPath, []);
  const metadata = readJson(metadataPath, []);
  const expiredNames = new Set(
    metadata
      .filter(({ publishedAt }) => parseDate(publishedAt) < cutoff)
      .map(({ name }) => name),
  );

  for (const name of expiredNames) {
    rmSync(resolve(projectDir, "versioned_docs", `version-${name}`), {
      recursive: true,
      force: true,
    });
    rmSync(
      resolve(projectDir, "versioned_sidebars", `version-${name}-sidebars.json`),
      { force: true },
    );
    rmSync(resolve(projectDir, "static", "curriculum-versions", name), {
      recursive: true,
      force: true,
    });
  }

  writeJson(
    versionsPath,
    versions.filter((name) => !expiredNames.has(name)),
  );
  writeJson(
    metadataPath,
    metadata.filter(({ name }) => !expiredNames.has(name)),
  );

  if (expiredNames.size > 0) {
    console.log(`Removed expired curriculum versions: ${[...expiredNames].join(", ")}`);
  } else {
    console.log("No curriculum versions have exceeded the 365-day retention period.");
  }
}

parseDate(requestedDate);

if (!pruneOnly) {
  const versions = readJson(versionsPath, []);
  if (versions.includes(requestedDate)) {
    throw new Error(`Curriculum version ${requestedDate} already exists.`);
  }

  runDocusaurusVersion(requestedDate);
  snapshotStaticAssets(requestedDate);
  rewriteVersionLinks(requestedDate);

  const metadata = readJson(metadataPath, []);
  metadata.unshift({
    name: requestedDate,
    label: displayLabel(requestedDate),
    path: `/docs/${requestedDate}/`,
    publishedAt: requestedDate,
    sourceRef: process.env.GITHUB_SHA ?? "working-tree",
  });
  writeJson(metadataPath, metadata);
}

pruneExpiredVersions(new Date());
