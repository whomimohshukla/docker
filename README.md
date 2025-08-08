# Dockerized Node.js App

This is a simple **Node.js + Express** application packaged with Docker.  
It demonstrates how to containerize a backend API, run it locally, and map host ports to container ports.

---

## 🚀 Features
- RESTful API with Express
- Modular routing and controllers
- Dockerfile for easy containerization
- Nodemon for automatic reloads in development
- Port mapping for flexible host access

---

## 🛠 Technologies Used
- **Node.js** (v20)
- **Express.js**
- **Nodemon** (development only)
- **Docker**

---

## 📂 Project Structure
```
.
├── controllers/
│   └── userController.js   # Handles user-related logic
├── models/                 # (Add your DB models here)
├── routes/
│   └── user.js              # User-related API routes
├── index.js                 # App entry point
├── package.json
├── Dockerfile               # Docker build configuration
└── README.md
```

---

## ⚙️ Installation & Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/whomimohshukla/docker.git
   cd docker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally with Nodemon**
   ```bash
   npm run dev
   ```
   The server will start at:
   ```
   http://localhost:3000
   ```

---

## 🐳 Running with Docker

### 1️⃣ Build the image
```bash
docker build -t my-node-app .
```

### 2️⃣ Run the container

Map **port 3000 in container** to **port 3000 on host**:
```bash
docker run -p 3000:3000 my-node-app
```
Now visit:
```
http://localhost:3000
```

Or map container’s port 3000 to a different host port (e.g., 8000):
```bash
docker run -p 8000:3000 my-node-app
```
Visit:
```
http://localhost:8000
```

---

## 📡 Example API Endpoints

| Method | Endpoint   | Description         |
|--------|------------|---------------------|
| GET    | `/users`   | Get all users       |
| POST   | `/users`   | Create a new user   |

*(Update this table as you add more endpoints)*

---

## 🧹 Cleaning Up Docker
Remove stopped containers:
```bash
docker container prune
```
Remove unused images:
```bash
docker image prune
```

---

## 📜 License
This project is licensed under the **MIT License** — feel free to use and modify it.
