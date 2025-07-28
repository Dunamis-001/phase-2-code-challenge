# Smart Goal Planner

This project is a web application designed to help users set, track, and manage their savings goals effectively. Users can create new financial goals, track their progress with deposits, edit goal details, and gain an overview of their overall savings journey.

## Table of Contents

  - Features
  - Technologies Used
  - Project Structure
  - Deployment Links
  - Setup Instructions
  - Prerequisites
  - Backend Setup (json-server)
  - Frontend Setup (React Vite)
  - How to Run
  - Usage
  - Support and Contact details
  - License

-----

## Features

  - Browse Goals: View a collection of all your savings goals on the main page.
  - Goal Details: Each goal card displays its name, target amount, saved amount, progress percentage, category, and deadline.
  - Add New Goal: A dedicated form to easily add new savings goals to your collection.
  - Edit Goal: Modify existing goal details such as name, target amount, category, or deadline.
  - Make Deposit: Add funds to the `savedAmount` of any specific goal, updating your progress instantly.
  - Delete Goal: Remove goals from your collection once they are no longer relevant or completed.
  - Overview Dashboard: A summary section providing key statistics like total goals, completed goals, total saved amount, total target amount, and goals nearing their deadline.
  - Responsive Design: Optimized for a seamless viewing and interaction experience across various devices (mobile, tablet, desktop).

-----

## Technologies Used

# Frontend:

  - React (with Vite)
  - CSS: Custom styling for a clean and modern user interface, including responsive design.

# Backend (Mock API):

  - json-server: A lightweight tool used to create a full fake REST API in minutes, serving data from a JSON file (`db.json`).
  - Render: A cloud platform used to host the persistent `json-server` backend.

-----

## Project Structure

```
smart-goal-planner/
├── public/
│   └── index.html               <-- Main HTML file for the React app
├── src/
│   ├── components/
│   │   ├── AddGoalForm.jsx      <-- Form for adding new goals
│   │   ├── DepositForm.jsx      <-- Form for making deposits
│   │   ├── EditGoalForm.jsx     <-- Form for editing existing goals
│   │   ├── GoalItem.jsx         <-- Displays a single goal card
│   │   ├── GoalList.jsx         <-- Displays a grid/list of goal cards
│   │   └── OverviewDashboard.jsx<-- Displays summary statistics
│   ├── services/
│   │   └── goalService.js       <-- Handles API interactions with json-server
│   ├── App.css                  <-- Main application styling
│   ├── App.jsx                  <-- Main application component, handles state and component orchestration
│   ├── index.css                <-- Global CSS for basic HTML/body styles
│   └── main.jsx                 <-- React entry point (root component rendering)
├── db.json                      <-- Your mock backend data for json-server
├── package.json                 <-- Project dependencies and scripts
└── vite.config.js               <-- Vite configuration
└── README.md                    <-- This file
```

-----

## Deployment Links

  - View the deployed frontend application at: https://phase-2-code-challenge-9dbq.vercel.app/
  - Repository Link (Frontend): https://github.com/Dunamis-001/phase-2-code-challenge
  - Deployed API (Backend): https://phase2-code-challenge-61m8.onrender.com/goals
  - Repository Link : https://github.com/Dunamis-001/pc2-db

## Setup Instructions

  - Follow these steps to get the project running on your local machine.

## Prerequisites

  - Node.js (LTS version recommended)
  - npm (Node Package Manager, comes with Node.js)
  - Git (for cloning the repositories)

## Backend Setup (json-server)

Your backend runs `json-server` to serve your data.

  - Create a separate directory for your backend project (e.g., `smart-goal-api`).
  - Initialize a Node.js project within this directory and install the necessary dependencies, including `json-server` and `cors`.
  - Ensure you have a `db.json` file in your backend project's root directory containing your initial goal data.
  - Create an `index.js` (or `server.js`) file in the backend root to configure and start `json-server`, ensuring CORS is enabled and it uses `process.env.PORT` or defaults to `3000`.
  - Verify that your backend project's `package.json` includes a `start` script (e.g., `node index.js`) for running the server.
  - Start the `json-server` locally.
  - This will start your mock API server, typically accessible at `http://localhost:3000`.

## Frontend Setup (React Vite):

  - Navigate to your frontend project directory in your terminal.
  - Install project dependencies:
  - Update API Base URL: Before running or deploying the frontend, ensure your `src/services/goalService.js` file has its `baseUrl` updated. For local development, it should point to `http://localhost:3000`. When     deploying your frontend, change this `baseUrl` to your deployed Render API URL.

-----

## How to Run

  - Start the Backend (if not already running):
  - In your first terminal, navigate to your backend project directory (`smart-goal-api`) and run:
    ```bash
    npm start
    ```
  - Start the Frontend:
  - In your second terminal (in your frontend project root `smart-goal-planner`), run:
    ```bash
    npm run dev
    ```
  - Vite will compile your React application and provide a local development server URL (e.g., `http://localhost:5173`).
  - Open in Browser:
  - Open your web browser and navigate to the URL provided by `npm run dev`.

-----

## Usage

  - Home Page (`/`): Upon loading, you'll see an overview dashboard and a list of all your current savings goals.
  - Add New Goal: The "Add New Goal" form is visible by default. Fill in the details and click "Add Goal" to create a new entry.
  - Edit Goal: Click the "Edit" button on any goal card to open the "Edit Goal" form, pre-filled with the goal's current data. Make changes and click "Update Goal."
  - Make Deposit: Click the "Deposit" button on any goal card to open the "Deposit" form. Enter the amount to add to your savings for that goal.
  - Delete Goal: Click the "Delete" button on any goal card to remove it from your collection (requires confirmation).

-----

## Support and Contact Details

If you have any questions, suggestions, or need assistance, please contact:

  - Email: alex232nyamai@gmail.com


-----

## License

MIT License

Copyright © 2025 Alex Nyamai

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
