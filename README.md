# PlacementPro AI Backend

> **A scalable Node.js & Express backend powering an AI-driven placement
> preparation platform.** It enables resume analysis, AI-generated
> interview reports, mock interview sessions, aptitude practice,
> speech-to-text transcription, experience sharing, analytics, and
> subscription-based access management.

## 📖 Overview

**PlacementPro AI Backend** is the server-side application behind
**PlacementPro AI**, an AI-powered placement preparation platform
designed to help students prepare for technical interviews through
personalized interview reports, mock interview sessions, aptitude
practice, and progress tracking.

The backend exposes REST APIs for authentication, AI orchestration,
interview scheduling, report generation, speech-to-text conversion,
experience sharing, analytics, and subscription management while
following a modular, service-oriented architecture.

------------------------------------------------------------------------

## 🚀 Why This Project?

Preparing for software engineering interviews typically requires using
multiple disconnected tools for resume reviews, interview preparation,
aptitude practice, mock interviews, and progress tracking.

PlacementPro AI consolidates these into a single platform where students
receive personalized AI-driven guidance based on their resume, job
description, and career goals.

------------------------------------------------------------------------

## ✨ Core Features

-   🤖 AI Interview Report Generation
-   🎤 Mock Interview Engine
-   🎙 Deepgram Speech-to-Text Integration
-   📚 Aptitude Practice
-   👥 Experience Sharing
-   📊 Progress Analytics
-   💳 Razorpay Subscription System
-   🔐 JWT Authentication & Role-Based Authorization

------------------------------------------------------------------------

## 🏗 Architecture

The project follows a layered architecture:

``` text
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Models
   │
   ▼
MongoDB
```

### Folder Responsibilities

-   **routes/** -- API endpoint definitions
-   **controller/** -- Request/response handling
-   **services/** -- Business logic, AI orchestration, Razorpay,
    Deepgram
-   **models/** -- Mongoose schemas
-   **middleware/** -- Authentication, authorization, uploads, feature
    access
-   **config/** -- Configuration
-   **utils/** -- Shared helper functions

------------------------------------------------------------------------

## 🔐 Authentication Flow

``` text
Register/Login
      │
      ▼
Hash Password (bcrypt)
      │
      ▼
Store User (MongoDB)
      │
      ▼
Generate JWT
      │
      ▼
Send Token to Frontend
      │
      ▼
Protected Routes
```

Roles:

-   Student
-   Admin

------------------------------------------------------------------------

## 📡 API Modules

-   Authentication
-   Profile
-   Interview
-   Mock Interview
-   Practice
-   Experience
-   Company
-   Analytics
-   Roadmap
-   Subscription
-   Payment
-   Admin

------------------------------------------------------------------------

## 🔄 Interview Workflow

``` text
Resume + Job Description + Self Description
                    │
                    ▼
      AI Interview Report Generation
                    │
                    ▼
        Schedule Mock Interview
                    │
                    ▼
         Start Interview Session
                    │
                    ▼
     Answer Questions (Text / Voice)
                    │
                    ▼
      AI Feedback & Progress Tracking
```

------------------------------------------------------------------------

## 🛠 Tech Stack

### Backend

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose

### Authentication

-   JWT
-   bcrypt

### AI & Integrations

-   Groq API
-   Deepgram API
-   Razorpay
-   Multer
-   pdf-parse

------------------------------------------------------------------------

## 📁 Project Structure

``` text
Backend
├── seed
├── src
│   ├── config
│   ├── controller
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   └── index.js
├── .env
├── package.json
└── package-lock.json
```

------------------------------------------------------------------------

## ⚙ Environment Variables

``` env
PORT=
MONGO_URI=
JWT_SECRET=
GROQ_API_KEY=
FRONTEND_URL=
DEEPGRAM_API_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
FREE_RESUME_LIMIT=
FREE_INTERVIEW_LIMIT=
FREE_FEEDBACK_LIMIT=
```

------------------------------------------------------------------------

## 🚀 Getting Started

``` bash
git clone https://github.com/omrokade123/PlacementPro-Backend.git
cd PlacementPro-Backend
npm install
```

Create a `.env` file and configure the required environment variables.

Run the development server:

``` bash
npm run dev
```

Run in production:

``` bash
npm start
```

------------------------------------------------------------------------

## 💡 Engineering Highlights

-   Layered architecture
-   Service-oriented AI integrations
-   JWT authentication
-   Role-based authorization
-   Resume PDF parsing
-   Speech-to-text interview answers
-   Subscription feature gating
-   Modular REST API design

------------------------------------------------------------------------

## 🔮 Future Improvements

-   Swagger/OpenAPI documentation
-   Docker support
-   Redis caching
-   CI/CD pipeline
-   Background jobs
-   Unit & integration tests
-   Monitoring & logging

------------------------------------------------------------------------

## 🤝 Contributing

Contributions are welcome! Fork the repository, create a feature branch,
commit your changes, and open a Pull Request.

------------------------------------------------------------------------

## 📄 License

This project is intended for educational and portfolio purposes.

------------------------------------------------------------------------

## 👨‍💻 Author

**Om Rokade**

-   Portfolio: https://om-rokade-portfolio.vercel.app/
-   GitHub: https://github.com/omrokade123
-   LinkedIn: https://www.linkedin.com/in/om-rokade
