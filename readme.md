# E-commerce Backend Server

## Description

This is a backend server built with Node.js, Express, and TypeScript. It uses Mongoose for MongoDB interactions and includes various tools like zod for code quality and development convenience.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v17 or later)
- npm (v6 or later)
- MongoDB (latest stable version)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Likhon22/level2-backend-assign-2.git
   cd level2-backend-assign-2

   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root of the project and add your environment variables. For example:

   ```
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   PORT=3000
   ```

# Server Setup Guide

This guide provides instructions for setting up and running the server in development and production modes, as well as how to perform linting and code formatting.

## Running the Server

### Development Mode

To start the server in development mode, use the following command:

```
npm run start:dev
```

### Production Mode

To start the server in production mode, follow these steps:

1. Build the server:

```
npm run build
```

2. Start the server:

```
npm run start:prod
```

## Linting

To check for linting errors, run the following command:

```
npm run lint
```

To automatically fix linting errors, use:

```
npm run lint:fix
```

## Code Formatting

To format your code with Prettier, execute the following command:

```
npm run prettier:fix
```
