# 📜 Patents

Base path: `/api/patent`

---

## 🔗 POST `/api/patent/create`

- **Auth**: ✅ Required
- **Permission**: `CREATE_PATENT` (roles: `ADMIN`, `ALUMNI`)

### 📥 Request Body
```json
{
  "title": "string",
  "type": "string (optional)",
  "grantNo": "string (optional)",
  "grantDate": "string (optional, date)",
  "publicationDate": "string (optional, date)",
  "inventors": "1,2,3" 
}
```

### 🧾 Notes
- `inventors` is a comma-separated string of userIds; backend converts to `number[]`.

### 📤 Response (201)
```json
{
  "success": true,
  "message": "Patent created successfully",
  "data": { "patent": { "id": 0, "title": "string" } }
}
```

---

## 🔗 GET `/api/patent/get-all?page=1&limit=10`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Patents fetched successfully",
  "data": { "patents": [ { "id": 0, "title": "string" } ] }
}
```

---

## 🔗 GET `/api/patent/:id`

- **Auth**: ❌ Not required

### ⚠️ Implementation Note
Route is `/:id` but controller reads `req.query.id`. So call it as:
- `GET /api/patent/anything?id=123` (works)

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Patent fetched successfully",
  "data": { "patent": { "id": 123 } }
}
```

---

## 🔗 PUT `/api/patent/:id`

- **Auth**: ✅ Required
- **Permission**: `UPDATE_PATENT` (roles: `ADMIN`, `ALUMNI`)

### ⚠️ Implementation Note
Route is `PUT /:id` but controller expects `id` in body.

### 📥 Request Body
```json
{
  "id": 123,
  "title": "string",
  "type": "string (optional)",
  "grantNo": "string (optional)",
  "grantDate": "string (optional, date)",
  "publicationDate": "string (optional, date)",
  "inventors": "1,2,3"
}
```

---

## 🔗 DELETE `/api/patent/:id`

- **Auth**: ✅ Required
- **Permission**: `DELETE_PATENT` (roles: `ADMIN`, `ALUMNI`)

---

## 🔗 GET `/api/patent/get-all-by-user-id/:userId?page=1&limit=10`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Patents fetched successfully",
  "data": { "patents": [ { "id": 0, "title": "string" } ] }
}
```
