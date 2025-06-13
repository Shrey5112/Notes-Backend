# 📝 Notes App – Backend (Express.js REST API)

This is a Node.js + Express backend that provides REST APIs to manage notes with basic in-memory storage.

---

## 🚀 Features

- RESTful API endpoints
- Create, read, update, and delete notes
- Supports timestamps for created and updated notes

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- CORS
- Body-Parser

---

## 📡 API Endpoints

| Method | Endpoint     | Description             |
|--------|--------------|-------------------------|
| GET    | `/notes`     | Get all notes           |
| GET    | `/notes/:id` | Get a single note       |
| POST   | `/notes`     | Add a new note          |
| PUT    | `/notes/:id` | Update an existing note |
| DELETE | `/notes/:id` | Delete a note           |

---

## 📦 Getting Started

### Clone the repository

```bash
git clone https://github.com/Shrey5112/Notes-Backend.git
cd Notes-Backend
npm install
node index.js
