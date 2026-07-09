#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [[ ! -f .env ]]; then
  cp .env.example .env
  if ! grep -q '^PORT=' .env; then
    printf '\nPORT=8000\n' >> .env
  fi
fi

PORT="${PORT:-$(grep -E '^PORT=' .env 2>/dev/null | tail -n1 | cut -d= -f2-)}"
PORT="${PORT:-8000}"

case "${1:-up}" in
  up|start)
    docker compose up -d --build
    echo "✅ Curriculum site is running: http://localhost:${PORT}"
    ;;
  stop|down)
    docker compose down
    echo "✅ Curriculum site stopped"
    ;;
  logs)
    docker compose logs -f docs-site
    ;;
  status|ps)
    docker compose ps
    ;;
  *)
    echo "Usage: $0 [up|start|stop|down|logs|status|ps]" >&2
    exit 2
    ;;
esac
