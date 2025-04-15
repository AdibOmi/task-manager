# Task Manager - MERN Stack Application  

This is a Task Manager application built with the MERN stack (MongoDB, Express.js, React, and Node.js). Follow the steps below to set up and run the project locally on **macOS** or **Windows**.  

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
- **`frontend/`** (Frontend - React)  

Install dependencies for both:  

#### Backend (Server) Setup  

```bash
cd backend
npm install
```

#### Frontend (Client) Setup  

```bash
cd frontend
cd Task-Manager
npm install
```

### 3. Configure Environment Variables  

#### Backend (Server)  

Create a `.env` file in the `server/` directory with the following:  

```env
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
JWT_SECRET=eb00b4cee96fbfdb615c0ce076b1fa802da07a70d380f7fa4fff83c1d98316937f149c7a5e9857c60bb18c1529ac770bef5d696bb8c64198468db07fbaf0dbe9
ADMIN_INVITE_TOKEN=4588944
PORT=8000
```

- Use `MONGODB_URI` with your MongoDB connection string (local or cloud-based).  
  
#### Frontend (Client)  

Create a `4588944` as Admin Invite Token to Sign Up as Admin  

```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

- This ensures the frontend communicates with the backend.  

### 4. Start MongoDB  

Ensure MongoDB is running locally or provide a cloud-based connection string.  

#### For Local MongoDB (macOS/Linux)

```bash
mongod
```

(Keep this running in a separate terminal.)  

#### For Windows  

- Start MongoDB from **Services** or run:  

```bash
mongod
```

### 5. Run the Application  

#### Start the Backend (Server)  

```bash
cd server
npm start
```

(The server will run on `http://localhost:5000`.)  

#### Start the Frontend (Client)  

```bash
cd ../client
npm start
```

(The React app will open in your browser at `http://localhost:3000`.)  

---

## Running with Docker (Optional)  

If you have **Docker** installed, you can run the entire stack in containers:  

1. Ensure Docker is running.  
2. From the project root, run:  

   ```bash
   docker-compose up --build
   ```

3. Access:  
   - Frontend: `http://localhost:3000`  
   - Backend: `http://localhost:5000`  

---

## Testing  

To run tests (if available):  

### Backend Tests  

```bash
cd server
npm test
```

#### Frontend Tests  

```bash
cd client
npm test
```

---

## Troubleshooting  

- **MongoDB Connection Issues**:  
  - Ensure MongoDB is running (`mongod`).  
  - If using **MongoDB Atlas**, check the connection string in `.env`.  

- **Port Conflicts**:  
  - Change `PORT` in `.env` if `5000` or `3000` is occupied.  

- **Missing Dependencies**:  
  - Delete `node_modules` and re-run `npm install`.  

---

## License  

This project is open-source.  

---

## Support  

For issues or questions, please open an issue in the repository.  

Happy coding! 🚀
