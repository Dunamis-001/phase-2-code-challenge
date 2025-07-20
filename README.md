Smart Goal Planner

A straightforward web application built with React and powered by json-server for local data persistence. This tool helps users manage multiple financial savings goals, track their progress, and make deposits.

Features

Goal Management: Add, view, edit, and delete your financial goals.

Progress Tracking: See your saved amount against your target, along with a visual progress bar and remaining amount.

Deposits: Easily add funds to any of your existing goals.

Overview Dashboard: Get a quick summary of your total goals, total money saved, and completed goals.

Deadline Alerts: Receive warnings for goals nearing their deadline and identify overdue goals.

Technologies Used

React (Vite): A fast and lightweight development environment for React applications.

json-server: A simple tool to create a fake REST API from a db.json file, mimicking a backend database.

CSS: For basic, minimalist styling.


Getting Started

Follow these steps to get the project up and running on your local machine.

Prerequisites

You'll need Node.js and npm (or Yarn) installed on your system.

Installation
Clone the repository (or set up the project locally):
If you're starting from scratch, you'd create your Vite project:


npm create vite@latest smart-goal-planner -- --template react

cd smart-goal-planner

Then, place your db.json file in the root of the project directory.

Install project dependencies:

Navigate to the project's root directory in your terminal and run:

npm install

Install json-server globally:

npm install -g json-server

Running the Application

You'll need two separate terminal windows for this:

Start the JSON Server (Mock API):
In your first terminal window, navigate to the project's root directory and run:

json-server --watch db.json --port 3000

This will start the mock API server, making your goal data available at http://localhost:3000/goals.

Start the React Development Server:

In your second terminal window, navigate to the project's root directory and run:

npm run dev

This will start the React application. It typically opens in your browser at http://localhost:5173 (or another available port).

You should now see the Smart Goal Planner dashboard in your browser, populated with data from your db.json file!

                                            
                                            
                                            
                                            Author: Alex Nyamai
                                            License: This project is not lisenced


