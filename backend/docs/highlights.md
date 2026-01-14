# ✨ Highlights

Base path: `/api/highlight`

---

## 🔗 POST `/api/highlight/create`

- **Auth**: ✅ Required
- **Permission**: `CREATE_HIGHLIGHT` (roles: `ADMIN`, `ALUMNI`)

### 📥 Request Body
```json
{
  "highlight": "string",
  "description": "string",
  "date": "string (date)",
  "link": "string (optional)"
}
```

### 📤 Response (201)
```json
{
  "success": true,
  "message": "highlight created",
  "data": {
    "highlight": {
      "id": 0,
      "highlight": "string",
      "description": "string",
      "date": "string",
      "link": "string | null",
      "createdAt": "string"
    }
  }
}
```

---

## 🔗 DELETE `/api/highlight/delete`

- **Auth**: ✅ Required
- **Permission**: `DELETE_HIGHLIGHT` (role: `ADMIN`)

### 📥 Request Body
```json
{ "id": 123 }
```

### 📤 Response (200)
```json
{
  "success": true,
  "message": "highlight deleted successfully",
  "data": {}
}
```

---

## 🔗 GET `/api/highlight/getHighlights?page=1&limit=10`

- **Auth**: ❌ Not required (route has no auth middleware)

### 🧾 Query Params
- `page` (optional, default `1`)
- `limit` (optional, default `10`)

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Highlights fetched successfully",
  "data": {
    "highlights": [
      {
        "id": 0,
        "highlight": "string",
        "description": "string",
        "date": "string",
        "link": "string | null",
        "createdAt": "string"
      }
    ]
  }
}
```
