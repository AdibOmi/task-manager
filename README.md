# Task Manager - MERN Stack Application  

This is a Task Manager application built with the MERN stack (MongoDB, Express.js, React, and Node.js). Follow the steps below to set up and run the project locally on **macOS** or **Windows**.  

---

## Prerequisites  

Before running the project, ensure you have the following installed:  

- **Node.js** (v16 or later) - [Download Node.js](https://nodejs.org/)  
- **npm** (comes with Node.js) or **Yarn** (optional)  
- **MongoDB** (local or cloud-based) - [Download MongoDB](https://www.mongodb.com/try/download/community)  
  - Alternatively, use **MongoDB Atlas** (cloud-based)  

---

## Setup Instructions  

### 1. Clone the Repository  

```bash
git clone <your-repository-url>
cd task-manager-mern
```

### 2. Install Dependencies  

The project has two main directories:  
- **`server/`** (Backend - Node.js & Express)  
- **`client/`** (Frontend - React)  

Install dependencies for both:  

#### Backend (Server) Setup  

```bash
cd server
npm install
```

#### Frontend (Client) Setup  

```bash
cd ../client
npm install
```

### 3. Configure Environment Variables  

#### Backend (Server)  
Create a `.env` file in the `server/` directory with the following:  

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret_here
```
- Replace `MONGODB_URI` with your MongoDB connection string (local or cloud-based).  
- Replace `JWT_SECRET` with a strong secret key for authentication.  

#### Frontend (Client)  
Create a `.env` file in the `client/` directory with the following:  

```env
REACT_APP_API_BASE_URL=http://localhost:5000
```
- This ensures the frontend communicates with the backend.  

### 4. Start MongoDB  
Ensure MongoDB is running locally or provide a cloud-based connection string.  

#### For Local MongoDB (macOS/Linux):  
```bash
mongod
```
(Keep this running in a separate terminal.)  

#### For Windows:  
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

#### Backend Tests  
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