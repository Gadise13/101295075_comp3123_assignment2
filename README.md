<<<<<<< HEAD
📘 COMP3123 – Assignment 2 Employee Management System (React + Node + MongoDB + Docker)

Student: Gadise Oli Student ID: 1011295074

🚀 Overview

This project is a full-stack Employee Management System built with:

Backend: Node.js, Express, MongoDB, JWT, Multer

Frontend: ReactJS, Material-UI, Axios

Deployment: Docker Compose (frontend + backend + MongoDB)

The application includes authentication, full CRUD functionality, search, validation, and file uploads.

✨ Key Features 🔐 Authentication

User Signup

User Login

JWT-based Authorization

Protected frontend routes

👤 Employee Management

Add new employee

View employee details

Update employee

Delete employee

Upload employee profile picture

🔍 Search

Search employees by department

Search employees by position

Supports combined filtering

🎨 UI/UX

Built using Material-UI

Responsive, clean, user-friendly interface

🧪 REST API Endpoints Auth

POST /api/auth/signup

POST /api/auth/login

Employees

GET /api/employees

POST /api/employees

GET /api/employees/:id

PUT /api/employees/:id

DELETE /api/employees/:id

GET /api/employees/search

🐳 Run With Docker

Clone the repository git clonehttps://github.com/Gadise13/101295075_comp3123_assignment2.git cd 101295074_comp3123_assignment2

Start all services docker-compose up --build

Application URLs

Frontend: http://localhost:3000

Backend: http://localhost:5000/api

▶️ Run Without Docker Backend cd backend npm install npm start

Create .env:

PORT=5000 MONGO_URI=mongodb://localhost:27017/comp3123_assignment2 JWT_SECRET=yourSecretKey

Frontend cd frontend npm install npm start

Create .env:

REACT_APP_API_URL=http://localhost:5000/api

🧾 Validation

The app validates:

Required input fields

Email format

Password format

Missing fields

Invalid login/signup

Invalid employee fields

Both frontend and backend validations are implemented.

📸 Included Screenshots

The submission PDF contains the following:

MongoDB data

Postman API tests (Signup, Login, CRUD, Search)

Frontend CRUD UI pages

Search functionality

Form validation/error messages

Docker containers running

📦 ZIP Submission Notes

Remove:

node_modules (frontend + backend)

.git folders

Include:

All source code

docker-compose.yml

Dockerfiles

README.md

=======

# COMP3123 Assignment 2 – Full Stack App (React + Node.js + MongoDB)

**Student ID:** 101295074  
**Deployment:** Docker Compose

---

## Overview
Full-stack app with authentication, employee CRUD, search, and image upload. 

**Stack**: Node.js + Express + MongoDB (backend), React + TanStack Query + Axios + React Router (frontend), Bootstrap/MUI for styling.

## Run with Docker Compose
```bash
docker compose up --build
```
- Frontend: http://localhost:5173  
- Backend:  http://localhost:5000/api

## Environment
- Backend: copy `backend/.env.example` to `backend/.env` and adjust if needed.
- Frontend: copy `frontend/.env.example` to `frontend/.env` if you want to override `VITE_API_URL`.

## Local Development (optional)
### Backend
```bash
cd backend
npm install
npm run dev
```
### Frontend
```bash
cd frontend
npm install
npm run dev
```

## API Summary
- POST /api/signup
- POST /api/login
- GET /api/employees
- GET /api/employees/:id
- POST /api/employees  (multipart/form-data; field name `profileImage`)
- PUT  /api/employees/:id (multipart/form-data)
- DELETE /api/employees/:id
- GET /api/employees/search?department=IT&position=Developer

## Notes
- Auth via JWT; token stored in localStorage.
- Images served from `/uploads` path on backend.
- React Router + ProtectedRoute guards employee pages.
- TanStack Query manages data fetching and caching.
>>>>>>> 26bc769935998ff38e243144c7075a6b09b1d7a2
