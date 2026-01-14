# 📚 NASL Backend API Docs (Frontend Contract)

> Base URL: `/{host}`

## 🧭 Conventions

### 🔗 Base Paths
- API base prefix: `/api`
- Health check: `GET /health`

### ✅ Success Envelope
All success responses follow:
```json
{
  "success": true,
  "message": "...",
  "data": {}
}
```

### ❌ Error Envelope
All error responses follow:
```json
{
  "success": false,
  "message": "...",
  "data": {}
}
```

### 🔐 Authentication (JWT)
Some routes require auth.

The backend accepts a token in any of these places:
- Header `token: <jwt>` (most common in this codebase)
- Header `Authorization: Bearer <jwt>`

When a route is protected, docs show:
- **Auth**: ✅ Required / ❌ Not required
- **Permission** (RBAC): if `authorizePermission(...)` is used

---

## 📑 Modules

- [Health](health.md)
- [User](user.md)
- [Image (S3 upload URL)](image.md)
- [Photo Gallery](photo-gallery.md)
- [Highlights](highlights.md)
- [Recent Updates](recent-updates.md)
- [Research Areas](research-areas.md)
- [Research Facilities](research-facilities.md)
- [Events](events.md)
- [Outreach / Courses](outreach-or-courses.md)
- [Projects](projects.md)
- [Patents](patents.md)
- [Books](books.md)
- [Book Chapters](book-chapters.md)
- [Conference Papers](conference-papers.md)
- [Journal Papers](journal-papers.md)
