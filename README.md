# Blog App

![React](https://img.shields.io/badge/React-20232A?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![REST%20API](https://img.shields.io/badge/REST-API-blue)
![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-85EA2D?logo=swagger)
![Jest](https://img.shields.io/badge/Jest-Tested-C21325?logo=jest)
![Vitest](https://img.shields.io/badge/Vitest-Tested-6E9F18?logo=vitest)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7)
![Backend CI](https://img.shields.io/github/actions/workflow/status/hayderalhatemi/blog-app/backend-ci.yml?branch=main\&label=Backend%20CI\&logo=githubactions)
![Frontend CI](https://img.shields.io/github/actions/workflow/status/hayderalhatemi/blog-app/frontend-ci.yml?branch=main\&label=Frontend%20CI\&logo=githubactions)

A full-stack blog application with JWT authentication built with Node.js, Express, TypeScript, React, and MongoDB.

## Live Demo

* **Frontend:** https://blog-app-phi-weld.vercel.app
* **Backend API:** https://blog-app-nrg6.onrender.com

## Screenshots

### Home

<p align="center">
  <img src="./screenshots/home.png" alt="Home Page" width="700">
</p>

### Login

<p align="center">
  <img src="./screenshots/login.png" alt="Login Page" width="700">
</p>

### Posts

<p align="center">
  <img src="./screenshots/posts.png" alt="Posts Page" width="700">
</p>

## Features

* User registration and login with JWT authentication
* Create, read, and delete blog posts
* Protected routes — only logged-in users can create posts
* Authors can only delete their own posts
* Responsive navbar with authentication state
* Interactive Swagger/OpenAPI documentation
* Backend API testing with Jest and Supertest
* Frontend component testing with Vitest and React Testing Library
* Automated CI with GitHub Actions

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Router
* Axios
* Context API

### Backend

* Node.js
* Express
* TypeScript
* MongoDB
* Mongoose
* bcryptjs
* jsonwebtoken
* Swagger / OpenAPI

### Testing

* Jest
* Supertest
* MongoDB Memory Server
* Vitest
* React Testing Library

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas

### CI

* GitHub Actions

## Project Structure

```text
blog-app/
├── .github/
│   └── workflows/
│       ├── backend-ci.yml
│       └── frontend-ci.yml
├── backend/
│   ├── src/
│   ├── tests/
│   └── package.json
├── frontend/
│   ├── src/
│   └── package.json
└── README.md
```

## Architecture

```text
React Frontend
      │
      ▼
Axios (HTTP)
      │
      ▼
Express REST API
      │
      ▼
Mongoose
      │
      ▼
MongoDB Atlas
```

## API Documentation

Interactive Swagger/OpenAPI documentation:

* **Local:** http://localhost:5000/api-docs
* **Production:** https://blog-app-nrg6.onrender.com/api-docs

## Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    USER ||--o{ POST : creates

    USER {
        ObjectId _id
        string username
        string email
        string password
        date createdAt
        date updatedAt
    }

    POST {
        ObjectId _id
        string title
        string content
        ObjectId author
        date createdAt
        date updatedAt
    }
```

## UML Diagrams

### Use Case Diagram

The use case diagram shows the main actions available to visitors and authenticated users.

```mermaid
flowchart LR
    Guest((Visitor))
    User((Authenticated User))

    subgraph BlogApp["Blog App"]
        View([View Posts])
        Register([Register])
        Login([Login])
        Create([Create Post])
        Delete([Delete Own Post])
        Logout([Logout])
    end

    Guest --> View
    Guest --> Register
    Guest --> Login

    User --> View
    User --> Create
    User --> Delete
    User --> Logout
```

### Sequence Diagram — Create Post

The sequence diagram shows how an authenticated user creates a blog post.

```mermaid
sequenceDiagram
    actor User
    participant UI as React Frontend
    participant API as Express REST API
    participant Auth as JWT Auth Middleware
    participant Controller as Post Controller
    participant Model as Mongoose Post Model
    participant DB as MongoDB

    User->>UI: Enter post title and content
    User->>UI: Submit post
    UI->>API: POST /api/posts + JWT
    API->>Auth: Verify JWT
    Auth-->>API: Authenticated user
    API->>Controller: Create post
    Controller->>Model: Create post with author
    Model->>DB: Save post
    DB-->>Model: Post saved
    Model-->>Controller: Created post
    Controller-->>API: Return post
    API-->>UI: Created post response
    UI-->>User: Display new post
```

---

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/hayderalhatemi/blog-app.git
cd blog-app
```

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

## Testing

### Backend

Automated API tests using Jest, Supertest, and MongoDB Memory Server.

Run the tests:

```bash
cd backend
npm test
```

Generate a coverage report:

```bash
npm test -- --coverage
```

Current test coverage includes:

* Authentication API
* Posts API

### Frontend

Automated component tests using Vitest and React Testing Library.

Run the tests:

```bash
cd frontend
npm test
```

Generate a coverage report:

```bash
npm test -- --coverage
```

Current test coverage includes:

* Navbar component

## Continuous Integration

GitHub Actions automatically runs on every push and pull request to the `main` branch.

### Backend CI

* Prettier
* ESLint
* TypeScript type checking
* Jest + Supertest
* Production build

### Frontend CI

* Prettier
* ESLint
* TypeScript type checking
* Vitest
* Production build

## Environment Variables

### Backend (`backend/.env`)

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/blogapp
JWT_SECRET=your_secret_key
```

### Frontend

No environment variables are required for local development unless you want to override the default API URL.

## API Endpoints

| Method | Endpoint             | Access                  |
| ------ | -------------------- | ----------------------- |
| POST   | `/api/auth/register` | Public                  |
| POST   | `/api/auth/login`    | Public                  |
| GET    | `/api/posts`         | Public                  |
| POST   | `/api/posts`         | Protected               |
| DELETE | `/api/posts/:id`     | Protected (Author only) |

## Future Improvements

* Edit existing posts
* User profile page
* Comments system
* Image upload for posts
* Search functionality
* Pagination

## Contributing

Contributions, suggestions, and feedback are welcome. Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
