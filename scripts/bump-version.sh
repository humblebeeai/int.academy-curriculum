#!/usr/bin/env bash
set -euo pipefail

_SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]:-"$0"}")" >/dev/null 2>&1 && pwd -P)"
_PROJECT_DIR="$(cd "${_SCRIPT_DIR}/.." >/dev/null 2>&1 && pwd)"
cd "${_PROJECT_DIR}" || exit 2

_BUMP_TYPE=""
_DO_COMMIT=false
_DO_TAG=false
_DO_PUSH=false
_DO_DOCS=false

_usage_help() {
  cat <<EOF
USAGE: ${0} -b=<patch|minor|major> [options]

OPTIONS:
    -b, --bump         Bump type: patch|minor|major (required)
    -c, --commit       Commit version changes
    -t, --tag          Create git tag vX.Y.Z
    -p, --push         Push commit and tag
    -n, --no-docs      Skip docs version snapshot (default)
    -d, --docs         Create docs version snapshot
    -h, --help         Show this help message
EOF
}

while [ $# -gt 0 ]; do
  case "${1}" in
    -b=*|--bump=*)
      _BUMP_TYPE="${1#*=}"
      shift;;
    -c|--commit)
      _DO_COMMIT=true
      shift;;
    -t|--tag)
      _DO_TAG=true
      shift;;
    -p|--push)
      _DO_PUSH=true
      shift;;
    -n|--no-docs)
      _DO_DOCS=false
      shift;;
    -d|--docs)
      _DO_DOCS=true
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

if [ -z "${_BUMP_TYPE}" ]; then
  echo "[ERROR]: Bump type is required." >&2
  _usage_help
  exit 1
fi

if [ "${_BUMP_TYPE}" != "patch" ] && [ "${_BUMP_TYPE}" != "minor" ] && [ "${_BUMP_TYPE}" != "major" ]; then
  echo "[ERROR]: Invalid bump type '${_BUMP_TYPE}'." >&2
  _usage_help
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "[ERROR]: Node.js is required." >&2
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "[ERROR]: npm is required." >&2
  exit 1
fi

_CURRENT_VERSION="$(node -p "require('./package.json').version")"
echo "[INFO]: Current version: ${_CURRENT_VERSION}"

npm version "${_BUMP_TYPE}" --no-git-tag-version

_NEW_VERSION="$(node -p "require('./package.json').version")"
echo "[INFO]: New version: ${_NEW_VERSION}"

if [ "${_DO_DOCS}" == true ]; then
  npx docusaurus docs:version "${_NEW_VERSION}"
fi

git add package.json package-lock.json
if [ "${_DO_DOCS}" == true ]; then
  git add versions.json versioned_docs versioned_sidebars
fi

if [ "${_DO_COMMIT}" == true ]; then
  git commit -m "chore: bump version to v${_NEW_VERSION}" -m "Snapshot docs for v${_NEW_VERSION}."
fi

if [ "${_DO_TAG}" == true ]; then
  git tag "v${_NEW_VERSION}"
fi

if [ "${_DO_PUSH}" == true ]; then
  git push origin HEAD
  if [ "${_DO_TAG}" == true ]; then
    git push origin "v${_NEW_VERSION}"
  fi
fi

echo "[OK]: Version bump complete."
