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
    "email": "string",
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
    "token": "string",
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
    "profileImage": "string (optional)",
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

## Image Routes
Base path: `/api/image`

### Upload Image
- **Method:** POST
- **Path:** `/api/image/uploadURL`
- **Auth Required:** Yes
- **Request Body (multipart/form-data):**
  ```json
  {
    "image": "File"
  }
  ```
- **Success Response (201):**
  ```json
  {
    "url": "string"
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
    "url": "string"
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