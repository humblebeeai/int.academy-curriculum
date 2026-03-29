# Project Index

## Overview
This repository hosts the HumbleBeeAI Academy Curriculum site built with
Docusaurus. It provides a structured learning roadmap for AI engineering.

## Installation & Setup

### Prerequisites
- Node.js >= 20
- npm (bundled with Node)

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm start
```

## Configuration

Configuration is managed through `docusaurus.config.ts`, `sidebars.ts`, and
environment variables passed at runtime (e.g., `PORT` in `compose.yml`).

## Deployment Steps

### Docker
```bash
docker compose up --build -d
```

### Local build verification
```bash
NODE_OPTIONS="--localstorage-file=/tmp/docusaurus-localstorage" npm run build
npm run serve
```

## Health & Liveness

- `GET /ping` returns `{ "status": "pong" }`
- `GET /health` returns `{ "status": "ok", "services": { "docs": "ok" } }`

## Troubleshooting

- Verify dependencies are installed: `npm install`
- If build fails with localStorage errors, use the localstorage flag shown above.
- Check container logs: `docker compose logs`

## API Documentation

This project is a static documentation site. There is no application API.
