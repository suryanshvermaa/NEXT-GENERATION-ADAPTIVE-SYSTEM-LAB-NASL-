# 🖼️ Image (S3 Presigned URLs)

Base path: `/api/image`

---

## 🔗 POST `/api/image/uploadURL`

- **Auth**: ✅ Required
- **Permission**: `UPLOAD_IMAGE` (roles: `ADMIN`, `ALUMNI`)

### 📥 Request Body
```json
{
  "imageName": "string"
}
```

### 📤 Response (201)
```json
{
  "success": true,
  "message": "image url created successfully",
  "data": {
    "imageUploadingUrl": "string (presigned PUT URL)",
    "imageUrl": "string (public object URL without query string)"
  }
}
```

---

## 🔗 DELETE `/api/image/deleteImage`

- **Auth**: ✅ Required
- **Permission**: `DELETE_IMAGE` (role: `ADMIN`)

### 📥 Request Body
```json
{
  "imageURL": "string (public object URL)"
}
```

### 📤 Response (201)
```json
{
  "success": true,
  "message": "image deleted successfully",
  "data": {}
}
```
