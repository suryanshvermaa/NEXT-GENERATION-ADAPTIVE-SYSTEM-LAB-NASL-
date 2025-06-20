# Research Program Website API Documentation

This document provides detailed information about all available API endpoints, their expected inputs, outputs, and error cases.

## Table of Contents

- [User Routes](#user-routes)
- [Research Area Routes](#research-area-routes)
- [Research Facility Routes](#research-facility-routes)
- [Recent Updates Routes](#recent-updates-routes)
- [Highlights Routes](#highlights-routes)
- [Image Routes](#image-routes)
- [Health Check](#health-check)
- [Publications Routes](#publications-routes)

### Note:-

In routes, which required imageURL in which you have to do first these steps before calling api.

- Call firts upload image route it will give you an protected Url.
- Use this url and with put request upload image to this url.
- After this request to this api with imageurl.

## Image Routes

Base path: `/api/image`

### Upload Image

- **Method:** POST
- **Path:** `/api/image/uploadURL`
- **Auth Required:** Yes
- **Request Body (multipart/form-data):**
    ```json
    {
    	"imageName": "FileName.jpg(imageName ends with your image extension name)"
    }
    ```
- **Success Response (201):**
    ```json
    {
    	"imageUploadingUrl": "string",
    	"imageUrl": "string"
    }
    ```
- **Error Responses:**
    - `400` - Invalid file type
    - `401` - Unauthorized
    - `413` - File too large
    - `500` - Server error

### Delete Image

- **Method:** DELETE
- **Path:** `/api/image/deleteImage`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
    	"imageURL": "string"
    }
    ```
- **Success Response (200):**
    ```json
    {
    	"message": "Image deleted successfully"
    }
    ```
- **Error Responses:**
    - `401` - Unauthorized
    - `404` - Image not found
    - `500` - Server error

## User Routes

Base path: `/api/user`

### Create User

- **Method:** POST
- **Path:** `/api/user/createUser`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
    	"name": "string",
    	"email": "string",
    	"password": "string",
    	"profileImage": "string (optional)"
    }
    ```
- **Success Response (200):**
    ```json
    {
    	"name": "string",
    	"email": "string"
    }
    ```
- **Error Responses:**
    - `400` - Invalid input data
    - `401` - Unauthorized
    - `400` - Email already exists
    - `500` - Server error

### Login

- **Method:** POST
- **Path:** `/api/user/login`
- **Auth Required:** No
- **Request Body:**
    ```json
    {
    	"email": "string",
    	"password": "string"
    }
    ```
- **Success Response (200):**
    ```json
    {
    	"token": "string"
    }
    ```
- **Error Responses:**
    - `400` - Invalid credentials
    - `500` - Server error

### Get Profile

- **Method:** GET
- **Path:** `/api/user/profile`
- **Auth Required:** Yes
- **Success Response (200):**
    ```json
    {
    	"name": "string",
    	"email": "string",
    	"profileImage": "string (optional)"
    }
    ```
- **Error Responses:**
    - `401` - Unauthorized
    - `500` - Server error

## Research Area Routes

Base path: `/api/researchArea`

### Create Research Area

- **Method:** POST
- **Path:** `/api/researchArea/createReasearchArea`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
    	"name": "string",
    	"description": "string",
    	"imageURL": "string"
    }
    ```
- **Success Response (201):**
    ```json
    {
    	"id": "number",
    	"name": "string",
    	"description": "string",
    	"imageURL": "string",
    	"createdAt": "Date",
    	"updateAt": "Date"
    }
    ```
- **Error Responses:**
    - `400` - Invalid input data
    - `401` - Unauthorized
    - `500` - Server error

### Update Research Area

- **Method:** PUT
- **Path:** `/api/researchArea/updateResearchArea`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
    	"id": "number",
    	"name": "string",
    	"description": "string",
    	"imageURL": "string"
    }
    ```
- **Success Response (200):**
    ```json
    {
    	"id": "number",
    	"name": "string",
    	"description": "string",
    	"imageURL": "string",
    	"createdAt": "Date",
    	"updateAt": "Date"
    }
    ```
- **Error Responses:**
    - `400` - Invalid input data
    - `401` - Unauthorized
    - `404` - Research area not found
    - `500` - Server error

### Delete Research Area

- **Method:** DELETE
- **Path:** `/api/researchArea/deleteResearchArea`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
    	"id": "number"
    }
    ```
- **Success Response (200):**
    ```json
    {
    	"message": "Research area deleted successfully"
    }
    ```
- **Error Responses:**
    - `401` - Unauthorized
    - `404` - Research area not found
    - `500` - Server error

### Get Research Area

- **Method:** GET
- **Path:** `/api/researchArea/getResearchArea`
- **Auth Required:** No
- **Query Parameters:**
    - `id`: number
- **Success Response (200):**
    ```json
    {
    	"id": "number",
    	"name": "string",
    	"description": "string",
    	"imageURL": "string",
    	"createdAt": "Date",
    	"updateAt": "Date"
    }
    ```
- **Error Responses:**
    - `404` - Research area not found
    - `500` - Server error

### Get All Research Areas

- **Method:** GET
- **Path:** `/api/researchArea/getReasearchAreas`
- **Auth Required:** No
- **Success Response (200):**
    ```json
    {
    	"data": [
    		{
    			"id": "number",
    			"name": "string",
    			"description": "string",
    			"imageURL": "string",
    			"createdAt": "Date",
    			"updateAt": "Date"
    		}
    	]
    }
    ```
- **Error Responses:**
    - `500` - Server error

## Research Facility Routes

Base path: `/api/researchFacility`

### Create Research Facility

- **Method:** POST
- **Path:** `/api/researchFacility/createResearchFacility`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
    	"name": "string",
    	"description": "string",
    	"imageURL": "string (optional)"
    }
    ```
- **Success Response (201):**
    ```json
    {
    	"id": "number",
    	"name": "string",
    	"description": "string",
    	"imageURL": "string (optional)",
    	"createdAt": "Date",
    	"updateAt": "Date"
    }
    ```
- **Error Responses:**
    - `400` - Invalid input data
    - `401` - Unauthorized
    - `500` - Server error

### Update Research Facility

- **Method:** PUT
- **Path:** `/api/researchFacility/updateResearchFacility`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
    	"id": "number",
    	"name": "string",
    	"description": "string",
    	"imageURL": "string (optional)"
    }
    ```
- **Success Response (200):**
    ```json
    {
    	"id": "number",
    	"name": "string",
    	"description": "string",
    	"imageURL": "string (optional)",
    	"createdAt": "Date",
    	"updateAt": "Date"
    }
    ```
- **Error Responses:**
    - `400` - Invalid input data
    - `401` - Unauthorized
    - `404` - Research facility not found
    - `500` - Server error

### Delete Research Facility

- **Method:** DELETE
- **Path:** `/api/researchFacility/deleteResearchFacility`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
    	"id": "number"
    }
    ```
- **Success Response (200):**
    ```json
    {
    	"message": "Research facility deleted successfully"
    }
    ```
- **Error Responses:**
    - `401` - Unauthorized
    - `404` - Research facility not found
    - `500` - Server error

### Get Research Facility

- **Method:** GET
- **Path:** `/api/researchFacility/getResearchFacility`
- **Auth Required:** No
- **Query Parameters:**
    - `id`: number
- **Success Response (200):**
    ```json
    {
    	"id": "number",
    	"name": "string",
    	"description": "string",
    	"imageURL": "string (optional)",
    	"createdAt": "Date",
    	"updateAt": "Date"
    }
    ```
- **Error Responses:**
    - `404` - Research facility not found
    - `500` - Server error

### Get All Research Facilities

- **Method:** GET
- **Path:** `/api/researchFacility/getReasearchFacilities`
- **Auth Required:** No
- **Success Response (200):**
    ```json
    {
    	"data": [
    		{
    			"id": "number",
    			"name": "string",
    			"description": "string",
    			"imageURL": "string (optional)",
    			"createdAt": "Date",
    			"updateAt": "Date"
    		}
    	]
    }
    ```
- **Error Responses:**
    - `500` - Server error

## Recent Updates Routes

Base path: `/api/recentUpdate`

### Create Recent Update

- **Method:** POST
- **Path:** `/api/recentUpdate/create`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
    	"update": "string",
    	"description": "string",
    	"link": "string (optional)",
    	"date": "string"
    }
    ```
- **Success Response (201):**
    ```json
    {
    	"id": "number",
    	"update": "string",
    	"description": "string",
    	"link": "string (optional)",
    	"date": "string",
    	"createdAt": "Date"
    }
    ```
- **Error Responses:**
    - `400` - Invalid input data
    - `401` - Unauthorized
    - `500` - Server error

### Delete Recent Update

- **Method:** DELETE
- **Path:** `/api/recentUpdate/delete`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
    	"id": "number"
    }
    ```
- **Success Response (200):**
    ```json
    {
    	"message": "Recent update deleted successfully"
    }
    ```
- **Error Responses:**
    - `401` - Unauthorized
    - `404` - Recent update not found
    - `500` - Server error

### Get All Recent Updates

- **Method:** GET
- **Path:** `/api/recentUpdate/getrecentUpdates`
- **Auth Required:** No
- **Success Response (200):**
    ```json
    {
    	"data": [
    		{
    			"id": "number",
    			"update": "string",
    			"description": "string",
    			"link": "string (optional)",
    			"date": "string",
    			"createdAt": "Date"
    		}
    	]
    }
    ```
- **Error Responses:**
    - `500` - Server error

## Highlights Routes

Base path: `/api/highlight`

### Create Highlight

- **Method:** POST
- **Path:** `/api/highlight/create`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
    	"highlight": "string",
    	"description": "string",
    	"link": "string (optional)",
    	"date": "string"
    }
    ```
- **Success Response (201):**
    ```json
    {
    	"id": "number",
    	"highlight": "string",
    	"description": "string",
    	"link": "string (optional)",
    	"date": "string",
    	"createdAt": "Date"
    }
    ```
- **Error Responses:**
    - `400` - Invalid input data
    - `401` - Unauthorized
    - `500` - Server error

### Delete Highlight

- **Method:** DELETE
- **Path:** `/api/highlight/delete`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
    	"id": "number"
    }
    ```
- **Success Response (200):**
    ```json
    {
    	"message": "Highlight deleted successfully"
    }
    ```
- **Error Responses:**
    - `401` - Unauthorized
    - `404` - Highlight not found
    - `500` - Server error

### Get All Highlights

- **Method:** GET
- **Path:** `/api/highlight/getHighlights`
- **Auth Required:** No
- **Success Response (200):**
    ```json
    {
    	"data": [
    		{
    			"id": "number",
    			"highlight": "string",
    			"description": "string",
    			"link": "string (optional)",
    			"date": "string",
    			"createdAt": "Date"
    		}
    	]
    }
    ```
- **Error Responses:**
    - `500` - Server error

## Health Check

- **Method:** GET
- **Path:** `/health`
- **Auth Required:** No
- **Success Response (200):**
    ```json
    {
    	"message": "healthy",
    	"data": {}
    }
    ```
- **Error Responses:**
    - `500` - Server error

## Publications Routes

### Book Routes

Base path: `/api/book`

#### Create Book
- **Method:** POST
- **Path:** `/api/book/create`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
      "title": "string",
      "authors": ["number"],
      "publisher": "string (optional)",
      "scopus": "string (optional)",
      "doi": "string (optional)",
      "isbn": "string (optional)",
      "year": "number"
    }
    ```
- **Success Response (201):**
    ```json
    { "book": { /* book object */ } }
    ```
- **Error Responses:**
    - `400` - Missing required fields
    - `401` - Unauthorized
    - `500` - Server error

#### Get All Books
- **Method:** GET
- **Path:** `/api/book/get-all`
- **Auth Required:** No
- **Success Response (200):**
    ```json
    { "books": [ /* array of book objects */ ] }
    ```
- **Error Responses:**
    - `500` - Server error

#### Get Book By ID
- **Method:** GET
- **Path:** `/api/book/:id`
- **Auth Required:** No
- **Success Response (200):**
    ```json
    { "book": { /* book object */ } }
    ```
- **Error Responses:**
    - `404` - Book not found
    - `500` - Server error

#### Update Book
- **Method:** PUT
- **Path:** `/api/book/:id`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
      "title": "string",
      "authors": ["number"],
      "publisher": "string (optional)",
      "scopus": "string (optional)",
      "doi": "string (optional)",
      "isbn": "string (optional)",
      "year": "number"
    }
    ```
- **Success Response (200):**
    ```json
    { "book": { /* updated book object */ } }
    ```
- **Error Responses:**
    - `404` - Book not found
    - `500` - Server error

#### Delete Book
- **Method:** DELETE
- **Path:** `/api/book/:id`
- **Auth Required:** Yes
- **Success Response (200):**
    ```json
    { "book": { /* deleted book object */ } }
    ```
- **Error Responses:**
    - `404` - Book not found
    - `500` - Server error

#### Get All Books By User ID
- **Method:** POST
- **Path:** `/api/book/get-all-by-user-id`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    { "userId": "number" }
    ```
- **Success Response (200):**
    ```json
    { "books": [ /* array of book objects */ ] }
    ```
- **Error Responses:**
    - `404` - No books found for this user
    - `500` - Server error

---

### Book Chapter Routes

Base path: `/api/book-chapter`

#### Create Book Chapter
- **Method:** POST
- **Path:** `/api/book-chapter/create`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
      "chapterTitle": "string",
      "bookTitle": "string",
      "authors": ["number"],
      "scopus": "string (optional)",
      "doi": "string (optional)",
      "publisher": "string",
      "year": "number"
    }
    ```
- **Success Response (201):**
    ```json
    { "bookChapter": { /* book chapter object */ } }
    ```
- **Error Responses:**
    - `400` - Missing required fields
    - `401` - Unauthorized
    - `500` - Server error

#### Get All Book Chapters
- **Method:** GET
- **Path:** `/api/book-chapter/get-all`
- **Auth Required:** No
- **Success Response (200):**
    ```json
    { "bookChapters": [ /* array of book chapter objects */ ] }
    ```
- **Error Responses:**
    - `500` - Server error

#### Get Book Chapter By ID
- **Method:** GET
- **Path:** `/api/book-chapter/:id`
- **Auth Required:** No
- **Success Response (200):**
    ```json
    { "bookChapter": { /* book chapter object */ } }
    ```
- **Error Responses:**
    - `404` - Book chapter not found
    - `500` - Server error

#### Update Book Chapter
- **Method:** PUT
- **Path:** `/api/book-chapter/:id`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
      "chapterTitle": "string",
      "bookTitle": "string",
      "authors": ["number"],
      "scopus": "string (optional)",
      "doi": "string (optional)",
      "publisher": "string",
      "year": "number"
    }
    ```
- **Success Response (200):**
    ```json
    { "bookChapter": { /* updated book chapter object */ } }
    ```
- **Error Responses:**
    - `404` - Book chapter not found
    - `500` - Server error

#### Delete Book Chapter
- **Method:** DELETE
- **Path:** `/api/book-chapter/:id`
- **Auth Required:** Yes
- **Success Response (200):**
    ```json
    { "bookChapter": { /* deleted book chapter object */ } }
    ```
- **Error Responses:**
    - `404` - Book chapter not found
    - `500` - Server error

#### Get All Book Chapters By User ID
- **Method:** POST
- **Path:** `/api/book-chapter/get-all-by-user-id`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    { "userId": "number" }
    ```
- **Success Response (200):**
    ```json
    { "bookChapters": [ /* array of book chapter objects */ ] }
    ```
- **Error Responses:**
    - `404` - No book chapters found for this user
    - `500` - Server error

---

### Conference Paper Routes

Base path: `/api/conference-paper`

#### Create Conference Paper
- **Method:** POST
- **Path:** `/api/conference-paper/create`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
      "title": "string",
      "authors": ["number"],
      "conference": "string",
      "location": "string",
      "year": "number",
      "pages": "string",
      "indexing": "string",
      "doi": "string"
    }
    ```
- **Success Response (201):**
    ```json
    { "conferencePaper": { /* conference paper object */ } }
    ```
- **Error Responses:**
    - `400` - Missing required fields
    - `401` - Unauthorized
    - `500` - Server error

#### Get All Conference Papers
- **Method:** GET
- **Path:** `/api/conference-paper/get-all`
- **Auth Required:** No
- **Success Response (200):**
    ```json
    { "conferencePapers": [ /* array of conference paper objects */ ] }
    ```
- **Error Responses:**
    - `500` - Server error

#### Get Conference Paper By ID
- **Method:** GET
- **Path:** `/api/conference-paper/:id`
- **Auth Required:** No
- **Success Response (200):**
    ```json
    { "conferencePaper": { /* conference paper object */ } }
    ```
- **Error Responses:**
    - `404` - Conference paper not found
    - `500` - Server error

#### Update Conference Paper
- **Method:** PUT
- **Path:** `/api/conference-paper/:id`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    {
      "title": "string",
      "authors": ["number"],
      "conference": "string",
      "location": "string",
      "year": "number",
      "pages": "string",
      "indexing": "string",
      "doi": "string"
    }
    ```
- **Success Response (200):**
    ```json
    { "conferencePaper": { /* updated conference paper object */ } }
    ```
- **Error Responses:**
    - `404` - Conference paper not found
    - `500` - Server error

#### Delete Conference Paper
- **Method:** DELETE
- **Path:** `/api/conference-paper/:id`
- **Auth Required:** Yes
- **Success Response (200):**
    ```json
    { "conferencePaper": { /* deleted conference paper object */ } }
    ```
- **Error Responses:**
    - `404` - Conference paper not found
    - `500` - Server error

#### Get All Conference Papers By User ID
- **Method:** POST
- **Path:** `/api/conference-paper/get-all-by-user-id`
- **Auth Required:** Yes
- **Request Body:**
    ```json
    { "userId": "number" }
    ```
- **Success Response (200):**
    ```json
    { "conferencePapers": [ /* array of conference paper objects */ ] }
    ```
- **Error Responses:**
    - `404` - No conference papers found for this user
    - `500` - Server error

// ... (continue with Journal Paper, Patent, Project, Photo Gallery, and any missing endpoints)
