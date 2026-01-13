# 🎓 Outreach / Courses

Base path: `/api/outreachorcourses`

---

## 🔗 POST `/api/outreachorcourses/create`

- **Auth**: ✅ Required
- **Permission**: `CREATE_OUTREACH_OR_COURSES` (roles: `ADMIN`, `ALUMNI`)

### 📥 Request Body
```json
{
  "title": "string",
  "content": "string",
  "type": "string"
}
```

### 📤 Response (201)
```json
{
  "success": true,
  "message": "Publication created successfully",
  "data": {
    "outreachOrCourses": {
      "id": 0,
      "title": "string",
      "type": "string",
      "content": "string",
      "createdBy": 0,
      "createdAt": "string"
    }
  }
}
```

---

## 🔗 PUT `/api/outreachorcourses/:id`

- **Auth**: ✅ Required
- **Permission**: `UPDATE_OUTREACH_OR_COURSES` (roles: `ADMIN`, `ALUMNI`)

### 📥 Request Body
```json
{
  "title": "string",
  "content": "string (optional)"
}
```

### 🔐 Ownership Rule
- `ADMIN` can update any.
- Otherwise only the creator (`createdBy`) can update.

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Outreach or course updated successfully",
  "data": {
    "outreachOrCourse": {
      "id": 0,
      "title": "string",
      "type": "string",
      "content": "string"
    }
  }
}
```

---

## 🔗 GET `/api/outreachorcourses/get-all?type=<type>&page=1&limit=10`

- **Auth**: ❌ Not required

### 🧾 Query Params
- `type` (required)
- `page` (optional)
- `limit` (optional)

### 📤 Response (200)
```json
{
  "success": true,
  "message": "publications fetched successfully",
  "data": {
    "outreachorcourses": [
      {
        "id": 0,
        "title": "string",
        "type": "string",
        "content": "string"
      }
    ]
  }
}
```

---

## 🔗 GET `/api/outreachorcourses/:id`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Outreach or course fetched successfully",
  "data": {
    "outreachorcourse": {
      "id": 0,
      "title": "string",
      "type": "string",
      "content": "string"
    }
  }
}
```

---

## 🔗 DELETE `/api/outreachorcourses/:id`

- **Auth**: ✅ Required
- **Permission**: `DELETE_OUTREACH_OR_COURSES` (roles: `ADMIN`, `ALUMNI`)

### 🔐 Ownership Rule
Same as update.

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Outreach or course deleted successfully",
  "data": {
    "outreachorcourse": {
      "id": 0,
      "title": "string",
      "type": "string",
      "content": "string"
    }
  }
}
```
