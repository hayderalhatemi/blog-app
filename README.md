# Blog App

A full stack blog application with JWT authentication built with Node.js, Express, TypeScript, React, and MongoDB.

## Live Demo

- Frontend: https://blog-app-phi-weld.vercel.app
- Backend API: https://blog-app-nrg6.onrender.com

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

## Deployment

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

## Project Structure

```text
blog-app/
├── backend/
│   ├── src/
│   └── package.json
├── frontend/
│   ├── src/
│   └── package.json
└── README.md
```

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

## Environment Variables

Create a `.env` file in the `backend/` folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/blogapp
JWT_SECRET=your_secret_key
```

## API Endpoints

| Method | Endpoint | Access |
|--------|----------|--------|
| POST   | /api/auth/register | Public |
| POST   | /api/auth/login    | Public |
| GET    | /api/posts         | Public |
| POST   | /api/posts         | Protected |
| DELETE | /api/posts/:id     | Protected (author only) |

## Future Improvements

- Edit existing posts
- User profile page
- Comments system
- Image upload for posts
- Search functionality
- Pagination