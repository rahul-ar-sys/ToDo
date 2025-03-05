# 🚀 Dockerized Todo API Deployment

This project demonstrates how to deploy a **Node.js Todo API** with **MongoDB** using **Docker Compose**. The setup includes a multi-container architecture and can be deployed on a remote server using **Terraform, Ansible, and GitHub Actions CI/CD**.

---

## 📌 Features

- ✅ RESTful API for a simple Todo list.
- ✅ Uses **MongoDB** for data persistence.
- ✅ **Docker Compose** for containerized development.
- ✅ **Terraform & Ansible** for remote server setup.
- ✅ **GitHub Actions** for automated deployment.
- ✅ **Nginx Reverse Proxy** (Bonus).

---

## 📡 API Endpoints

| Method  | Endpoint      | Description                   |
|---------|--------------|------------------------------|
| `GET`   | `/todos`      | Fetch all todos             |
| `POST`  | `/todos`      | Create a new todo           |
| `GET`   | `/todos/:id`  | Fetch a todo by ID          |
| `PUT`   | `/todos/:id`  | Update a todo by ID         |
| `DELETE`| `/todos/:id`  | Delete a todo by ID         |

---

## 🛠 Tech Stack

- **Node.js + Express.js** - API development.
- **MongoDB** - NoSQL database.
- **Docker + Docker Compose** - Containerization.
- **Terraform** - Cloud infrastructure automation.
- **Ansible** - Server provisioning and configuration.
- **GitHub Actions** - CI/CD pipeline automation.
- **Nginx** - Reverse proxy for better request handling (Bonus).

---

## 🏗 Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/todo-api-docker.git
cd todo-api-docker
```

### 2️⃣ Run the API Locally with Docker Compose
```bash
docker-compose up --build
```

Your API will be accessible at:
🔗 http://localhost:4000

## 🌍 Deployment Steps
### 1️⃣ Setup a Remote Server
Use Terraform to provision the server:

```bash
cd infrastructure
terraform init
terraform apply
```

### 2️⃣ Configure the Server with Ansible
``` bash
ansible-playbook -i inventory setup.yml
```

### 3️⃣ Automate Deployment with GitHub Actions
Push your code to GitHub, and the CI/CD pipeline will:

Build and push Docker images.
Deploy the application to the server.
Restart containers using:
```bash
docker-compose up -d
```

### 🎯 Bonus: Setup Nginx Reverse Proxy
To access the API via http://your_domain.com instead of http://server_ip:4000, run:

```bash
docker-compose -f nginx-compose.yml up -d
```

### 📜 License
This project is open-source under the MIT License.

### 🤝 Contributing
Feel free to submit pull requests or open issues!

### 📞 Contact
##### Author: Rahul AR
##### 📧 Email: rahulanilrekha@gmail.com
##### 🔗 GitHub: rahul-ar-sys
##### 🚀 Happy Coding! 🎯

```vbnet

This README follows standard markdown best practices and looks good both on GitHub and other markdown 

```
