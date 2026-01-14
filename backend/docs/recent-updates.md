# 📰 Recent Updates

Base path: `/api/recentUpdate`

---

## 🔗 POST `/api/recentUpdate/create`

- **Auth**: ✅ Required
- **Permission**: `CREATE_RECENT_UPDATE` (role: `ADMIN`)

### 📥 Request Body
```json
{
  "update": "string",
  "description": "string",
  "date": "string (date)",
  "link": "string (optional)"
}
```

### 📤 Response (201)
```json
{
  "success": true,
  "message": "recentUpdate created",
  "data": {
    "recentUpdate": {
      "id": 0,
      "update": "string",
      "description": "string",
      "date": "string",
      "link": "string | null",
      "createdAt": "string"
    }
  }
}
```

---

## 🔗 DELETE `/api/recentUpdate/delete`

- **Auth**: ✅ Required
- **Permission**: `DELETE_RECENT_UPDATE` (role: `ADMIN`)

### 📥 Request Body
```json
{ "id": 123 }
```

### 📤 Response (200)
```json
{
  "success": true,
  "message": "recentUpdate deleted successfully",
  "data": {}
}
```

---

## 🔗 GET `/api/recentUpdate/getrecentUpdates?page=1&limit=10`

- **Auth**: ❌ Not required

### 🧾 Query Params
- `page` (optional, default `1`)
- `limit` (optional, default `10`)

### 📤 Response (200)
```json
{
  "success": true,
  "message": "recentUpdates fetched successfully",
  "data": {
    "recentUpdates": [
      {
        "id": 0,
        "update": "string",
        "description": "string",
        "date": "string",
        "link": "string | null",
        "createdAt": "string"
      }
    ]
  }
}
```
