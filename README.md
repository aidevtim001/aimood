# TIMAIMoodle

**TIMAIMoodle** is an AI-powered backend service for generating Moodle courses from natural language instructions using OpenAI or Azure OpenAI.

## Features

- Accepts natural instructions to create Moodle courses
- Uses OpenAI or Azure OpenAI (switchable)
- Integrates with Moodle Web Services

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create `.env` file

```bash
cp .env.example .env
```

Fill in your credentials for OpenAI or Azure OpenAI, and Moodle.

### 3. Run the server

```bash
node app.js
```

## API

### POST `/api/instruction`

**Body:**
```json
{
  "instruction": "Create a course on Physics with 3 modules..."
}
```

**Response:**
```json
{
  "success": true,
  "plan": "...generated plan...",
  "moodleResponse": "...Moodle API response..."
}
```

---
MIT License
