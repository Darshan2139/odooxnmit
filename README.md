# Synergy Sphere

A comprehensive project management and team collaboration platform designed to streamline workflows, enhance productivity, and foster seamless collaboration among teams.

![Synergy Sphere](https://img.shields.io/badge/Version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)

## 🚀 Features

### 📋 Project Management
- **Create & Manage Projects**: Organize your work with intuitive project creation and management tools
- **Task Assignment**: Assign tasks to team members with due dates and priorities
- **Progress Tracking**: Monitor project progress with visual progress indicators
- **Project Statistics**: Get insights into project performance and team productivity

### 👥 Team Collaboration
- **Team Creation**: Build and manage teams for different projects
- **Member Invitations**: Invite team members via email with secure invitation links
- **Role-based Access**: Control access levels (Owner, Admin, Editor) for different team members
- **Real-time Updates**: Stay synchronized with real-time project updates

### 🔐 Authentication & Security
- **User Registration**: Secure account creation with email verification
- **Google OAuth**: Quick sign-in with Google authentication
- **JWT Authentication**: Secure token-based authentication system
- **Password Reset**: Secure password recovery via OTP verification

### 📧 Communication
- **Email Notifications**: Automated email notifications for invitations and updates
- **Professional Email Templates**: Beautiful, branded email templates for all communications
- **OTP Verification**: Secure one-time password verification for account security

### 💬 Chat & Messaging
- **Real-time Chat**: Built-in chat system for team communication
- **Contact Management**: Manage your team contacts and conversations

## 🛠️ Technology Stack

### Frontend
- **React 18.2.0** - Modern UI library
- **Styled Components** - CSS-in-JS styling
- **Material-UI** - Component library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Nodemailer** - Email service
- **Bcrypt** - Password hashing

### Additional Libraries
- **React DnD** - Drag and drop functionality
- **React OTP Input** - OTP input components
- **React Responsive Masonry** - Responsive grid layouts
- **Timeago.js** - Time formatting

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Project-Management-App-main/server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the server directory:
   ```env
   # Server Configuration
   PORT=8700
   NODE_ENV=development

   # Database Configuration
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/database

   # JWT Configuration
   JWT=your-jwt-secret-key
   JWT_SECRET=your-jwt-secret-key

   # Email Configuration
   EMAIL=your-email@gmail.com
   EMAIL_USERNAME=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   MAIL_HOST=smtp.gmail.com
   MAIL_PORT=587
   MAIL_FROM=your-email@gmail.com

   # URL Configuration
   URL=http://localhost:3000
   CLIENT_URL=http://localhost:3000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to client directory**
   ```bash
   cd ../client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the client directory:
   ```env
   # API Configuration
   REACT_APP_API_URL=http://localhost:8700
   REACT_APP_BASE_URL=http://localhost:3000

   # Google OAuth Configuration
   REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id

   # Environment
   REACT_APP_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/google` - Google OAuth
- `GET /api/auth/generateotp` - Generate OTP
- `GET /api/auth/verifyotp` - Verify OTP
- `PUT /api/auth/forgetpassword` - Password reset

### Projects
- `GET /api/project` - Get all projects
- `POST /api/project` - Create new project
- `GET /api/project/:id` - Get project by ID
- `PUT /api/project/:id` - Update project
- `DELETE /api/project/:id` - Delete project
- `POST /api/project/invite/:id` - Invite project member

### Teams
- `GET /api/team` - Get all teams
- `POST /api/team` - Create new team
- `GET /api/team/:id` - Get team by ID
- `PUT /api/team/:id` - Update team
- `DELETE /api/team/:id` - Delete team
- `POST /api/team/invite/:id` - Invite team member

### Users
- `GET /api/users` - Get user profile
- `PUT /api/users` - Update user profile

## 📱 Usage

### Getting Started
1. **Sign Up**: Create a new account or sign in with Google
2. **Verify Email**: Complete email verification with OTP
3. **Create Team**: Set up your first team
4. **Create Project**: Start your first project
5. **Invite Members**: Add team members to collaborate

### Project Management
- Create projects with detailed descriptions
- Assign tasks to team members
- Track progress with visual indicators
- Monitor project statistics and performance

### Team Collaboration
- Build teams for different projects
- Invite members via email
- Set role-based permissions
- Communicate through built-in chat

## 🔧 Configuration

### Email Setup
Configure Gmail SMTP for email notifications:
1. Enable 2-factor authentication on your Gmail account
2. Generate an app password
3. Use the app password in your `.env` file

### Google OAuth Setup
1. Create a project in Google Cloud Console
2. Enable Google+ API
3. Create OAuth 2.0 credentials
4. Add your client ID to the frontend `.env` file

### MongoDB Setup
- **Local**: Install MongoDB locally and update connection string
- **Atlas**: Create a MongoDB Atlas cluster and update connection string

## 🚀 Deployment

### Backend Deployment
- Deploy to Heroku, Railway, or similar platforms
- Set environment variables in your hosting platform
- Ensure MongoDB connection is accessible

### Frontend Deployment
- Deploy to Netlify, Vercel, or similar platforms
- Update API URLs in environment variables
- Configure build settings

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email skillmart.ce@gmail.com or create an issue in the repository.

## 🎯 Roadmap

- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Integration with third-party tools
- [ ] Advanced notification system
- [ ] File sharing capabilities
- [ ] Video conferencing integration

---

**Synergy Sphere** - Empowering teams to achieve more together! 🚀