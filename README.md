# 📝 Full Stack Todo App

This is a **Full Stack Todo Application** built with **Spring Boot (Backend)** and **React (Frontend)**.  
It supports full CRUD operations with description and completed status.

---

## 🚀 Features

✔ Add tasks with description  
✔ Edit tasks  
✔ Mark tasks as completed  
✔ Delete tasks  
✔ REST API using Spring Boot  
✔ H2 In-Memory Database  
✔ Clean and simple React UI  

---

## 📁 Project Structure

```
todo-fullstack/
├── backend/     # Spring Boot API
└── frontend/    # React App
```

---

## 🛠 Tech Stack

### Backend
- Spring Boot
- Spring Data JPA
- H2 Database
- Lombok

### Frontend
- React
- Axios

---

## 📌 Running Locally

### 🔹 Backend

```bash
cd backend
./mvnw spring-boot:run
```

Runs at:
http://localhost:8080

---

### 🔹 Frontend

```bash
cd frontend
npm install
npm start
```

Runs at:
http://localhost:3000

---

## 📍 API Endpoints

| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| GET    | `/api/todos`          | Get all todos       |
| POST   | `/api/todos`          | Create new todo     |
| PUT    | `/api/todos/{id}`     | Update existing todo|
| DELETE | `/api/todos/{id}`     | Delete todo         |

---

---

## 📸 Application Screenshots

### 🔹 Frontend UI

![Todo UI](images/ui.png)

---

### 🔹 Get All Todos (Browser)

![Get Todos](images/backend.png)

---

### 🔹 Create Todo (POST - Postman)

![Create Todo](images/createtodoapi.png)

---

### 🔹 Update Todo (PUT - Postman)

![Update Todo](images/updatetodo.jpg)

---

### 🔹 Get All Todos (GET - Postman)

![Get All](images/Getallapi.jpg)

---

### 🔹 Delete Todo (DELETE - Postman)

![Delete Todo](images/deletetodo.jpg)

---


## 💡 Notes

✔ H2 database resets on restart  
✔ Backend runs on port 8080  
✔ Frontend runs on port 3000  

---

## 🙌 Author

**Adith Singh**  
Full Stack Developer (B.Tech AI & ML)
