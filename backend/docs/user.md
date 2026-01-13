# 👤 User

Base path: `/api/user`

---

## 🔗 POST `/api/user/createUser`

- **Auth**: ✅ Required
- **Permission**: `CREATE_USER` (role: `ADMIN`)

### 📥 Request Body
```json
{
  "name": "string",
  "email": "string",
  "designation": "BTECH | MTECH | PHD | INVESTIGATOR | INTERN | ALUMNI",
  "profileImage": "string (optional, default=\"\")",
  "password": "string (optional, default=\"\")"
}
```

### 📤 Response (201)
```json
{
  "success": true,
  "message": "<name> is ceated successfully",
  "data": {
    "user": {
      "name": "string",
      "email": "string",
      "role": "string"
    }
  }
}
```

### ❌ Common Errors
- 400: missing fields / email already in use
- 401: missing/invalid token
- 403: insufficient permission

---

## 🔗 POST `/api/user/login`

- **Auth**: ❌ Not required

### 📥 Request Body
```json
{
  "email": "string",
  "password": "string"
}
```

### 📤 Response (200)
```json
{
  "success": true,
  "message": "login successful",
  "data": {
    "token": "string (JWT)",
    "user": {
      "id": 0,
      "name": "string",
      "email": "string",
      "profileImage": "string (signed URL or empty string)",
      "password": "Not visible for security",
      "role": "string",
      "designation": "string",
      "about": "string | null",
      "contactNumber": "string | null"
    }
  }
}
```

### ❌ Common Errors
- 400: user not found / google-only user tried password login
- 401: password incorrect

---

## 🔗 POST `/api/user/loginWithGoogle`

- **Auth**: ❌ Not required

### 📥 Request Body
```json
{
  "code": "string (Google OAuth authorization code)"
}
```

### 📤 Response (200)
```json
{
  "success": true,
  "message": "login successful",
  "data": {
    "token": "string (JWT)",
    "user": {
      "id": 0,
      "email": "string",
      "profileImage": "string (signed URL or empty string)",
      "password": "Google login not have password"
    }
  }
}
```

---

## 🔗 PUT `/api/user/updateProfile`

- **Auth**: ✅ Required
- **Permission**: none (any authenticated user)

### 📥 Request Body
```json
{
  "name": "string (optional)",
  "email": "string (optional)",
  "profileImage": "string (optional)",
  "contactNumber": "string|number (optional)",
  "about": "string (optional)",
  "social": [
    {
      "platform": "string",
      "url": "string",
      "icon": "string (optional)"
    }
  ]
}
```

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "user": {
      "id": 0,
      "name": "string",
      "email": "string",
      "profileImage": "string (signed URL or empty string)",
      "password": "NOT VISIBLE FOR SECURITY",
      "Social": [
        {
          "id": 0,
          "platform": "string",
          "url": "string",
          "iconURL": "string | null"
        }
      ]
    }
  }
}
```

---

## 🔗 GET `/api/user/search?query=<emailPart>`

- **Auth**: ❌ Not required (note: controller comment says Private, but route is public)

### 🧾 Query Params
- `query` (required): string

### 📤 Response (200)
```json
{
  "success": true,
  "message": "Users found successfully",
  "data": {
    "users": [
      {
        "id": 0,
        "name": "string",
        "email": "string",
        "profileImage": "string (signed URL or empty string)"
      }
    ]
  }
}
```

### 📤 Response (404)
```json
{
  "success": true,
  "message": "No users found",
  "data": { "users": [] }
}
```

---

## 🔗 GET `/api/user/getPeople?designation=<...>&page=1&limit=10`

- **Auth**: ❌ Not required

### 🧾 Query Params
- `designation` (required): `btech|mtech|phd|investigator|intern|alumni`
- `page` (optional, default `1`)
- `limit` (optional, default `10`)

### 📤 Response (200)
```json
{
  "success": true,
  "message": "People found successfully",
  "data": {
    "people": [
      {
        "id": 0,
        "name": "string",
        "email": "string",
        "profileImage": "string (signed URL or empty string)",
        "designation": "string",
        "about": "string | null"
      }
    ]
  }
}
```

---

## 🔗 GET `/api/user/profile/:userId`

- **Auth**: ❌ Not required

### 🧾 Path Params
- `userId` (required)

### 📤 Response (200)
```json
{
  "success": true,
  "message": "profile fetched successfully",
  "data": {
    "user": {
      "id": 0,
      "name": "string",
      "email": "string",
      "profileImage": "string (signed URL or empty string)",
      "about": "string | null",
      "designation": "string",
      "contactNumber": "string | null",
      "books_count": 0,
      "conferencePapers_count": 0,
      "journals_count": 0,
      "patents_count": 0,
      "role": "string",
      "Social": [
        {
          "id": 0,
          "platform": "string",
          "url": "string",
          "iconURL": "string | null"
        }
      ]
    }
  }
}
```
