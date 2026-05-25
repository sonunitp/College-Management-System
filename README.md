# College Management System

A full-stack **College Management System (CMS)** built with the MERN stack. It centralizes day-to-day academic and administrative work for **students**, **faculty**, and **admins** in one web application.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-7-47A248?logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)

---

## Features

### Admin
- Dashboard with student/faculty counts
- Manage admins, faculty, and students (CRUD)
- Branches and subjects
- Notices and feedback forms
- Profile management with image upload

### Faculty
- Mark and view student attendance
- Upload marks, materials, curriculum, and timetable
- Manage notices
- View assigned students
- Profile and password updates

### Student
- View timetable, marks, attendance, and notices
- Access study material and curriculum
- Submit assignments and feedback
- Personal profile dashboard

---

## Tech stack

| Layer | Technologies |
|-------|----------------|
| **Frontend** | React 18, Redux, React Router, Tailwind CSS, Axios, Chart.js |
| **Backend** | Node.js, Express.js, Mongoose, Multer, Bcrypt |
| **Database** | MongoDB |
| **Auth** | Role-based login (Admin / Faculty / Student), bcrypt password hashing |

---

## Project structure

```
College-Management-System/
├── backend/
│   ├── controllers/     # Route handlers (Admin, Faculty, Student, Other)
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express API routes
│   ├── Database/        # MongoDB connection
│   ├── middlewares/     # Multer file uploads
│   ├── admin-seeder.js  # Seed default admin user
│   └── index.js         # Express app entry
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/  # Login, Navbar, shared UI
│       ├── Screens/     # Admin, Faculty, Student pages
│       └── redux/       # Global state
└── README.md
```

---

## Prerequisites

- **Node.js** 18+ and npm
- **MongoDB** 6+ (local install or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/sonunitp/College-Management-System.git
cd college-management-system
```

### 2. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3. Environment variables

**Backend** — copy the example file and edit as needed:

```bash
cp backend/.env.example backend/.env
```

```env
# backend/.env
MONGODB_URI=mongodb://127.0.0.1:27017/cms_college_management
FRONTEND_API_LINK=http://localhost:3000
PORT=5001
```

**MongoDB Atlas example:**

```env
MONGODB_URI=mongodb+srv://USER:PASSWORD@cluster0.xxxxx.mongodb.net/cms_college_management?retryWrites=true&w=majority
```

**Frontend** — create `frontend/.env`:

```env
REACT_APP_APILINK=http://localhost:5001/api
REACT_APP_MEDIA_LINK=http://localhost:5001/media
```

> The `/api` prefix is required — all backend routes are mounted under `/api`.

**Optional — email OTP for login** (if not set, login works without OTP in development):

```env
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_app_password
```

### 4. Start MongoDB (local)

```bash
# macOS (Homebrew)
brew services start mongodb/brew/mongodb-community@7.0
```

### 5. Seed the database

Creates a default admin account:

```bash
cd backend
npm run seed
```

| Role  | Login ID | Password   |
|-------|----------|------------|
| Admin | `123456` | `admin123` |

### 6. Run the application

Use **two terminals**:

```bash
# Terminal 1 — API (port 5001)
cd backend
npm start
# or: npm run dev   (with nodemon)

# Terminal 2 — UI (port 3000)
cd frontend
npm start
```

Open [http://localhost:3000](http://localhost:3000), select **Admin**, and sign in with the credentials above.

Verify the API: [http://localhost:5001](http://localhost:5001) → `Hello 👋 I am Working Fine 🚀`

---

## API overview

Base URL: `http://localhost:5001/api`

| Module | Endpoints |
|--------|-----------|
| Auth | `/admin/auth`, `/faculty/auth`, `/student/auth` |
| Profiles | `/admin/details`, `/faculty/details`, `/student/details` |
| Academics | `/branch`, `/subject`, `/timetable`, `/material`, `/marks`, `/attendance` |
| Content | `/notice`, `/assignments` |
| Feedback | `/admin/feedback`, `/student/feedback` |

Static uploads: `http://localhost:5001/media/<filename>`

---

## Available scripts

### Backend (`backend/`)

| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start with nodemon (auto-reload) |
| `npm run seed` | Reset and seed default admin |

### Frontend (`frontend/`)

| Command | Description |
|---------|-------------|
| `npm start` | Development server |
| `npm run build` | Production build |
| `npm test` | Run tests |

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `EADDRINUSE` on port 3000 or 5001 | Stop the old process: `kill $(lsof -t -i:3000)` or `kill $(lsof -t -i:5001)` |
| Login fails / network error | Ensure `REACT_APP_APILINK` includes `/api` and the backend is running |
| MongoDB connection error | Check `MONGODB_URI` and that MongoDB is running |
| Wrong credentials after clone | Run `npm run seed` in `backend/` again |

---

## Future improvements

- [ ] JWT-based session tokens
- [ ] Fee management module
- [ ] Email OTP flow in production
- [ ] Docker Compose for one-command setup
- [ ] Unit and integration tests

---

## License

ISC

---

## Author

Built as a MERN stack college administration project.
  