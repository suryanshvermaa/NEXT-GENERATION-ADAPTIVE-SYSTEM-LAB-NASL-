# 📝 Journal Papers

Base path: `/api/journal-paper`

---

## 🔗 POST `/api/journal-paper/create`

- **Auth**: ✅ Required
- **Permission**: `CREATE_JOURNAL_PAPER` (roles: `ADMIN`, `ALUMNI`)

### 📥 Request Body
```json
{
  "title": "string",
  "journal": "string",
  "authors": "a,b,c",
  "publicationDate": "string (optional, date)",
  "volume": "string|number (optional)",
  "year": "string|number (optional)",
  "quartile": "string (optional)",
  "doi": "string (optional)"
}
```

---

## 🔗 GET `/api/journal-paper/get-all?page=1&limit=10`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Journal papers fetched successfully",
  "data": {
    "journalPapers": [
      {
        "id": 0,
        "title": "string",
        "journal": "string",
        "authors": ["string"],
        "publicationDate": "string",
        "volume": "string|number|null",
        "year": "string|number|null",
        "quartile": "string|null",
        "doi": "string|null",
        "createdBy": 0
      }
    ]
  }
}
```

---

## 🔗 GET `/api/journal-paper/:id`

- **Auth**: ❌ Not required

### ⚠️ Implementation Note
Route is `/:id` but controller reads `req.query.id`. So call it as:
- `GET /api/journal-paper/anything?id=123`

---

## 🔗 PUT `/api/journal-paper/:id`

- **Auth**: ✅ Required
- **Permission**: `UPDATE_JOURNAL_PAPER` (roles: `ADMIN`, `ALUMNI`)

### ⚠️ Implementation Note
Route is `PUT /:id` but controller expects `id` in body.

### 📥 Request Body
```json
{
  "id": 123,
  "title": "string",
  "journal": "string",
  "authors": "a,b",
  "publicationDate": "string (date)",
  "volume": "string|number (optional)",
  "year": "string|number (optional)",
  "quartile": "string (optional)",
  "doi": "string (optional)"
}
```

---

## 🔗 DELETE `/api/journal-paper/:id`

- **Auth**: ✅ Required
- **Permission**: `DELETE_JOURNAL_PAPER` (role: `ADMIN`)

---

## 🔗 GET `/api/journal-paper/get-all-by-user-id/:userId?page=1&limit=10`

- **Auth**: ❌ Not required

### 📤 Response (200)
Response key is `journalPapers`.
