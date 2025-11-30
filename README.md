
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
