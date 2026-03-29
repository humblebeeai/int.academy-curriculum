#!/usr/bin/env bash
set -euo pipefail

_SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]:-"$0"}")" >/dev/null 2>&1 && pwd -P)"
_PROJECT_DIR="$(cd "${_SCRIPT_DIR}/.." >/dev/null 2>&1 && pwd)"
cd "${_PROJECT_DIR}" || exit 2

_DO_COMMIT=false
_DO_PUSH=false

_usage_help() {
  cat <<EOF
USAGE: ${0} [options]

OPTIONS:
    -c, --commit       Commit changelog update
    -p, --push         Push commit to remote
    -h, --help         Show this help message
EOF
}

while [ $# -gt 0 ]; do
  case "${1}" in
    -c|--commit)
      _DO_COMMIT=true
      shift;;
    -p|--push)
      _DO_PUSH=true
      shift;;
    -h|--help)
      _usage_help
      exit 0;;
    *)
      echo "[ERROR]: Failed to parse argument -> ${1}!" >&2
      _usage_help
      exit 1;;
  esac
done

if ! command -v node >/dev/null 2>&1; then
  echo "[ERROR]: Node.js is required." >&2
  exit 1
fi

_VERSION="$(node -p "require('./package.json').version")"
_DATE="$(date +%Y-%m-%d)"

if [ ! -f CHANGELOG.md ]; then
  cat <<EOF > CHANGELOG.md
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]
EOF
fi

_CURRENT_TAG="v${_VERSION}"
_PREV_TAG="$(git tag --sort=-v:refname | grep -v "^${_CURRENT_TAG}$" | head -n 1 || true)"

if [ -n "${_PREV_TAG}" ]; then
  _RANGE="${_PREV_TAG}..${_CURRENT_TAG}"
else
  _RANGE="${_CURRENT_TAG}"
fi

_CHANGES="$(git log --no-merges --pretty="- %s" ${_RANGE} || true)"
if [ -z "${_CHANGES}" ]; then
  _CHANGES="- No notable changes recorded."
fi

VERSION="${_VERSION}" DATE="${_DATE}" CHANGES="${_CHANGES}" python <<'PY'
from __future__ import annotations
import os
from pathlib import Path

version = os.environ["VERSION"]
date = os.environ["DATE"]
changes = os.environ["CHANGES"].strip()

path = Path("CHANGELOG.md")
content = path.read_text()

marker = "## [Unreleased]"
if marker not in content:
    raise SystemExit("[ERROR]: CHANGELOG.md missing Unreleased section")

entry = f"\n\n## [{version}] - {date}\n\n{changes}\n"
content = content.replace(marker, marker + entry, 1)

path.write_text(content)
PY

git add CHANGELOG.md

if [ "${_DO_COMMIT}" == true ]; then
  git commit -m "docs: update changelog for v${_VERSION}" -m "Summarize changes since ${_PREV_TAG:-initial release}."
fi

if [ "${_DO_PUSH}" == true ]; then
  git push origin HEAD
fi

echo "[OK]: Changelog updated."
