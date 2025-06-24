# Research Program Website API Documentation

This document provides detailed information about all available API endpoints, their expected inputs, outputs, and error cases, based on the current backend codebase.

---

## Table of Contents

- [User Routes](#user-routes)
- [Image Routes](#image-routes)
- [Recent Update Routes](#recent-update-routes)
- [Highlight Routes](#highlight-routes)
- [Research Area Routes](#research-area-routes)
- [Research Facility Routes](#research-facility-routes)
- [Book Routes](#book-routes)
- [Book Chapter Routes](#book-chapter-routes)
- [Conference Paper Routes](#conference-paper-routes)
- [Journal Paper Routes](#journal-paper-routes)
- [Project Routes](#project-routes)
- [Patent Routes](#patent-routes)
- [Photo Gallery Routes](#photo-gallery-routes)
- [Event Routes](#event-routes)
- [Health Check](#health-check)

---

## User Routes

Base path: `/api/user`

### Create User

- **POST** `/api/user/createUser`
- **Auth:** Admin only
- **Body:**
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string (optional)",
      "profileImage": "string (optional)",
      "role": "USER" | "ADMIN" (optional)
    }
    ```
- **Success (201):**
    ```json
    { "user": { "name": "string", "email": "string", "role": "USER|ADMIN" } }
    ```
- **Errors:** 400 (missing fields/email exists), 401 (unauthorized), 500

### Login

- **POST** `/api/user/login`
- **Auth:** Public
- **Body:**
    ```json
    { "email": "string", "password": "string" }
    ```
- **Success (200):**
    ```json
    { "token": "string" }
    ```
- **Errors:** 400 (missing/invalid), 401 (wrong password), 500

### Login with Google

- **POST** `/api/user/loginWithGoogle`
- **Auth:** Public
- **Body:**
    ```json
    { "code": "string" }
    ```
- **Success (200):** `{ "token": "string" }`
- **Errors:** 400, 401

### Get Profile

- **GET** `/api/user/profile`
- **Auth:** User only
- **Success (200):**
    ```json
    { "user": { ...user fields, profileImage: "signedUrl" } }
    ```
- **Errors:** 401, 500

### Update Profile

- **PUT** `/api/user/updateProfile`
- **Auth:** User only
- **Body:**
    ```json
    {
    	"name": "string",
    	"profileImage": "string",
    	"contactNumber": "string",
    	"linkedin": "string",
    	"twitter": "string",
    	"google": "string",
    	"about": "string"
    }
    ```
- **Success (200):** `{ "user": { ...updated fields } }`
- **Errors:** 400, 401, 500

### Search User by Email

- **GET** `/api/user/search?query=searchterm`
- **Auth:** User only
- **Success (200):** `{ "users": [ { id, name, email, profileImage } ] }`
- **Errors:** 400, 404

---

## Image Routes

Base path: `/api/image`

### Upload Image (Get Upload URL)

- **POST** `/api/image/uploadURL`
- **Auth:** User only
- **Body:**
    ```json
    { "imageName": "string (with extension)" }
    ```
- **Success (201):**
    ```json
    { "imageUploadingUrl": "string", "imageUrl": "string" }
    ```
- **Errors:** 400, 401, 413, 500

### Delete Image

- **DELETE** `/api/image/deleteImage`
- **Auth:** User only
- **Body:**
    ```json
    { "imageURL": "string" }
    ```
- **Success (200):** `{ "message": "Image deleted successfully" }`
- **Errors:** 401, 404, 500

---

## Recent Update Routes

Base path: `/api/recentUpdate`

### Create Recent Update

- **POST** `/api/recentUpdate/create`
- **Auth:** Admin only
- **Body:**
    ```json
    {
    	"update": "string",
    	"description": "string",
    	"link": "string (optional)",
    	"date": "string"
    }
    ```
- **Success (201):** `{ ...recentUpdate }`
- **Errors:** 400, 401, 500

### Delete Recent Update

- **DELETE** `/api/recentUpdate/delete`
- **Auth:** Admin only
- **Body:** `{ "id": number }`
- **Success (200):** `{ "message": "Recent update deleted successfully" }`
- **Errors:** 401, 404, 500

### Get All Recent Updates

- **GET** `/api/recentUpdate/getrecentUpdates`
- **Auth:** Public
- **Success (200):** `{ "data": [ ...recentUpdates ] }`
- **Errors:** 500

---

## Highlight Routes

Base path: `/api/highlight`

### Create Highlight

- **POST** `/api/highlight/create`
- **Auth:** Admin only
- **Body:**
    ```json
    {
    	"highlight": "string",
    	"description": "string",
    	"link": "string (optional)",
    	"date": "string"
    }
    ```
- **Success (201):** `{ ...highlight }`
- **Errors:** 400, 401, 500

### Delete Highlight

- **DELETE** `/api/highlight/delete`
- **Auth:** Admin only
- **Body:** `{ "id": number }`
- **Success (200):** `{ "message": "Highlight deleted successfully" }`
- **Errors:** 401, 404, 500

### Get All Highlights

- **GET** `/api/highlight/getHighlights`
- **Auth:** Public
- **Success (200):** `{ "data": [ ...highlights ] }`
- **Errors:** 500

---

## Research Area Routes

Base path: `/api/researchArea`

### Create Research Area

- **POST** `/api/researchArea/createReasearchArea`
- **Auth:** Admin only
- **Body:**
    ```json
    { "name": "string", "description": "string", "imageURL": "string" }
    ```
- **Success (201):** `{ ...researchArea }`
- **Errors:** 400, 401, 500

### Update Research Area

- **PUT** `/api/researchArea/updateResearchArea`
- **Auth:** Admin only
- **Body:**
    ```json
    { "id": number, "name": "string", "description": "string", "imageURL": "string" }
    ```
- **Success (200):** `{ ...researchArea }`
- **Errors:** 400, 401, 404, 500

### Delete Research Area

- **DELETE** `/api/researchArea/deleteResearchArea`
- **Auth:** Admin only
- **Body:** `{ "id": number }`
- **Success (200):** `{ "message": "Research area deleted successfully" }`
- **Errors:** 401, 404, 500

### Get Research Area

- **GET** `/api/researchArea/getResearchArea?id=number`
- **Auth:** Public
- **Success (200):** `{ ...researchArea }`
- **Errors:** 404, 500

### Get All Research Areas

- **GET** `/api/researchArea/getReasearchAreas`
- **Auth:** Public
- **Success (200):** `{ "data": [ ...researchAreas ] }`
- **Errors:** 500

---

## Research Facility Routes

Base path: `/api/researchFacility`

### Create Research Facility

- **POST** `/api/researchFacility/createResearchFacility`
- **Auth:** Admin only
- **Body:**
    ```json
    {
    	"name": "string",
    	"description": "string",
    	"imageURL": "string (optional)"
    }
    ```
- **Success (201):** `{ ...researchFacility }`
- **Errors:** 400, 401, 500

### Update Research Facility

- **PUT** `/api/researchFacility/updateResearchFacility`
- **Auth:** Admin only
- **Body:**
    ```json
    { "id": number, "name": "string", "description": "string", "imageURL": "string (optional)" }
    ```
- **Success (200):** `{ ...researchFacility }`
- **Errors:** 400, 401, 404, 500

### Delete Research Facility

- **DELETE** `/api/researchFacility/deleteResearchFacility`
- **Auth:** Admin only
- **Body:** `{ "id": number }`
- **Success (200):** `{ "message": "Research facility deleted successfully" }`
- **Errors:** 401, 404, 500

### Get Research Facility

- **GET** `/api/researchFacility/getResearchFacility?id=number`
- **Auth:** Public
- **Success (200):** `{ ...researchFacility }`
- **Errors:** 404, 500

### Get All Research Facilities

- **GET** `/api/researchFacility/getReasearchFacilities`
- **Auth:** Public
- **Success (200):** `{ "data": [ ...researchFacilities ] }`
- **Errors:** 500

---

## Book Routes

Base path: `/api/book`

### Create Book

- **POST** `/api/book/create`
- **Auth:** User only
- **Body:**
    ```json
    { "title": "string", "authors": [number], "publisher": "string (optional)", "scopus": "string (optional)", "doi": "string (optional)", "isbn": "string (optional)", "year": number }
    ```
- **Success (201):** `{ "book": { ...book } }`
- **Errors:** 400, 401, 500

### Get All Books

- **GET** `/api/book/get-all`
- **Auth:** Public
- **Success (200):** `{ "books": [ ...book ] }`
- **Errors:** 500

### Get Book By ID

- **GET** `/api/book/:id`
- **Auth:** Public
- **Success (200):** `{ "book": { ...book } }`
- **Errors:** 404, 500

### Update Book

- **PUT** `/api/book/:id`
- **Auth:** User only
- **Body:** (same as create)
- **Success (200):** `{ "book": { ...updated book } }`
- **Errors:** 404, 500

### Delete Book

- **DELETE** `/api/book/:id`
- **Auth:** User only
- **Success (200):** `{ "book": { ...deleted book } }`
- **Errors:** 404, 500

### Get All Books By User ID

- **GET** `/api/book/get-all-by-user-id?userId=number`
- **Auth:** User only
- **Success (200):** `{ "books": [ ...book ] }`
- **Errors:** 404, 500

---

## Book Chapter Routes

Base path: `/api/book-chapter`

### Create Book Chapter

- **POST** `/api/book-chapter/create`
- **Auth:** User only
- **Body:**
    ```json
    { "chapterTitle": "string", "bookTitle": "string", "authors": [number], "scopus": "string (optional)", "doi": "string (optional)", "publisher": "string", "year": number }
    ```
- **Success (201):** `{ "bookChapter": { ...bookChapter } }`
- **Errors:** 400, 401, 500

### Get All Book Chapters

- **GET** `/api/book-chapter/get-all`
- **Auth:** Public
- **Success (200):** `{ "bookChapters": [ ...bookChapter ] }`
- **Errors:** 500

### Get Book Chapter By ID

- **GET** `/api/book-chapter/:id`
- **Auth:** Public
- **Success (200):** `{ "bookChapter": { ...bookChapter } }`
- **Errors:** 404, 500

### Update Book Chapter

- **PUT** `/api/book-chapter/:id`
- **Auth:** User only
- **Body:** (same as create)
- **Success (200):** `{ "bookChapter": { ...updated bookChapter } }`
- **Errors:** 404, 500

### Delete Book Chapter

- **DELETE** `/api/book-chapter/:id`
- **Auth:** User only
- **Success (200):** `{ "bookChapter": { ...deleted bookChapter } }`
- **Errors:** 404, 500

### Get All Book Chapters By User ID

- **GET** `/api/book-chapter/get-all-by-user-id?userId=number`
- **Auth:** User only
- **Success (200):** `{ "bookChapters": [ ...bookChapter ] }`
- **Errors:** 404, 500

---

## Conference Paper Routes

Base path: `/api/conference-paper`

### Create Conference Paper

- **POST** `/api/conference-paper/create`
- **Auth:** User only
- **Body:**
    ```json
    { "title": "string", "authors": [number], "conference": "string", "location": "string", "year": number, "pages": "string", "indexing": "string", "doi": "string" }
    ```
- **Success (201):** `{ "conferencePaper": { ...conferencePaper } }`
- **Errors:** 400, 401, 500

### Get All Conference Papers

- **GET** `/api/conference-paper/get-all`
- **Auth:** Public
- **Success (200):** `{ "conferencePapers": [ ...conferencePaper ] }`
- **Errors:** 500

### Get Conference Paper By ID

- **GET** `/api/conference-paper/:id`
- **Auth:** Public
- **Success (200):** `{ "conferencePaper": { ...conferencePaper } }`
- **Errors:** 404, 500

### Update Conference Paper

- **PUT** `/api/conference-paper/:id`
- **Auth:** User only
- **Body:** (same as create)
- **Success (200):** `{ "conferencePaper": { ...updated conferencePaper } }`
- **Errors:** 404, 500

### Delete Conference Paper

- **DELETE** `/api/conference-paper/:id`
- **Auth:** User only
- **Success (200):** `{ "conferencePaper": { ...deleted conferencePaper } }`
- **Errors:** 404, 500

### Get All Conference Papers By User ID

- **GET** `/api/conference-paper/get-all-by-user-id?userId=number`
- **Auth:** User only
- **Success (200):** `{ "conferencePapers": [ ...conferencePaper ] }`
- **Errors:** 404, 500

---

## Journal Paper Routes

Base path: `/api/journal-paper`

### Create Journal Paper

- **POST** `/api/journal-paper/create`
- **Auth:** User only
- **Body:**
    ```json
    { "title": "string", "authors": [number], "journal": "string", "volume": "string (optional)", "year": number, "publicationDate": "string (optional)", "quartile": "string (optional)", "doi": "string (optional)" }
    ```
- **Success (201):** `{ "journalPaper": { ...journalPaper } }`
- **Errors:** 400, 401, 500

### Get All Journal Papers

- **GET** `/api/journal-paper/get-all`
- **Auth:** Public
- **Success (200):** `{ "journalPapers": [ ...journalPaper ] }`
- **Errors:** 500

### Get Journal Paper By ID

- **GET** `/api/journal-paper/:id`
- **Auth:** Public
- **Success (200):** `{ "journalPaper": { ...journalPaper } }`
- **Errors:** 404, 500

### Update Journal Paper

- **PUT** `/api/journal-paper/:id`
- **Auth:** User only
- **Body:** (same as create)
- **Success (200):** `{ "journalPaper": { ...updated journalPaper } }`
- **Errors:** 404, 500

### Delete Journal Paper

- **DELETE** `/api/journal-paper/:id`
- **Auth:** User only
- **Success (200):** `{ "journalPaper": { ...deleted journalPaper } }`
- **Errors:** 404, 500

### Get All Journal Papers By User ID

- **GET** `/api/journal-paper/get-all-by-user-id?userId=number`
- **Auth:** User only
- **Success (200):** `{ "journalPapers": [ ...journalPaper ] }`
- **Errors:** 404, 500

---

## Project Routes

Base path: `/api/project`

### Create Project

- **POST** `/api/project/create`
- **Auth:** User only
- **Body:**
    ```json
    { "title": "string", "agency": "string", "role": "string", "outlay": number, "duration": "string", "piInstitute": number, "status": "string", "fundsReceived": number (optional) }
    ```
- **Success (201):** `{ "project": { ...project } }`
- **Errors:** 400, 401, 500

### Get All Projects

- **GET** `/api/project/get-all`
- **Auth:** Public
- **Success (200):** `{ "projects": [ ...project ] }`
- **Errors:** 500

### Get Project By ID

- **GET** `/api/project/:id`
- **Auth:** Public
- **Success (200):** `{ "project": { ...project } }`
- **Errors:** 404, 500

### Update Project

- **PUT** `/api/project/update/:id`
- **Auth:** User only
- **Body:** (same as create)
- **Success (200):** `{ "project": { ...updated project } }`
- **Errors:** 404, 500

### Delete Project

- **DELETE** `/api/project/delete/:id`
- **Auth:** User only
- **Success (200):** `{ "project": { ...deleted project } }`
- **Errors:** 404, 500

### Get All Projects By PI ID

- **GET** `/api/project/get-all-by-pi/:piId`
- **Auth:** User only
- **Success (200):** `{ "projects": [ ...project ] }`
- **Errors:** 404, 500

---

## Patent Routes

Base path: `/api/patent`

### Create Patent

- **POST** `/api/patent/create`
- **Auth:** User only
- **Body:**
    ```json
    { "title": "string", "type": "string", "grantNo": "string", "grantDate": "string (optional)", "publicationDate": "string (optional)", "inventors": [number] }
    ```
- **Success (201):** `{ "patent": { ...patent } }`
- **Errors:** 400, 401, 500

### Get All Patents

- **GET** `/api/patent/get-all`
- **Auth:** Public
- **Success (200):** `{ "patents": [ ...patent ] }`
- **Errors:** 500

### Get Patent By ID

- **GET** `/api/patent/:id`
- **Auth:** Public
- **Success (200):** `{ "patent": { ...patent } }`
- **Errors:** 404, 500

### Update Patent

- **PUT** `/api/patent/:id`
- **Auth:** User only
- **Body:** (same as create)
- **Success (200):** `{ "patent": { ...updated patent } }`
- **Errors:** 404, 500

### Delete Patent

- **DELETE** `/api/patent/:id`
- **Auth:** User only
- **Success (200):** `{ "patent": { ...deleted patent } }`
- **Errors:** 404, 500

### Get All Patents By User ID

- **GET** `/api/patent/get-all-by-user-id?userId=number`
- **Auth:** User only
- **Success (200):** `{ "patents": [ ...patent ] }`
- **Errors:** 404, 500

---

## Photo Gallery Routes

Base path: `/api/photo-gallery`

### Add Image

- **POST** `/api/photo-gallery/addImage`
- **Auth:** Admin only
- **Body:**
    ```json
    { "imageURL": "string", "tags": ["string"], "groupMoment": boolean (optional) }
    ```
- **Success (201):** `{ ...photoGallery }`
- **Errors:** 400, 401, 500

### Get All Images

- **GET** `/api/photo-gallery/getImages`
- **Auth:** Public
- **Success (200):** `{ "images": [ ...photoGallery ] }`
- **Errors:** 500

### Delete Image

- **DELETE** `/api/photo-gallery/deleteImage`
- **Auth:** Admin only
- **Body:** `{ "id": number }`
- **Success (200):** `{ "message": "Image deleted successfully" }`
- **Errors:** 401, 404, 500

### Get All Group Moment Images

- **GET** `/api/photo-gallery/getGroupMomentImages`
- **Auth:** Public
- **Success (200):** `{ "images": [ ...photoGallery ] }`
- **Errors:** 500

---

## Event Routes

Base path: `/api/event`

### Create Event

- **POST** `/api/event/create`
- **Auth:** Admin only
- **Body:**
    ```json
    { "event": "string", "description": "string", "imageURL": "string" }
    ```
- **Success (201):** `{ "newEvent": { ...event, imageURL: "signedUrl" } }`
- **Errors:** 400, 401, 500

### Update Event

- **PUT** `/api/event/update/:id`
- **Auth:** Admin only
- **Body:** (same as create)
- **Success (200):** `{ "updatedEvent": { ...event, imageURL: "signedUrl" } }`
- **Errors:** 400, 401, 404, 500

### Delete Event

- **DELETE** `/api/event/delete/:id`
- **Auth:** Admin only
- **Success (200):** `{ ...deletedEvent }`
- **Errors:** 401, 404, 500

### Get All Events

- **GET** `/api/event/all`
- **Auth:** Public
- **Success (200):** `{ "events": [ ...event ] }`
- **Errors:** 500

### Get Event By ID

- **GET** `/api/event/:id`
- **Auth:** Public
- **Success (200):** `{ "event": { ...event } }`
- **Errors:** 404, 500

---

## Health Check

- **GET** `/health`
- **Auth:** Public
- **Success (200):**
    ```json
    { "message": "healty", "data": {} }
    ```
- **Errors:** 500

---

**Note:** For all endpoints that require authentication, provide a valid JWT token in the `Authorization` header as `Bearer <token>`. For admin-only endpoints, the user must have admin privileges.
