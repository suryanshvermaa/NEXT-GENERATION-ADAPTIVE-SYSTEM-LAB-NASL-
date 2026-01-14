# 📖 Book Chapters

Base path: `/api/book-chapter`

---

## 🔗 POST `/api/book-chapter/create`

- **Auth**: ✅ Required
- **Permission**: `CREATE_BOOK_CHAPTER` (roles: `ADMIN`, `ALUMNI`)

### 📥 Request Body
```json
{
  "chapterTitle": "string",
  "bookTitle": "string",
  "authors": "a,b,c",
  "scopus": "string (optional)",
  "doi": "string (optional)",
  "publisher": "string (optional)",
  "year": "string|number (optional)"
}
```

---

## 🔗 GET `/api/book-chapter/get-all?page=1&limit=10`

- **Auth**: ❌ Not required

---

## 🔗 GET `/api/book-chapter/:id`

- **Auth**: ❌ Not required

---

## 🔗 PUT `/api/book-chapter/:id`

- **Auth**: ✅ Required
- **Permission**: `UPDATE_BOOK_CHAPTER` (roles: `ADMIN`, `ALUMNI`)

### 📥 Request Body
```json
{
  "chapterTitle": "string",
  "bookTitle": "string",
  "authors": "a,b",
  "publisher": "string",
  "year": "string|number",
  "scopus": "string (optional)",
  "doi": "string (optional)"
}
```

---

## 🔗 DELETE `/api/book-chapter/:id`

- **Auth**: ✅ Required
- **Permission**: `DELETE_BOOK_CHAPTER` (roles: `ADMIN`, `ALUMNI`)

---

## 🔗 GET `/api/book-chapter/get-all-by-user-id/:userId?page=1&limit=10`

- **Auth**: ❌ Not required

### ⚠️ Implementation Note
Route is under book-chapter, but handler is `getAllBooksByUserId` (books controller). Response shape: `{ books: [...] }`.
