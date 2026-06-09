# Workflow Automation Platform

## Features

- Create Workflow
- Edit Workflow
- Delete Workflow
- Execute Workflow
- Execution History
- Dynamic Step Builder

## Tech Stack

### Frontend
- React
- TypeScript
- Zustand
- Axios

### Backend
- Node.js
- Express
- MongoDB
- Mongoose

## Supported Workflow Steps

- Trim
- Uppercase
- Lowercase
- Delay
- Condition
- Mock API
- Output

## Setup

### Backend

cd backend

npm install

npm run dev

### Frontend

cd frontend

npm install

npm run dev

## Architecture

React
↓
Express API
↓
Workflow Engine
↓
MongoDB

## API Endpoints

GET /api/workflows

POST /api/workflows

PUT /api/workflows/:id

DELETE /api/workflows/:id

POST /api/executions/:id/execute

GET /api/executions
