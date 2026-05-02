# Task Manager API

A simple RESTful API built using Express.js to manage tasks.
This project demonstrates CRUD operations (Create, Read, Update, Delete) using in-memory data storage.

---

## Features

* Create, read, update, and delete tasks
* Input validation and error handling
* RESTful API design
* In-memory data storage (no database)

---

##  Setup Instructions

1. Clone the repository

```bash
git clone <your-repo-url>
cd task-manager-api
```

2. Install dependencies

```bash
npm install
```

3. Run the server

```bash
node app.js
```

Or (if using nodemon):

```bash
npm run dev
```

Server will start at:

```
http://localhost:3000
```

---

## API Endpoints

###  GET /tasks

Get all tasks

**Response:**

```json
[
  {
    "id": 1,
    "title": "Task title",
    "description": "Task description",
    "completed": false
  }
]
```

---

###  GET /tasks/:id

Get a task by ID

**Success Response:**

```json
{
  "id": 1,
  "title": "Task title",
  "description": "Task description",
  "completed": false
}
```

**Error Response:**

```json
{
  "message": "Task not found"
}
```

---

###  POST /tasks

Create a new task

**Request Body:**

```json
{
  "title": "New Task",
  "description": "Task description",
  "completed": false
}
```

**Response:**

```json
{
  "id": 2,
  "title": "New Task",
  "description": "Task description",
  "completed": false
}
```

**Validation Rules:**

* `title` and `description` are required
* `title` and `description` must be non-empty strings

---

###  PUT /tasks/:id

Update an existing task (partial updates allowed)

**Request Body (any of the following fields):**

```json
{
  "title": "Updated Task",
  "description": "Updated description",
  "completed": true
}
```

**Response:**

```json
{
  "id": 1,
  "title": "Updated Task",
  "description": "Updated description",
  "completed": true
}
```

**Validation Rules:**

* `completed` must be a boolean if provided
* Other fields are optional but should be valid strings if included

---

###  DELETE /tasks/:id

Delete a task

**Response:**

```json
{
  "message": "Task deleted"
}
```

**Error Response:**

```json
{
  "message": "Task not found"
}
```

---

## Validation & Error Handling

* Returns `400 Bad Request` for invalid input
* Returns `404 Not Found` for non-existent task IDs
* `completed` field must be a boolean when updating
* `title` and `description` are trimmed before storing


---

## Notes

* Data is stored in-memory and resets when the server restarts
* This project is intended for learning and demonstration purposes

---
