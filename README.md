# 📝 ToDo List API (NestJS + TypeScript)

This is a task management API (ToDo List) built with NestJS and TypeScript, using memory storage.

Endpoints:

- GET /tasks: list all tasks

- POST /tasks: create a new task (with title and description)

- PATCH /tasks/:id: mark a task as completed

- DELETE /tasks/:id: remove a task

Functional requirements:

Each task must contain: id, title, description, completed (boolean), status, and createdAt

The storage can be in-memory

---

## **How to run the project**

```bash
# Install dependencies
npm install

# Start the server
npm run start
```

The API will be available at:

```
http://localhost:3000
```

You can also access the Swagger documentation at:

```
http://localhost:3000/api
```

---

## **Available routes**

### 🔹 `GET /tasks`

Lists all registered tasks.

---

### 🔹 `POST /tasks`

Creates a new task.

📝 **Example body:**

```json
{
  "title": "Title",
  "description": "Description"
}
```

---

### 🔹 `PATCH /tasks/:id`

Updates the status of a task (marking it as done or pending).

📝 **Example body:**

```json
{
  "completed": true
}
```

---

### 🔹 `DELETE /tasks/:id`

Removes a task by the ID.

---

## **Tests**

The project includes **unit tests** for the `TasksService` and `TasksController`:

✅ **TasksService**

✅ **TasksController**

### How to run the tests:

```bash
npm run test
```

---

## 👨‍💻 **Technologies**

* [NestJS](https://nestjs.com/)
* TypeScript
* Jest (unit testing)

---

## 📂 **Folder structure**

```
src/
 └── tasks/
      ├── dto/
      ├── entities/
      ├── tasks.controller.ts
      ├── tasks.controller.spec.ts
      ├── tasks.service.ts
      ├── tasks.service.spec.ts
      ├── tasks.module.ts
```

---
