# NEXT-GENERATION-ADAPTIVE-SYSTEM-LAB — Backend

Production-ready Express + TypeScript + Prisma API for the NASL research program website. Provides user auth (JWT + Google OAuth), content modules (publications, projects, patents, events, highlights, photo gallery, research areas/facilities), S3-compatible media handling, and Postgres persistence.

> Full REST endpoint details live in `docs/README.md`.

## Tech stack

- Runtime: Node.js 18+ (Express 5)
- Language: TypeScript (tsc -> `dist/`)
- ORM: Prisma (PostgreSQL)
- Storage: S3-compatible (MinIO, Supabase S3, AWS S3)
- Auth: JWT, Google OAuth 2.0
- Tooling: ESLint + Prettier, Nodemon for dev, Docker + Compose, Vercel serverless support

## Project structure

- `src/`
    - `index.ts` — Express app bootstrap, health check, router, error handling
    - `routes/` — Route registries per domain (mounted under `/api`)
    - `controllers/` — Business logic for each domain
    - `config/` — `db.ts` (Prisma client), `s3.ts` (S3 client)
    - `s3/` — Helpers for presigned URLs and deletion
    - `middlewares/` — `auth.middleware.ts`, `error.middleware.ts`
    - `utils/` — `asyncHandler`, `response`, `error`
    - `auth/googleAuth.ts` — Google OAuth user info exchange
    - `types/express/` — Express Request augmentation for `req.user`
- `prisma/`
    - `schema.prisma` — models and datasource
    - `migrations/` — database migrations
- `generated/prisma/` — Prisma client output (generated at install/build)
- `docs/` — endpoint reference (frontend payload/response contract)
- `scripts/admin.js` — interactive admin user creation script

> Note: Large and runtime data folders are ignored for docs: `.vercel/`, `generated/`, `minio_data/`, `postgres_data/`.

## Environment variables

Copy `.env.example` to `.env` and fill the values:

- `PRODUCTION_SERVER_TYPE` — `serverless` or `traditional` (controls local HTTP server in `index.ts`)
- `NODE_ENV` — `development` | `production`
- `PORT` — HTTP port (default 3000)
- `AUTH_SECRET` — JWT signing secret (strong, required)
- `DATABASE_URL` — Postgres connection string
- `ACCESS_KEY_ID` — S3 access key
- `SECRET_ACCESS_KEY` — S3 secret key
- `S3_ENDPOINT` — S3 endpoint (e.g. `http://localhost:9000` for MinIO, or Supabase S3 endpoint)
- `S3_REGION` — S3 region (string)
- `S3_BUCKET` — Bucket name where media is stored
- Google OAuth (used by `src/auth/googleAuth.ts`):
    - `CLIENT_ID`
    - `CLIENT_SECRET`

> For Google OAuth, the redirect URI in code is currently set to `https://nasl-lab-nitp.vercel.app/users/googleCallback.html`. Ensure your Google OAuth client has this authorized redirect URI or align the code and config to your environment.

## Getting started (local)

1. Install dependencies (Prisma client will be generated on postinstall)

```powershell
npm install
```

2. Prepare environment

- Create and fill `.env` (see above)
- Ensure PostgreSQL is reachable at `DATABASE_URL`
- Ensure your S3-compatible storage is available and the bucket exists

3. Database: generate client and apply migrations (if needed)

```powershell
npx prisma generate
npx prisma migrate dev --name init
```

4. Start the dev server

```powershell
npm run dev
```

- API base URL in dev: `http://localhost:3000/api`
- Health check: `GET http://localhost:3000/health`

## Running with Docker Compose

This repo includes a Compose file to spin up Postgres and MinIO, and build/run the backend.

```powershell
# Start services in the background
docker compose up -d postgres s3

# Create the bucket (first time) via MinIO Console: http://localhost:9001
# Login with MINIO_ROOT_USER/MINIO_ROOT_PASSWORD from docker-compose.yml (both set to "suryansh" by default),
# then create a bucket matching your S3_BUCKET env var (e.g., "suryansh-bucket").

# Build and run the backend
docker compose up --build nasl-backend
```

Compose services and defaults (see `docker-compose.yml`):

- Backend: `nasl-backend` on port 3000
- Postgres: `postgres` on port 5432 (data in `./postgres_data`)
- MinIO: API `9000`, Console `9001` (data in `./minio_data`)

> Tip: Inside the backend container, the `DATABASE_URL` host should be `postgres`. For local (non-container) runs, you can use `localhost:5432` (mapped by Compose).

## Prisma workflow

- Generate client: `npx prisma generate`
- Create migration: `npx prisma migrate dev --name <name>`
- Open data browser: `npx prisma studio`

The Prisma client is emitted to `generated/prisma` and imported from there in code (`import { PrismaClient } from "../../generated/prisma"`).

## Auth

- JWT
    - Header: `Authorization: Bearer <token>` (also supports `token` header/query/body)
    - Secret: `AUTH_SECRET`
- Google OAuth 2.0
    - Exchange code using `POST /api/user/loginWithGoogle` with `{ "code": "..." }`
    - Requires `CLIENT_ID` and `CLIENT_SECRET` env vars

Admin-only endpoints require the user to have `role: ADMIN`. Use the helper script to create an admin:

```powershell
npm run createAdmin
```

## S3 media handling

- Upload flow: request a presigned PUT URL via `POST /api/image/uploadURL` and then upload directly from client
- Access: server generates short-lived signed GET URLs for media on responses
- Delete: `DELETE /api/image/deleteImage`

The S3 client is configured with `forcePathStyle: true`, so path-style URLs are expected and supported (works well with MinIO and Supabase S3).

## API reference

- See `docs/README.md` for routes, bodies, and responses across modules:
    - Users, Images, Recent Updates, Highlights
    - Research Areas, Research Facilities
    - Books, Book Chapters, Conference and Journal Papers
    - Projects, Patents, Publications
    - Photo Gallery, Events
    - Health check

Base path for APIs: `/api/...`

## Build, run, and deploy

- Build TypeScript: `npm run build` -> outputs to `dist/`
- Start (prod): `npm start`
- Lint: `npm run lint` (or `npm run lint:fix`)
- Format: `npm run format`

### Vercel

`vercel.json` config uses `@vercel/node` on `src/index.ts` as a serverless entry and includes Prisma assets:

- Builds include `generated/prisma/**` and `prisma/**`
- Routes send all traffic to `/src/index.ts`

When running on Vercel (or any serverless environment), `index.ts` avoids starting an HTTP listener and exports the Express app handler.

## Conventions and notes

- Express 5 is used; all controllers/middlewares are async and wrapped with `asyncHandler` to route errors to the centralized `errorHandler`.
- `req.user` is populated by auth middlewares and typed via `src/types/express/index.d.ts`.
- Use strong secrets and never commit `.env` values.

## Troubleshooting

- Prisma client missing: run `npx prisma generate` (also runs on `npm install`).
- DB connection errors: verify `DATABASE_URL`, ensure Postgres is reachable (in Docker: service is `postgres`).
- S3 errors or 403: check credentials, bucket existence, endpoint URL, and that `forcePathStyle` is compatible with your provider.
- Google OAuth errors: confirm authorized redirect URI and correct `CLIENT_ID` / `CLIENT_SECRET`.

## License

ISC — see `package.json`.
