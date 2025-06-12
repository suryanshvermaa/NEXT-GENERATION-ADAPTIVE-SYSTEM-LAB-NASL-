# NEXT-GENERATION-ADAPTIVE-SYSTEM-LAB (NASL)

A full-stack web application with a React + Vite + TailwindCSS frontend and a Node.js + Express + TypeScript backend, using PostgreSQL (via Prisma ORM) and S3-compatible storage.

---

## Project Structure

```
.
├── backend/      # Node.js, Express, TypeScript, Prisma, PostgreSQL, S3
├── frontend/     # React, Vite, TailwindCSS
├── .github/      # GitHub templates
└── README.md     # Project documentation
```

---

## Local Setup

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (or npm/yarn)
- PostgreSQL database (local or remote)

---

### 1. Clone the repository
```bash
git clone https://github.com/suryanshvermaa/NEXT-GENERATION-ADAPTIVE-SYSTEM-LAB-NASL-.git
cd NEXT-GENERATION-ADAPTIVE-SYSTEM-LAB-NASL-
```

---

### 2. Backend Setup

```bash
cd backend
pnpm install # or npm install / yarn install
```

#### Environment Variables
Create a `.env` file in `backend/` (see `.env` example below):
```
PORT=3000
AUTH_SECRET=your_secret
DATABASE_URL=your_postgres_url
ACCESS_KEY_ID=your_s3_access_key
SECRET_ACCESS_KEY=your_s3_secret_key
S3_ENDPOINT=your_s3_endpoint
S3_REGION=your_s3_region
S3_BUCKET=your_s3_bucket
```

#### Database Setup
- Update `DATABASE_URL` in `.env` with your PostgreSQL connection string.
- Run Prisma migrations:
```bash
npx prisma migrate deploy
```

#### Start Backend (Development)
```bash
pnpm dev # or npm run dev / yarn dev
```

---

### 3. Frontend Setup

```bash
cd ../frontend
pnpm install # or npm install / yarn install
```

#### Start Frontend (Development)
```bash
pnpm dev # or npm run dev / yarn dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173) by default.

---

## Useful Scripts

- **Backend**
  - `pnpm dev` — Start backend in development mode (with nodemon)
  - `pnpm build` — Build backend TypeScript
  - `pnpm start` — Start backend from build output
  - `pnpm lint` — Lint backend code
  - `pnpm format` — Format backend code
- **Frontend**
  - `pnpm dev` — Start frontend dev server
  - `pnpm build` — Build frontend for production
  - `pnpm preview` — Preview production build
  - `pnpm lint` — Lint frontend code

---

## Notes
- Both `frontend` and `backend` use their own `node_modules` and lock files.
- Sensitive information (like `.env`) should **not** be committed.
- For S3, you can use AWS S3 or any compatible provider (e.g., Supabase Storage).

---

## License
This project is licensed under the ISC License. 