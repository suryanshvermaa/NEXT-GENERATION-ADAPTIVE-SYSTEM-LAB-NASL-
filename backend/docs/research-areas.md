# 🧪 Research Areas

Base path: `/api/researchArea`

---

## 🔗 POST `/api/researchArea/createReasearchArea`

- **Auth**: ✅ Required
- **Permission**: `CREATE_RESEARCH_AREA` (not mapped in `ROLE_ACCESS` → may be blocked depending on runtime)

### 📥 Request Body
```json
{
  "name": "string",
  "description": "string",
  "imageURL": "string (S3 object URL)"
}
```

### 📤 Response (201)
Returns a signed image URL.
```json
{
  "success": true,
  "message": "research Area created",
  "data": {
    "researchArea": {
      "id": 0,
      "name": "string",
      "description": "string",
      "imageURL": "string (signed URL)",
      "createdBy": 0,
      "createdAt": "string"
    }
  }
}
```

---

## 🔗 PUT `/api/researchArea/updateResearchArea`

- **Auth**: ✅ Required
- **Permission**: `UPDATE_RESEARCH_AREA` (not mapped in `ROLE_ACCESS`)

### 📥 Request Body
```json
{
  "id": 123,
  "name": "string",
  "description": "string",
  "imageURL": "string"
}
```

### 📤 Response (201)
```json
{
  "success": true,
  "message": "research Area updated",
  "data": {
    "updatedResearchArea": {
      "id": 0,
      "name": "string",
      "description": "string",
      "imageURL": "string (signed URL)"
    }
  }
}
```

### 🔐 Ownership Rule
- `ADMIN` can update any.
- Otherwise only the creator (`createdBy`) can update.

---

## 🔗 DELETE `/api/researchArea/deleteResearchArea`

- **Auth**: ✅ Required
- **Permission**: `DELETE_RESEARCH_AREA` (not mapped in `ROLE_ACCESS`)

### 📥 Request Body
```json
{ "id": 123 }
```

### 📤 Response (200)
```json
{
  "success": true,
  "message": "researchArea deleted successfully",
  "data": {}
}
```

### 🔐 Ownership Rule
Same as update.

---

## 🔗 GET `/api/researchArea/getResearchArea?id=123`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "researchArea fetched successfully",
  "data": {
    "researchArea": {
      "id": 0,
      "name": "string",
      "description": "string",
      "imageURL": "string (signed URL)"
    }
  }
}
```

---

## 🔗 GET `/api/researchArea/getReasearchAreas?page=1&limit=10`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Research Areas fetched successfully",
  "data": {
    "researchAreas": [
      {
        "id": 0,
        "name": "string",
        "description": "string",
        "imageURL": "string (signed URL)"
      }
    ]
  }
}
```
