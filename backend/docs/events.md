# 📅 Events

Base path: `/api/event`

---

## 🔗 POST `/api/event/create`

- **Auth**: ✅ Required
- **Permission**: `CREATE_EVENT` (roles: `ADMIN`, `ALUMNI`)

### 📥 Request Body
```json
{
  "event": "string",
  "description": "string",
  "imageURL": "string"
}
```

### 📤 Response (201)
```json
{
  "success": true,
  "message": "Event created successfully",
  "data": {
    "newEvent": {
      "id": 0,
      "event": "string",
      "description": "string",
      "imageURL": "string (signed URL)",
      "createdBy": 0,
      "createdAt": "string"
    }
  }
}
```

---

## 🔗 PUT `/api/event/update/:id`

- **Auth**: ✅ Required
- **Permission**: `UPDATE_EVENT` (roles: `ADMIN`, `ALUMNI`)

### 🧾 Path Params
- `id` (required)

### 📥 Request Body
```json
{
  "event": "string",
  "description": "string",
  "imageURL": "string"
}
```

### 🔐 Ownership Rule
- `ADMIN` can update any.
- Otherwise only the creator (`createdBy`) can update.

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Event updated successfully",
  "data": {
    "updatedEvent": {
      "id": 0,
      "event": "string",
      "description": "string",
      "imageURL": "string (signed URL)"
    }
  }
}
```

---

## 🔗 DELETE `/api/event/delete/:id`

- **Auth**: ✅ Required
- **Permission**: `DELETE_EVENT` (role: `ADMIN`)

### 🧾 Path Params
- `id` (required)

### 🔐 Ownership Rule
Same as update.

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Event deleted successfully",
  "data": {
    "id": 0,
    "event": "string",
    "description": "string",
    "imageURL": "string",
    "createdBy": 0
  }
}
```

---

## 🔗 GET `/api/event/all?page=1&limit=10`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Events fetched successfully",
  "data": {
    "events": [
      {
        "id": 0,
        "event": "string",
        "description": "string",
        "imageURL": "string (signed URL | null)",
        "createdBy": 0
      }
    ]
  }
}
```

---

## 🔗 GET `/api/event/:id`

- **Auth**: ❌ Not required

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Event fetched successfully",
  "data": {
    "event": {
      "id": 0,
      "event": "string",
      "description": "string",
      "imageURL": "string (signed URL)"
    }
  }
}
```
