# NEXT-GENERATION-ADAPTIVE-SYSTEM-LAB (NASL)

Full-stack research lab website. Static HTML/CSS/JS frontend served from `htmlFiles/`, and a Node.js + Express + TypeScript backend in `backend/` with PostgreSQL (via Prisma) and S3-compatible storage (MinIO/AWS/Supabase).

---

## Project structure

```
.
├── backend/                # Express 5 + TS + Prisma + S3
│   ├── src/
│   │   ├── auth/           # Google OAuth helper
│   │   ├── config/         # Prisma + S3 clients
│   │   ├── controllers/    # Business logic
│   │   ├── middlewares/    # Auth, error handler, etc.
│   │   ├── routes/         # Mounted under /api
│   │   ├── s3/             # Presign helpers, deletion utils
│   │   ├── types/          # Express TS augmentations
│   │   └── utils/          # asyncHandler, response, etc.
│   ├── prisma/             # schema.prisma + migrations/
│   ├── generated/prisma/   # Prisma client output (generated)
│   ├── docs/API.md         # Full REST reference
│   ├── scripts/admin.js    # Create ADMIN user interactively
│   ├── docker-compose.yml  # Postgres + MinIO + backend
│   └── Dockerfile          # Multi-stage image (builder/runner)
├── htmlFiles/              # Static frontend (no build step)
│   ├── js/config.js        # Picks API base (local/prod) at runtime
│   └── ...
└── README.md
```

---

## Features

Backend API modules:
- Users (JWT + Google OAuth)
- Images (S3 presigned upload/download/delete)
- Recent Updates and Highlights
- Research Areas and Facilities
- Publications: Books, Book Chapters, Conference Papers, Journal Papers, Patents, Generic Publications
- Projects
- Photo Gallery and Events
- Outreach or Courses

Frontend:
- Static, responsive pages organized by section (admin, users, people, research, publications, outreach, media, etc.)
- Runtime-configured API base via `htmlFiles/js/config.js`

---

## Prerequisites

- Node.js 18+
- npm or pnpm
- PostgreSQL 15+
- Optional: Docker Desktop (for one-command infra with Postgres + MinIO)

---

## Quick start (Windows PowerShell)

1) Clone and install backend deps

```powershell
git clone https://github.com/suryanshvermaa/NEXT-GENERATION-ADAPTIVE-SYSTEM-LAB-NASL-.git
cd NEXT-GENERATION-ADAPTIVE-SYSTEM-LAB-NASL-\backend
npm install
```

2) Configure environment (`backend/.env`)

Copy `.env.example` to `.env` and fill values:

```
# Server/runtime
PRODUCTION_SERVER_TYPE=serverless or traditional
NODE_ENV=development or production
PORT=3000

# Auth
AUTH_SECRET=your_jwt_secret
CLIENT_ID=your_google_oauth_client_id
CLIENT_SECRET=your_google_oauth_client_secret

# Database
DATABASE_URL=postgres://user:pass@host:5432/dbname

# S3 storage (use http URL for non-AWS providers)
ACCESS_KEY_ID=your_s3_access_key
SECRET_ACCESS_KEY=your_s3_secret_key
S3_ENDPOINT=http://localhost:9000
S3_REGION=us-east-1
S3_BUCKET=your_s3_bucket
```

Notes:
- The backend expects `S3_ENDPOINT` to be a full URL (e.g., `http://s3:9000` in Docker or `http://localhost:9000` locally). The S3 client uses `forcePathStyle: true` for MinIO/Supabase compatibility.
- Google OAuth redirect is currently set in code to `https://nasl-lab-nitp.vercel.app/users/googleCallback.html`. Update the OAuth client or adjust `src/auth/googleAuth.ts` for your environment.

3) Database and Prisma

```powershell
npx prisma generate
npx prisma migrate dev --name init
```

4) Run the backend (dev)

```powershell
npm run dev
```

API (dev): http://localhost:3000/api
Health: http://localhost:3000/health

5) Serve the frontend

Use any static web server (Live Server extension recommended). The runtime script `htmlFiles/js/config.js` chooses API base by hostname:
- `localhost` → `http://localhost:3000`
- otherwise → `https://nasl-lab-backend.vercel.app`

You can override at runtime by setting `window.NASL.API_BASE` before loading `config.js`.

---

## Run with Docker Compose (backend + Postgres + MinIO)

Inside `backend/`:

```powershell
# Start Postgres and MinIO in background
docker compose up -d postgres s3

# First time only: create a bucket via MinIO Console (http://localhost:9001)
# Login with MINIO_ROOT_USER/MINIO_ROOT_PASSWORD from compose (default: suryansh / suryansh)

# Build and run backend
docker compose up --build nasl-backend
```

Compose details:
- Backend exposed on port 3000, service name `nasl-backend`
- Postgres on 5432 with volume `./postgres_data`
- MinIO API 9000, Console 9001 with volume `./minio_data`

Environment tips when running in Compose:
- `DATABASE_URL` host should be `postgres`
- `S3_ENDPOINT` should be `http://s3:9000`

---

## Scripts

From `backend/`:
- `npm run dev` — Start dev server with nodemon
- `npm run build` — TypeScript build to `dist/`
- `npm start` — Run compiled server
- `npm run lint` / `npm run lint:fix` — ESLint
- `npm run format` — Prettier write
- `npm run createAdmin` — Interactive admin user creation

Prisma:
- `npx prisma generate`, `npx prisma migrate dev --name <name>`, `npx prisma studio`

---

## API overview

Base path: `/api`

Routers mounted in `backend/src/routes/index.ts`:
- `/user`
- `/image`
- `/recentUpdate`
- `/highlight`
- `/researchArea`
- `/researchFacility`
- `/book`
- `/book-chapter`
- `/conference-paper`
- `/journal-paper`
- `/project`
- `/patent`
- `/photo-gallery`
- `/event`
- `/publication`
- `/outreachorcourses`

Full endpoint details live in `backend/docs/API.md`.

Health check: `GET /health` → `{ "message": "healty", "data": {} }`

Auth:
- JWT via `Authorization: Bearer <token>` (requires `AUTH_SECRET`)
- Google OAuth via `POST /api/user/loginWithGoogle` with `{ code }`

---

## Notes and conventions

- The Prisma client is emitted to `backend/generated/prisma` and imported from there.
- When deploying to Vercel, `backend/vercel.json` builds `src/index.ts` with `@vercel/node` and bundles Prisma assets.
- In serverless environments, the app exports a handler and does not start an HTTP listener; locally it listens on `PORT` unless `PRODUCTION_SERVER_TYPE=serverless` or `VERCEL=1`.
- Keep `.env` out of version control. Rotate secrets regularly.

---

## License

ISC — see `backend/package.json`.
