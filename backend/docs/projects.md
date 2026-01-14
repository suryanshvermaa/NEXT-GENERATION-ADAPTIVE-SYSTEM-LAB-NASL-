# 🧩 Projects

Base path: `/api/project`

---

## 🔗 GET `/api/project/get-all?page=1&limit=10`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Projects fetched successfully",
  "data": {
    "projects": [
      {
        "id": 0,
        "title": "string",
        "agency": "string | null",
        "role": "string | null",
        "outlay": "string | number | null",
        "duration": "string | null",
        "pi": "string",
        "status": "string | null",
        "fundsReceived": "string | number | null",
        "piInstitute": "string | null",
        "CreatedBy": 0
      }
    ]
  }
}
```

---

## 🔗 GET `/api/project/:id`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Project fetched successfully",
  "data": { "project": { "id": 0, "title": "string" } }
}
```

---

## 🔗 GET `/api/project/get-all-by-user-id/:userId?page=1&limit=10`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Projects fetched successfully",
  "data": { "projects": [ { "id": 0, "title": "string" } ] }
}
```

---

## 🔗 POST `/api/project/create`

- **Auth**: ✅ Required
- **Permission**: `CREATE_PROJECT` (roles: `ADMIN`, `ALUMNI`)

### 📥 Request Body
```json
{
  "title": "string",
  "agency": "string",
  "role": "string",
  "outlay": "string|number",
  "duration": "string",
  "pi": "string",
  "status": "string",
  "fundsReceived": "string|number (optional)",
  "piInstitute": "string (optional)"
}
```

### 📤 Response (201)
```json
{
  "success": true,
  "message": "Project created successfully",
  "data": { "project": { "id": 0, "title": "string" } }
}
```

---

## 🔗 PUT `/api/project/update/:id`

- **Auth**: ✅ Required
- **Permission**: `UPDATE_PROJECT` (roles: `ADMIN`, `ALUMNI`)

### 📥 Request Body
```json
{
  "title": "string",
  "agency": "string (optional)",
  "role": "string (optional)",
  "outlay": "string|number (optional)",
  "duration": "string (optional)",
  "status": "string (optional)",
  "fundsReceived": "string|number (optional)"
}
```

### 🔐 Ownership Rule
- `ADMIN` can update any.
- Otherwise only creator (`CreatedBy`) can update.

---

## 🔗 DELETE `/api/project/delete/:id`

- **Auth**: ✅ Required
- **Permission**: `DELETE_PROJECT` (roles: `ADMIN`, `ALUMNI`)

### 🔐 Ownership Rule
Same as update.
