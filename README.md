# NEXT-GENERATION-ADAPTIVE-SYSTEM-LAB (NASL)

A full-stack web application with a static HTML/CSS/JavaScript frontend and a Node.js + Express + TypeScript backend, using PostgreSQL (via Prisma ORM) and S3-compatible storage.

---

## Project Structure

```
.
├── backend/          # Node.js, Express, TypeScript, Prisma, PostgreSQL, S3
│   ├── src/          # Source code
│   │   ├── controllers/  # API controllers
│   │   ├── routes/       # API routes
│   │   ├── middlewares/  # Express middlewares
│   │   ├── config/       # Configuration files
│   │   ├── utils/        # Utility functions
│   │   ├── auth/         # Authentication logic
│   │   ├── s3/           # S3 storage utilities
│   │   └── types/        # TypeScript type definitions
│   ├── prisma/       # Database schema and migrations
│   ├── scripts/      # Utility scripts
│   └── docs/         # API documentation
├── htmlFiles/        # Static HTML frontend
│   ├── css/          # Stylesheets
│   ├── js/           # JavaScript files
│   ├── assets/       # Images and media files
│   ├── admin/        # Admin panel pages
│   ├── users/        # User authentication pages
│   ├── people/       # Team member pages
│   ├── research/     # Research-related pages
│   ├── forms_html/   # Form pages
│   └── reuse/        # Reusable components
├── .github/          # GitHub templates
└── README.md         # Project documentation
```

---

## Features

### Backend API
- **User Management**: Registration, login, profile management with Google OAuth
- **Research Publications**: Journal papers, conference papers, book chapters, books, patents
- **Research Areas & Facilities**: Management of research domains and lab facilities
- **Projects**: Research project tracking with funding details
- **Events & Outreach**: Event management and outreach activities
- **Photo Gallery**: Image management with S3 storage
- **Highlights & Updates**: Recent highlights and updates system

### Frontend
- **Responsive Design**: Bootstrap-based responsive layout
- **Static Pages**: Fast-loading HTML pages for all sections
- **Admin Panel**: Administrative interface for content management
- **User Authentication**: Login/register pages with profile management
- **Research Showcase**: Dedicated pages for research areas, facilities, and publications
- **Team Pages**: Individual pages for different team categories (PhD, MTech, BTech, etc.)

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

The backend API will be available at [http://localhost:3000](http://localhost:3000).

---

### 3. Frontend Setup

The frontend is a static HTML application that can be served using any web server. For development:

#### Using Python (Simple HTTP Server)
```bash
cd htmlFiles
python3 -m http.server 8000
```

#### Using Node.js (http-server)
```bash
npm install -g http-server
cd htmlFiles
http-server -p 8000
```

#### Using Live Server (VS Code Extension)
- Install the "Live Server" extension in VS Code
- Right-click on `htmlFiles/index.html` and select "Open with Live Server"

The frontend will be available at [http://localhost:8000](http://localhost:8000) (or the port you specified).

---

## API Endpoints

The backend provides RESTful APIs for:

- **Authentication**: `/api/auth/*`
- **Users**: `/api/users/*`
- **Publications**: `/api/journals/*`, `/api/conferences/*`, `/api/books/*`, `/api/patents/*`
- **Research**: `/api/research-areas/*`, `/api/research-facilities/*`
- **Projects**: `/api/projects/*`
- **Events**: `/api/events/*`
- **Gallery**: `/api/photo-gallery/*`
- **Highlights**: `/api/highlights/*`, `/api/recent-updates/*`

For detailed API documentation, see `backend/docs/API.md`.

---

## Useful Scripts

### Backend
- `pnpm dev` — Start backend in development mode (with nodemon)
- `pnpm build` — Build backend TypeScript
- `pnpm start` — Start backend from build output
- `pnpm lint` — Lint backend code
- `pnpm format` — Format backend code
- `pnpm createAdmin` — Create admin user

### Frontend
- Serve static files using any web server
- No build process required (static HTML/CSS/JS)

---

## Database Schema

The application uses PostgreSQL with the following main entities:
- **Users**: Researchers, students, and administrators
- **Publications**: Journal papers, conference papers, books, chapters, patents
- **Research**: Areas and facilities
- **Projects**: Research projects with funding details
- **Events**: Lab events and activities
- **Gallery**: Photo management with tags
- **Highlights**: Recent achievements and updates

---

## Deployment

### Backend
- Build the TypeScript: `pnpm build`
- Set up environment variables
- Run database migrations
- Start the server: `pnpm start`

### Frontend
- Deploy the `htmlFiles/` directory to any static hosting service
- Update API endpoints in JavaScript files to point to your backend URL

---

## Notes
- The backend uses its own `node_modules` and lock files
- Sensitive information (like `.env`) should **not** be committed
- For S3, you can use AWS S3 or any compatible provider (e.g., Supabase Storage)
- The frontend is completely static and can be served from any web server
- Bootstrap 5 is used for responsive design
- Google OAuth is supported for user authentication

---

## License
This project is licensed under the ISC License. 