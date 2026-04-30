# Blog App

A full stack blog application with JWT authentication built with Node.js, Express, TypeScript, React, and MongoDB.

## Features

- User registration and login with JWT authentication
- Create, read, and delete blog posts
- Protected routes — only logged-in users can create posts
- Authors can only delete their own posts
- Responsive navbar with auth state
- Clean CSS styling

## Tech Stack

**Backend:** Node.js, Express, TypeScript, MongoDB, Mongoose, bcryptjs, jsonwebtoken

**Frontend:** React, TypeScript, Vite, React Router, Axios, Context API

## Getting Started

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

### Environment Variables
Create a `.env` file in the `backend/` folder: