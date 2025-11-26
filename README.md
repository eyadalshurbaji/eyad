# eyad

This repository contains a minimal Node.js + Express backend scaffold with Docker.

Quick start
1. Install dependencies:
```bash
cd /workspaces/eyad
npm install
```
2. Run in development (requires `nodemon`):
```bash
npm run dev
```
3. Run production server:
```bash
npm start
```
4. Build Docker image:
```bash
docker build -t eyad-app:latest .
```
5. Run Docker container:
```bash
docker run -p 3000:3000 eyad-app:latest
```

Run with docker-compose (recommended for development)

1. Copy `.env.example` to `.env` and edit values if needed:
```bash
cp .env.example .env
```
2. Start services:
```bash
docker compose up --build
```
3. Stop services:
```bash
docker compose down -v
```

Postgres will be available on port `5432` (container name `db`), and the app on `http://localhost:3000`.


Server default endpoint:

- `GET /` → returns a simple text greeting.

If you want a different template (Python/FastAPI, Go, Rust), tell me and I will re-generate the scaffold.
# eyad