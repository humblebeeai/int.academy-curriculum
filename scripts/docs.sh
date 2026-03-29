#!/usr/bin/env bash
set -euo pipefail

_SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]:-"$0"}")" >/dev/null 2>&1 && pwd -P)"
_PROJECT_DIR="$(cd "${_SCRIPT_DIR}/.." >/dev/null 2>&1 && pwd)"
cd "${_PROJECT_DIR}" || exit 2

_IS_BUILD=false
_IS_PUBLISH=false

_usage_help() {
  cat <<EOF
USAGE: ${0} [options]

OPTIONS:
    -b, --build            Enable build step. Default: false
    -p, --publish          Enable publish step. Default: false
    -h, --help             Show this help message.

EXAMPLES:
    ${0} -b
    ${0} --publish
EOF
}

while [ $# -gt 0 ]; do
  case "${1}" in
    -b|--build)
      _IS_BUILD=true
      shift;;
    -p|--publish)
      _IS_PUBLISH=true
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

if ! command -v npm >/dev/null 2>&1; then
  echo "[ERROR]: npm not found. Please install Node.js." >&2
  exit 1
fi

if [ "${_IS_BUILD}" == true ]; then
  echo "[INFO]: Building docs into ./build ..."
  NODE_OPTIONS="--localstorage-file=/tmp/docusaurus-localstorage" npm run build
elif [ "${_IS_PUBLISH}" == true ]; then
  echo "[INFO]: Deploying docs ..."
  NODE_OPTIONS="--localstorage-file=/tmp/docusaurus-localstorage" npm run deploy
else
  echo "[INFO]: Starting docs dev server ..."
  npm start
fi

echo "[OK]: Done."
