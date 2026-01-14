# 🏛️ Conference Papers

Base path: `/api/conference-paper`

---

## 🔗 POST `/api/conference-paper/create`

- **Auth**: ✅ Required
- **Permission**: `CREATE_CONFERENCE_PAPER` (roles: `ADMIN`, `ALUMNI`)

### 📥 Request Body
```json
{
  "title": "string",
  "authors": "a,b,c",
  "conference": "string",
  "location": "string",
  "year": "string|number",
  "pages": "string",
  "indexing": "string",
  "doi": "string"
}
```

---

## 🔗 GET `/api/conference-paper/get-all?page=1&limit=10`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Conference papers fetched successfully",
  "data": {
    "conferencePapers": [
      {
        "id": 0,
        "title": "string",
        "authors": ["string"],
        "conference": "string",
        "location": "string",
        "year": "string|number",
        "pages": "string",
        "indexing": "string",
        "doi": "string",
        "createdBy": 0
      }
    ]
  }
}
```

---

## 🔗 GET `/api/conference-paper/:id`

- **Auth**: ❌ Not required

### ⚠️ Implementation Note
Route is `/:id` but controller reads `req.query.id`. So call it as:
- `GET /api/conference-paper/anything?id=123`

---

## 🔗 PUT `/api/conference-paper/:id`

- **Auth**: ✅ Required
- **Permission**: `UPDATE_CONFERENCE_PAPER` (roles: `ADMIN`, `ALUMNI`)

### ⚠️ Implementation Note
Route is `PUT /:id` but controller expects `id` in body.

### 📥 Request Body
```json
{
  "id": 123,
  "title": "string",
  "authors": "a,b",
  "conference": "string",
  "location": "string",
  "year": "string|number",
  "pages": "string",
  "indexing": "string",
  "doi": "string"
}
```

---

## 🔗 DELETE `/api/conference-paper/:id`

- **Auth**: ✅ Required
- **Permission**: `DELETE_CONFERENCE_PAPER` (role: `ADMIN`)

---

## 🔗 GET `/api/conference-paper/get-all-by-user-id/:userId?page=1&limit=10`

- **Auth**: ❌ Not required

### 📤 Response (200)
Response key is `conferencePapers`.
