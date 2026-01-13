# 🖼️ Photo Gallery

Base path: `/api/photo-gallery`

---

## 🔗 POST `/api/photo-gallery/addImage`

- **Auth**: ✅ Required
- **Permission**: `ADD_GALLERY_IMAGE` (role: `ADMIN`)

### 📥 Request Body
```json
{
  "imageUrl": "string",
  "tags": "tag1,tag2,tag3",
  "groupMoment": "boolean (optional, default=false)"
}
```

### 📤 Response (201)
```json
{
  "success": true,
  "message": "gallery image added",
  "data": {
    "galleryImage": {
      "id": 0,
      "imageURL": "string",
      "tags": ["string"],
      "groupMoment": false,
      "createdAt": "string",
      "imageUrl": "string (signed URL)"
    }
  }
}
```

---

## 🔗 GET `/api/photo-gallery/getImages?page=1&limit=10`

- **Auth**: ❌ Not required

### 🧾 Query Params
- `page` (optional, default `1`)
- `limit` (optional, default `10`)

### 📤 Response (200)
```json
{
  "success": true,
  "message": "images fetched successfully",
  "data": {
    "images": [
      {
        "id": 0,
        "imageURL": "string (signed URL)",
        "tags": ["string"]
      }
    ]
  }
}
```

---

## 🔗 GET `/api/photo-gallery/getGroupMomentImages?page=1&limit=10`

- **Auth**: ❌ Not required

### 🧾 Query Params
- `page` (optional, default `1`)
- `limit` (optional, default `10`)

### 📤 Response (200)
Same response shape as `getImages`, but returns `groupMoment=true` entries.

---

## 🔗 DELETE `/api/photo-gallery/deleteImage`

- **Auth**: ✅ Required
- **Permission**: `DELETE_GALLERY_IMAGE` (role: `ADMIN`)

### 📥 Request Body
```json
{
  "imageId": 123
}
```

### 📤 Response (200)
```json
{
  "success": true,
  "message": "photo deleted successfully",
  "data": {}
}
```
