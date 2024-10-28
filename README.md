# Bug/Task Tracker Application
Demo URL: https://bug-tracky.netlify.app

## Overview

This is a bug/task tracker application built with React, Redux, and Tailwind CSS. The application allows users to create, edit, delete, and manage tasks with various attributes, including title, description, priority, status, assignee, due date, and more.

## Technologies Used

- **Frontend**: React.js, Next.js
- **State Management**: Redux
- **Styling**: Tailwind CSS
- **State Management Library**: Redux Toolkit

## Features

> User Authentication

> Create, edit, and delete tasks

> Filter and sort tasks by priority and status

> Time tracking for each task

> Responsive design using Tailwind CSS

1. **User Authentication:**
   - Implemented a simple login system. used a mock authentication method.
     ![alt text](img/image0.png)
   - On successful login, the user redirected to the dashboard page.
     ![alt text](img/image4.png)
2. **Dashboard:**
   - After logging in, the user land on a dashboard where they can view and manage their tasks/bugs.
   - The dashboard displays a list of tasks with relevant details.
     ![alt text](img/image6.png)
   - Dashboard should also have a trend line of concurrent tasks worked upon each day.
     ![alt text](img/image7.png)
3. **Task/Bug Creation:** 
    - Users should be able to create a new task/bug for their team/projects with fields like Title, Description, Priority,Status Assignee, important dates, etc.
   ![alt text](img/image5.png)
   ![alt text](img/image6.png)
4. **Task/Bug Management:**
   - Users should be able to edit and delete tasks.
   - Implement a way to filter/sort tasks based on different criteria (priority, status, etc.).
   ![alt text](img/image7.png)
5. **Time Tracker:**
   - Add a time tracking feature to log the time spent on each task.
   - Display the total time spent on each task.
6. **UI/UX:**
   - Focused on creating a clean, intuitive, and user-friendly interface.
   - Ensured the application is responsive and works well on desktop, brownie points for mobile compatibility.
7. **Technology Stack:**
   - Used `React.js` for the frontend framework.
   - Used `Tailwind-CSS` for styling.
   - Used `Redux` library for state management.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/javid4962/Bug-Tracker.git
   cd Bug-Tracker
   ```
2. **Install Dependencies**:

   ```bash
   npm install
   ```

### Running the Application

1. **Start the Development Server**

    ```bash
    npm start
    ```
2. **Login Credentials**

    ```bash
    Username:user
    Password:password123
    ```

### Overview

> Login page:
> ![alt text](img/image0.png)

> Giving Credentials to login:
> ![alt text](img/image1.png)

> Invalid Credentials:
> ![alt text](img/image2.png)

> Valid Credentials:
> ![alt text](img/image3.png)

> Rendered to Dashboard page:
> ![alt text](img/image4.png)

> Creating a Task:
> ![alt text](img/image5.png)

> Adding Task:
> ![alt text](img/image6.png)

> Task Managing:
> ![alt text](img/image7.png)

> Updating/Editing Task:
> ![alt text](img/image8.png)

> Filtering Tasks:
> ![alt text](img/image9.png)
> ![alt text](img/image9_1.png)

> Deleting Tasks:
> ![alt text](img/image10.png)
> ![alt text](img/image10_1.png)
