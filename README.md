![Project MGM Backend](https://img.shields.io/badge/Project%20MGM%20Backend-v1.0.0-blue)

# Project MGM Backend

A RESTful API service for collaborative project management. Supports project organization, hierarchical tasks, notes, user authentication, and role-based access control.

## Table of Contents

- Overview
- Features
- API Endpoints
- Permission Matrix
- Data Models
- Security
- File Management
- Getting Started
- Success Criteria

## Overview

Project MGM Backend enables teams to:

- Organize projects
- Manage tasks and subtasks
- Maintain project notes
- Authenticate users with role-based access

## Features

- **User Authentication & Authorization**: Registration, login, JWT, password management, email verification, role-based access (Admin, Project Admin, Member)
- **Project Management**: Create, list, update, delete projects
- **Team Member Management**: Invite, list, update roles, remove members
- **Task Management**: Create, list, update, delete tasks; assign tasks; attach files; status tracking (Todo, In Progress, Done)
- **Subtask Management**: Add, update, delete subtasks; mark completion
- **Project Notes**: Add, list, update, delete notes
- **System Health**: Health check endpoint

## API Endpoints

### Authentication (`/api/v1/auth/`)

- `POST /register` - Register user
- `POST /login` - Login
- `POST /logout` - Logout
- `GET /current-user` - Current user info
- `POST /change-password` - Change password
- `POST /refresh-token` - Refresh token
- `GET /verify-email/:verificationToken` - Verify email
- `POST /forgot-password` - Forgot password
- `POST /reset-password/:resetToken` - Reset password
- `POST /resend-email-verification` - Resend verification email

### Projects (`/api/v1/projects/`)

- `GET /` - List projects
- `POST /` - Create project
- `GET /:projectId` - Project details
- `PUT /:projectId` - Update project
- `DELETE /:projectId` - Delete project
- `GET /:projectId/members` - List members
- `POST /:projectId/members` - Add member
- `PUT /:projectId/members/:userId` - Update member role
- `DELETE /:projectId/members/:userId` - Remove member

### Tasks (`/api/v1/tasks/`)

- `GET /:projectId` - List tasks
- `POST /:projectId` - Create task
- `GET /:projectId/t/:taskId` - Task details
- `PUT /:projectId/t/:taskId` - Update task
- `DELETE /:projectId/t/:taskId` - Delete task
- `POST /:projectId/t/:taskId/subtasks` - Create subtask
- `PUT /:projectId/st/:subTaskId` - Update subtask
- `DELETE /:projectId/st/:subTaskId` - Delete subtask

### Notes (`/api/v1/notes/`)

- `GET /:projectId` - List notes
- `POST /:projectId` - Create note
- `GET /:projectId/n/:noteId` - Note details
- `PUT /:projectId/n/:noteId` - Update note
- `DELETE /:projectId/n/:noteId` - Delete note

### Health Check (`/api/v1/healthcheck/`)

- `GET /` - System health status

## Permission Matrix

| Feature                    | Admin | Project Admin | Member |
| -------------------------- | :---: | :-----------: | :----: |
| Create Project             |   ✓   |       ✗       |   ✗    |
| Update/Delete Project      |   ✓   |       ✗       |   ✗    |
| Manage Project Members     |   ✓   |       ✗       |   ✗    |
| Create/Update/Delete Tasks |   ✓   |       ✓       |   ✗    |
| View Tasks                 |   ✓   |       ✓       |   ✓    |
| Update Subtask Status      |   ✓   |       ✓       |   ✓    |
| Create/Delete Subtasks     |   ✓   |       ✓       |   ✗    |
| Create/Update/Delete Notes |   ✓   |       ✗       |   ✗    |
| View Notes                 |   ✓   |       ✓       |   ✓    |

## Data Models

- **User Roles:** `admin`, `project_admin`, `member`
- **Task Status:** `todo`, `in_progress`, `done`

## Security

- JWT authentication & refresh tokens
- Role-based authorization middleware
- Input validation
- Email verification
- Secure password reset
- File upload security (Multer)
- CORS configuration

## File Management

- Multiple file attachments on tasks
- Files stored in `public/images`
- File metadata: URL, MIME type, size
- Secure upload handling

## Getting Started

1. Clone the repo
2. Install dependencies: `npm install`
3. Configure environment variables
4. Start server: `npm start`

## Success Criteria

- Secure authentication & authorization
- Complete project lifecycle management
- Hierarchical tasks & subtasks
- Role-based access control
- File attachment support
- Email notifications
- Comprehensive API documentation
