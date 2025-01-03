# Backend-Me

This is the backend service for the application. It is built using Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd 01\ backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Create a [.env](http://_vscodecontentref_/1) file in the root directory and add the following environment variables:
    PORT=8000

2. You can refer to the [.env.sample](http://_vscodecontentref_/2) file for the required environment variables.

## Running the Application

1. Start the application in development mode:
    ```sh
    npm run dev
    ```

2. Start the application in production mode:
    ```sh
    npm start
    ```

## API Endpoints

### Health Check

- **GET** `/api/v1/healthcheck`
    - Response: `{ "statusCode": 200, "message": "OK", "data": "Health check passed" }`

### User

- **POST** `/api/v1/users/register`
    - Request: `multipart/form-data` with fields [fullname](http://_vscodecontentref_/3), [email](http://_vscodecontentref_/4), [username](http://_vscodecontentref_/5), [password](http://_vscodecontentref_/6), [avatar](http://_vscodecontentref_/7), [coverImage](http://_vscodecontentref_/8)
    - Response: `{ "statusCode": 201, "message": "user registered successfully", "data": { ...user } }`

- **POST** `/api/v1/users/logout`
    - Request: `Authorization: Bearer <access-token>`
    - Response: `{ "statusCode": 200, "message": "user logged out successfully", "data": {} }`

## Project Structure
