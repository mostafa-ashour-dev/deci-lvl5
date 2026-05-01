# Docker Compose Multi-Service App

## 👋 About

This project demonstrates running multiple services using Docker Compose.

---

## ⚠️ Important

Make sure **Docker Desktop is running** before executing any commands.

---

## 🚀 How to Run

1. Build and start services:

```bash
docker compose up --build -d
```

2. Stop services:

```bash
docker compose down
```

3. View logs:

```bash
docker compose logs -f
```

---

## 📦 Services

* Backend (Node.js / Express)
* Database (MongoDB or any used DB)

---

## 🌐 Access

* API: http://localhost:3000/api/v1
* DB: runs internally via Docker network

---

## 📌 Notes

* First run may take time due to image build
* Use `--build` if you made changes to Dockerfile
