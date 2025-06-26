# 📘 Placement Portal Frontend

A modern, comprehensive placement management system for **Chandigarh College of Engineering and Technology (CCET)**. This web application streamlines the placement process by providing dedicated interfaces for administrators, students, and companies to manage recruitment drives, applications, and placements efficiently.

---

## 🚀 Demo

> **Note:** Demo link will be available once deployed. The application is currently in development.

---

## 📸 Screenshots

> **Coming Soon:** Screenshots and GIFs showcasing the application interface will be added here.

---

## 🛠️ Features

### 👨‍💼 **Admin Dashboard**

- **Drive Management**: Create, edit, and publish placement drives
- **Company Management**: Add and manage company profiles with detailed information
- **Student Management**: View, filter, and manage student profiles by branch, gender, and performance
- **Role Management**: Control access levels for student coordinators
- **Analytics**: Download applied student lists and manage drive applications
- **Real-time Monitoring**: Track application status and drive progress

### 👩‍🎓 **Student Portal**

- **Profile Management**: Complete onboarding with academic records, documents, and achievements
- **Drive Applications**: Browse and apply for placement opportunities
- **Document Upload**: Secure Google Drive integration for resume and certificate uploads
- **Application Tracking**: Monitor application status and deadlines
- **Company Research**: View detailed company profiles and job descriptions

### 🏢 **Company Interface**

- **Profile Creation**: Register and manage company information
- **Drive Posting**: Create detailed job postings with multiple roles (Admin manages this process)

### 🔐 **Authentication & Security**

- **OTP-based Login**: Secure email verification system
- **Role-based Access**: Different access levels for admins, students, and companies
- **College Email Verification**: Automated roll number validation for CCET students
- **Session Management**: Secure authentication with cookies

---

## 📁 Folder Structure

```
placement-portal-frontend/
├── public/
│   └── images/                    # Static assets
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── admin/                 # Admin dashboard pages
│   │   │   └── dashboard/
│   │   │       ├── company/       # Company management
│   │   │       ├── drive/         # Drive management
│   │   │       ├── students/      # Student management
│   │   │       └── manage/        # Role management
│   │   ├── auth/                  # Authentication pages
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── company/               # Company-specific pages
│   │   ├── jobs/                  # Job listings
│   │   └── user/                  # Student portal
│   │       ├── (dashboard)/
│   │       │   ├── profile/       # Student profile management
│   │       │   ├── drive/         # Drive applications
│   │       │   ├── company/       # Company browsing
│   │       │   └── students/      # Student directory
│   │       ├── apply/             # Application forms
│   │       └── verify/            # Verification pages
│   ├── components/                # Reusable UI components
│   │   ├── ui/                    # shadcn/ui components
│   │   ├── layout/                # Layout components
│   │   ├── form/                  # Form components
│   │   └── modal/                 # Modal components
│   ├── constants/                 # Application constants
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility libraries
│   ├── schemas/                   # Zod validation schemas
│   └── types/                     # TypeScript type definitions
├── components.json               # shadcn/ui configuration
├── middleware.ts                 # Next.js middleware
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 🧪 Tech Stack

### **Frontend**

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui

### **Backend**

- **Language**: Go
- **Framework**: Fiber
- **Authentication**: JWT
- **API**: REST

### **Database**

- **Type**: SQL
- **Engine**: MySQL
- **ORM**: GORM

---

## 🧰 Installation

### Prerequisites

- **Node.js**: 18.0 or higher
- **Git**: Latest version

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/DevSoc-exe/placement-portal-frontend.git
   cd placement-portal-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 🧪 Usage

### **For Students**

1. **Registration**: Use your CCET roll number to register
2. **Email Verification**: Verify your college email address
3. **Profile Setup**: Complete your academic profile with documents
4. **Browse Drives**: View available placement opportunities
5. **Apply**: Submit applications for relevant positions

### **For Administrators**

1. **Login**: Use admin credentials to access the dashboard
2. **Manage Companies**: Add and verify company profiles
3. **Create Drives**: Set up placement drives with multiple roles
4. **Monitor Applications**: Track student applications and progress
5. **Generate Reports**: Download applicant data and analytics

### **For Companies**

1. **Register**: Create a company profile with HR details through the system
2. **Admin Verification**: Wait for admin approval and verification
3. **Admin-Managed Drives**: Admins create placement drives on behalf of companies
4. **Profile Information**: Company profiles are displayed to students during drives

---

## ✅ Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Backend API Configuration
NEXT_PUBLIC_BACKEND_URL="http://localhost:8080"
```

### Required Variables:

- `NEXT_PUBLIC_BACKEND_URL`: Base URL for the backend API server

---

## 🧑‍💻 Contributing

We welcome contributions from the community! Here's how you can help:

### **Getting Started**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### **Code Style**

- Follow the existing TypeScript and React patterns
- Use Prettier for code formatting
- Ensure all components are properly typed
- Follow the established folder structure

### **Before Submitting**

- Test your changes thoroughly
- Update documentation if needed
- Ensure responsive design compatibility

---

Built with ❤️ by the DevSoc Team for CCET
