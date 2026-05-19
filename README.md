# Task Management Application 🚀

A full-stack task management web application built using **HTML, CSS, JavaScript, Node.js, Express.js, MongoDB Atlas, and JWT Authentication**.

This application allows users to securely register, login, and manage their daily tasks with a modern responsive UI.

---

# 🌐 Live Demo

## Frontend
https://task-manager-mu-roan.vercel.app

## Backend API
https://task-manager-backend-m1is.onrender.com

---

# ✨ Features

- 🔐 User Authentication & Authorization
- 📝 Create Tasks
- ✏️ Update Tasks
- ❌ Delete Tasks
- ✅ Mark Tasks as Completed
- 📱 Fully Responsive Design
- ☁️ MongoDB Atlas Cloud Database
- 🔒 JWT Secure Authentication
- 🚀 Deployed using Vercel & Render

---

# 🛠️ Tech Stack

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas

## Authentication
- JWT (JSON Web Token)
- bcryptjs

## Deployment
- Vercel
- Render

---

# 📂 Project Structure

```text
task-manager/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── vercel.json
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       ├── auth.js
│       └── dashboard.js
│
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/task-manager.git
```

---

# 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:8000
```

---

# 3️⃣ Frontend Setup

Open frontend using Live Server OR open `login.html`.

---

# 🔐 Authentication Flow

- User registers
- Password gets encrypted using bcryptjs
- JWT token generated on login
- Protected APIs accessible only with valid token

---

# 📱 Responsive Design

The application is optimized for:
- Desktop
- Tablets
- Mobile Devices

---

# 🚀 Deployment

## Frontend Deployment
- Vercel

## Backend Deployment
- Render

## Database Hosting
- MongoDB Atlas

---

# 📌 Future Improvements

- 🌙 Dark Mode
- 📅 Due Dates
- 🔔 Notifications
- 👥 Team Collaboration
- 📊 Task Analytics
- 🔄 Real-Time Updates using WebSockets
- 🎯 Priority Labels
- 📂 Categories & Filters

---

# 👨‍💻 Author

**Harshitha**

GitHub:
https://github.com/harshitha-n06

---

# 📜 License

This project is developed for learning and portfolio purposes.
