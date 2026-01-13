# 📚 Books

Base path: `/api/book`

---

## 🔗 POST `/api/book/create`

- **Auth**: ✅ Required
- **Permission**: `CREATE_BOOK` (roles: `ADMIN`, `ALUMNI`)

### 📥 Request Body
```json
{
  "title": "string",
  "authors": "author1,author2",
  "publisher": "string (optional)",
  "scopus": "string (optional)",
  "doi": "string (optional)",
  "isbn": "string (optional)",
  "year": "string|number (optional)"
}
```

### 🧾 Notes
- `authors` is a comma-separated string; backend stores `string[]`.

### 📤 Response (201)
```json
{
  "success": true,
  "message": "Book created successfully",
  "data": { "book": { "id": 0, "title": "string" } }
}
```

---

## 🔗 GET `/api/book/get-all?page=1&limit=10`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Books fetched successfully",
  "data": { "books": [ { "id": 0, "title": "string", "authors": ["string"] } ] }
}
```

---

## 🔗 GET `/api/book/:id`

- **Auth**: ❌ Not required

### ⚠️ Implementation Note
Route is `/:id` but controller reads `req.query.id`. So call it as:
- `GET /api/book/anything?id=123`

---

## 🔗 PUT `/api/book/:id`

- **Auth**: ✅ Required
- **Permission**: `UPDATE_BOOK` (roles: `ADMIN`, `ALUMNI`)

### ⚠️ Implementation Note
Route is `PUT /:id` but controller expects `id` in body.

### 📥 Request Body
```json
{
  "id": 123,
  "title": "string",
  "authors": "a,b",
  "publisher": "string (optional)",
  "scopus": "string (optional)",
  "doi": "string (optional)",
  "isbn": "string (optional)",
  "year": "string|number (optional)"
}
```

---

## 🔗 DELETE `/api/book/:id`

- **Auth**: ✅ Required
- **Permission**: `DELETE_BOOK` (roles: `ADMIN`, `ALUMNI`)

---

## 🔗 GET `/api/book/get-all-by-user-id?page=1&limit=10`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Books fetched successfully",
  "data": { "books": [ { "id": 0, "title": "string" } ] }
}
```
