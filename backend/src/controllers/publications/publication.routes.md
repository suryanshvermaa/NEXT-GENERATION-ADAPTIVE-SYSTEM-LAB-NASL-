# 📚 Publication API Documentation

This API allows creating, updating, retrieving, and deleting publications with author information.

All responses follow a consistent format:

```json
{
	"status": true,
	"message": "Descriptive message",
	"data": {
		/* payload */
	}
}
```

---

## 🔐 Create Publication

**Endpoint:** `POST /api/publication/create`  
**Access:** Private

Creates a new publication.

### 📝 Request Body

```json
{
	"title": "Publication Title",
	"authors": [1, 2],
	"content": "Main content of the publication",
	"type": "journal"
}
```

### ✅ Success Response

```json
{
	"status": true,
	"message": "Publication created successfully",
	"data": {
		"publication": {
			"id": 1,
			"title": "Publication Title",
			"content": "Main content of the publication",
			"type": "journal",
			"authors": [
				{
					"id": 1,
					"name": "Author Name",
					"email": "author@example.com",
					"role": "Researcher",
					"profileImage": "signed_url",
					"designation": "Professor"
				}
			]
		}
	}
}
```

---

## ✏️ Update Publication

**Endpoint:** `PUT /api/publication/:id`  
**Access:** Private

Updates a publication by ID.

### 🔗 URL Parameters

- `id`: ID of the publication to update

### 📝 Request Body

```json
{
	"title": "Updated Title",
	"authors": [1, 3]
}
```

### ✅ Success Response

```json
{
	"status": true,
	"message": "Project updated successfully",
	"data": {
		"publication": {
			"id": 1,
			"title": "Updated Title",
			"authors": [
				/* updated author list */
			]
		}
	}
}
```

---

## 📖 Get All Publications

**Endpoint:** `GET /api/publication/get-all?type=journal`  
**Access:** Public

Fetches all publications optionally filtered by type.

### 🧩 Query Parameters

- `type`: (optional) Filter by type (e.g., `journal`, `conference`)

### ✅ Success Response

```json
{
	"status": true,
	"message": "Projects fetched successfully",
	"data": {
		"publications": [
			{
				"id": 1,
				"title": "Sample Title",
				"type": "journal",
				"authors": [
					/* author list */
				]
			}
		]
	}
}
```

---

## 📄 Get Publication by ID

**Endpoint:** `GET /api/project/:id`  
**Access:** Public

Fetches a single publication by its ID.

### 🔗 URL Parameters

- `id`: ID of the publication

### ✅ Success Response

```json
{
	"status": true,
	"message": "Project fetched successfully",
	"data": {
		"publication": {
			"id": 1,
			"title": "Sample Title",
			"authors": [
				/* author list */
			]
		}
	}
}
```

---

## 🗑️ Delete Publication

**Endpoint:** `DELETE /api/publication/:id`  
**Access:** Private

Deletes a publication by its ID.

### 🔗 URL Parameters

- `id`: ID of the publication

### ✅ Success Response

```json
{
	"status": true,
	"message": "Project deleted successfully",
	"data": {
		"publication": {
			"id": 1,
			"title": "Deleted Publication"
		}
	}
}
```

---

## 👤 Get Publications by Author ID

**Endpoint:** `GET /api/publication/get-all-by-authorId/:authorid/:type`  
**Access:** Private

Returns all publications by a specific author filtered by type.

### 🔗 URL Parameters

- `authorid`: ID of the author
- `type`: Publication type (e.g., `journal`, `conference`)

### ✅ Success Response

```json
{
	"status": true,
	"message": "Projects fetched successfully",
	"data": {
		"publications": [
			{
				"id": 1,
				"title": "Author's Publication",
				"authors": [
					/* author list */
				]
			}
		]
	}
}
```

---

## 🧠 Notes

- All image URLs (`profileImage`) are pre-signed URLs (valid for 3 minutes).
- Requesting or modifying publications requires valid author IDs in the `authors` array.
- `type` is a string field you define (e.g., `"journal"`, `"conference"`).
- Endpoints marked **Private** require authentication middleware (not shown in this file).
