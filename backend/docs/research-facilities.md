# 🏢 Research Facilities

Base path: `/api/researchFacility`

---

## 🔗 POST `/api/researchFacility/createResearchFacility`

- **Auth**: ✅ Required
- **Permission**: `CREATE_RESEARCH_FACILITY` (not mapped in `ROLE_ACCESS`)

### 📥 Request Body
```json
{
  "name": "string",
  "description": "string",
  "imageURL": "string (optional)"
}
```

### 📤 Response (201)
```json
{
  "success": true,
  "message": "research Facility created",
  "data": {
    "researchFacility": {
      "id": 0,
      "name": "string",
      "description": "string",
      "imageURL": "string (signed URL)",
      "createdBy": 0
    }
  }
}
```

---

## 🔗 PUT `/api/researchFacility/updateResearchFacility`

- **Auth**: ✅ Required
- **Permission**: `UPDATE_RESEARCH_FACILITY` (not mapped in `ROLE_ACCESS`)

### 📥 Request Body
```json
{
  "id": 123,
  "name": "string",
  "description": "string",
  "imageURL": "string (optional)"
}
```

### 🔐 Ownership Rule
- `ADMIN` can update any.
- Otherwise only the creator (`createdBy`) can update.

---

## 🔗 DELETE `/api/researchFacility/deleteResearchFacility`

- **Auth**: ✅ Required
- **Permission**: `DELETE_RESEARCH_FACILITY` (not mapped in `ROLE_ACCESS`)

### 📥 Request Body
```json
{ "id": 123 }
```

### 🔐 Ownership Rule
Same as update.

---

## 🔗 GET `/api/researchFacility/getResearchFacility?id=123`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "researchFacility fetched successfully",
  "data": {
    "researchFacility": {
      "id": 0,
      "name": "string",
      "description": "string",
      "imageURL": "string (signed URL)"
    }
  }
}
```

---

## 🔗 GET `/api/researchFacility/getReasearchFacilities?page=1&limit=10`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Research Facilities fetched successfully",
  "data": {
    "researchFacilities": [
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
