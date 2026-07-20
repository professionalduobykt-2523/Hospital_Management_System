# 🏥 Hospital Management System

A modern and responsive Hospital Management System built using **HTML, CSS, JavaScript, Node.js, Express.js, MongoDB Atlas, and Mongoose**. This project helps manage patient records through a clean dashboard with a simple and user-friendly interface.

The system allows users to register new patients, store data securely in MongoDB Atlas, view all patient records in a responsive table, and delete records instantly. It follows a REST API architecture and demonstrates complete CRUD (Create, Read, Update, Delete) operations using Express.js and Mongoose.

The project is designed for learning full-stack web development and showcases frontend design, backend development, database integration, and API handling in one application.

---

## ✨ Features

- 🩺 Register new patients
- 📋 View all patient records
- 🗑️ Delete patient records
- ☁️ Store data in MongoDB Atlas
- ⚡ REST API with Express.js
- 🎨 Modern and responsive UI
- 🔄 Loading animation while saving data
- 📅 Automatic date and time generation
- 📱 Mobile, Tablet, and Desktop responsive
- 🚀 Beginner-friendly full-stack project

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Tools
- Font Awesome
- Git
- GitHub

---

## 📂 Project Structure

```
Hospital_Management_System/
├── node_modules
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/YourUsername/Hospital_Management_System.git
```

## 📦 Required Packages

```bash
npm init -y
```


### 2. Move to project folder

```bash
cd Hospital_Management_System
```

### 3. Install dependencies


```bash
npm install express mongoose
```

### 4. Start the server

```bash
node server.js
```

---

# 🍃 MongoDB Atlas Setup

## Step 1: Create MongoDB Atlas Account

Visit:

https://www.mongodb.com/atlas

Sign up using your Google account or Email.

---

## Step 2: Create a Free Cluster

- Click **Build a Database**
- Select **M0 Free Cluster**
- Choose a Cloud Provider (AWS Recommended)
- Select a Region
- Click **Create Cluster**

---

## Step 3: Create Database User

Go to

**Database Access**

Click

**Add New Database User**

Enter

- Username
- Password

Assign

- Read and Write Permissions

Save the user.

---

## Step 4: Allow Network Access

Go to

**Network Access**

Click

**Add IP Address**

Choose

```
Allow Access From Anywhere (0.0.0.0/0)
```

or add your own IP address.

---

## Step 5: Connect Your Application

Open your Cluster

Click

```
Connect
```

Choose

```
Drivers
```

Select

```
Node.js
```

Copy the generated connection string.

Example:

```javascript
mongoose.connect(
"mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/NotesDB"
)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));
```

Replace

- **username** → Your MongoDB Username
- **password** → Your MongoDB Password
- **NotesDB** → Your Database Name

---


## VIdeo

https://github.com/user-attachments/assets/d2dcc7db-6b41-46b8-b87a-c852c53584a7

---

## 👨‍💻 Author

**Tanish Kumar**

If you found this project helpful, don't forget to ⭐ the repository.
