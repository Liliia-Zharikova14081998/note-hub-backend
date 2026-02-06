# 📝 NoteHub (Backend)

[![Live API Documentation](https://img.shields.io/badge/Live_API-Swagger-green?style=for-the-badge)](https://notes-app-hw-5.onrender.com)

Advanced REST API for the NoteHub application. This server-side application handles secure user authentication, advanced session management, and cloud-based file storage.

## 🚀 Key Features

* **Advanced Session Management:** Implemented a robust authentication system using **Access and Refresh tokens**, ensuring secure and seamless user sessions.
* **Request Validation:** All API endpoints are protected with strict data validation using **Celebrate and Joi** at the routing level to prevent malicious data injection.
* **Email Service:** Automated email workflows, including registration verification and password resets, integrated via **Mailtrap**.
* **Cloud Infrastructure:** Dynamic user avatar management powered by **Cloudinary** cloud storage for scalable image hosting.
* **Security:** Industry-standard password hashing with `bcrypt` and centralized authentication middleware for private routes.

## 🛠 Tech Stack
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## 📡 API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description |
|-------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login and create session (Tokens) |
| POST | `/auth/logout` | Logout user and clear session |
| POST | `/auth/refresh` | Refresh authentication session |
| POST | `/auth/request-reset-email` | Request password reset email |
| POST | `/auth/reset-password` | Set a new password |

### 📝 Notes (Private)
| Method | Endpoint | Description |
|-------|----------|-------------|
| GET | `/notes` | Get all user notes (with validation) |
| GET | `/notes/:noteId` | Get a specific note by ID |
| POST | `/notes` | Create a new note |
| PATCH | `/notes/:noteId` | Update an existing note |
| DELETE | `/notes/:noteId` | Remove a note |

### 👤 User Profile
| Method | Endpoint | Description |
|-------|----------|-------------|
| PATCH | `/users/me/avatar` | Update user avatar (Upload to Cloudinary) |

## ⚙️ Environment Variables
To run this project, create a `.env` file in the root directory and provide the following keys:
`PORT`, `MONGO_URL`, `JWT_SECRET`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`

## 📦 Installation & Setup
1. Clone the repository and switch to the development branch:
   ```bash
   git checkout 05-mail-and-img
   ```

2. Clone the repository and switch to the development branch:
   ```bash
   npm install
   ```
3. Start the development server:
     ```bash
   npm run dev
   ```

## 📫 Author
Liliia Zharikova

[Git Hub](https://github.com/Liliia-Zharikova14081998)     
   
