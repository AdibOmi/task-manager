# Task Manager - MERN Stack Application

This is a Task Manager application built with the MERN stack (MongoDB, Express.js, React, and Node.js). Follow the steps below to set up and run the project locally on **macOS** or **Windows**.

## Admin Sign-Up

Signing up as an admin requires using the `ADMIN_INVITE_TOKEN`, which is set as `4588944` in the `.env` file located in the `task-manager/backend/` directory. This token grants admin privileges, allowing the user to assign tasks to other users.  
**Note:** Signing up without using the `4588944` token will automatically register the user as a general user without admin access.

## User Requirements

To perform task assignments and utilize CRUD features (Create, Read, Update, Delete), as well as other functionalities, more than one user must be logged in.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v16 or later) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **Yarn** (optional)
- **MongoDB** (local or cloud-based) - [Download MongoDB](https://www.mongodb.com/try/download/community)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AdibOmi/task-manager.git
cd task-manager
```

### 2. Install Dependencies

The project has two main directories:

- **`backend/`** (Backend - Node.js & Express)
- **`frontend/Task-Manager/`** (Frontend - React)

Install dependencies for both:

#### Backend (Server) Setup

```bash
cd backend
npm install
```

#### Frontend (Client) Setup

```bash
cd ../frontend/Task-Manager
npm install
```

### 3. Configure Environment Variables

The `.env` file has already been created inside the `backend/` directory, as shown below:

```env
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
JWT_SECRET=eb00b4cee96fbfdb615c0ce076b1fa802da07a70d380f7fa4fff83c1d98316937f149c7a5e9857c60bb18c1529ac770bef5d696bb8c64198468db07fbaf0dbe9
ADMIN_INVITE_TOKEN=4588944
PORT=8000
```

> ✅ Use `4588944` as Admin Invite Token to sign up as Admin.

---

## 4. Start MongoDB

### 🖥 macOS

```bash
# 1. Create the local data directory (only once)
mkdir -p ~/data/db

# 2. Start MongoDB with the custom data path
mongod --dbpath ~/data/db
```

> 💡 Keep this terminal open so MongoDB keeps running.

### 🪟 Windows

Start MongoDB via **Services**, or run:

```bash
mongod
```

---

## 5. Run the Application

### Start the Backend (Server)

```bash
cd backend
npm run dev
```

> The server runs at: `http://localhost:8000`

### Start the Frontend (Client)

```bash
cd ../frontend/Task-Manager
npm run dev
```

> The React app runs at: `http://localhost:3000`

---

You're all set! 🎉
