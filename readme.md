# Inventory Management System API

This project is a RESTful API for managing products, warehouses, and stock levels within an inventory management system. It includes user authentication and role-based access control.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Database Schema](#database-schema)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Potential Improvements](#potential-improvements)
- [License](#license)

## Features

- **Authentication**: Users can register and log in using JWT authentication.
- **Role-based Access Control**: Users are assigned roles (admin, manager, user) with specific permissions.
- **Product Management**: Create, read, update, and delete products.
- **Warehouse Management**: Manage warehouses with location and capacity information.
- **Stock Management**: Track stock levels for products in warehouses.
- **Pagination and Filtering**: Retrieve paginated and filtered lists of products, warehouses, and stocks.

## Technologies Used

- **Node.js** with **Express**: For building the API.
- **Sequelize**: For ORM and database interaction.
- **MySQL**: As the relational database.
- **TypeScript**: For type-safe code.
- **JWT**: For authentication and authorization.

## Database Schema

The database schema includes the following tables:

- **users**

  - `id`: Integer, Primary Key
  - `username`: String
  - `email`: String
  - `password`: String (hashed)
  - `role`: Enum (admin, manager, user)
  - `createdAt`: Date
  - `updatedAt`: Date

- **products**

  - `id`: Integer, Primary Key
  - `name`: String
  - `description`: Text
  - `price`: Decimal
  - `createdAt`: Date
  - `updatedAt`: Date

- **warehouses**

  - `id`: Integer, Primary Key
  - `name`: String
  - `location`: String
  - `capacity`: Integer
  - `createdAt`: Date
  - `updatedAt`: Date

- **stocks**
  - `id`: Integer, Primary Key
  - `productId`: Integer (Foreign Key to products)
  - `warehouseId`: Integer (Foreign Key to warehouses)
  - `quantity`: Integer
  - `createdAt`: Date
  - `updatedAt`: Date

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Joveee05/inventory-management-system.git
   ```
2. Navigate to project directory
   ```
   cd inventory-management-system
   ```
3. Install Dependencies

   ```
   npm install

   ```

4. Set up the environment variables (see below).

5. Start the server

   ```
   npm run build
   npm start
   ```

## Environment Variables

Create a .env file in the root of the project with the following variables:

```env
DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASS=your-database-password
DB_NAME=your-database-name
JWT_SECRET=your-jwt-secret
PORT=3000
```

## API Endpoints

### Authentication

- POST /api/register: Register a new user.
- POST /api/login: Log in and receive a JWT token.

### Products

- GET /api/products: Retrieve a list of all products (protected).

- GET /api/products/:id: Retrieve a specific product by ID (protected).

- POST /api/products: Create a new product (protected).

- PUT /api/products/:id: Update an existing product (protected).

- DELETE /api/products/:id: Delete a product (protected).

### Warehouses

- GET /api/warehouses: Retrieve a list of all warehouses (protected).
- GET /api/warehouses/:id: Retrieve a specific warehouse by ID (protected).
- POST /api/warehouses: Create a new warehouse (protected).
- PUT /api/warehouses/:id: Update an existing warehouse (protected).
- DELETE /api/warehouses/:id: Delete a warehouse (protected).

### Stocks

- GET /api/stocks: Retrieve a list of all stocks (protected).

- GET /api/stocks/:id: Retrieve a specific stock by ID (protected).

- POST /api/stocks: Create a new stock record (protected).
  PUT /api/stocks/:id: Update an existing stock record (protected).

- DELETE /api/stocks/:id: Delete a stock record (protected).

## Error Handling

The API uses standard HTTP status codes for error handling. Common error responses include:

- 400 Bad Request: The request was invalid or cannot be otherwise served.

- 401 Unauthorized: Authentication is required and has failed or has not yet been provided.

- 403 Forbidden: The request was valid, but the server is refusing action. The user might not have the necessary permissions.

- 404 Not Found: The requested resource could not be found.

- 500 Internal Server Error: An error occurred on the server.

## Potential Improvements

- Rate Limiting: Implement rate limiting to prevent abuse and ensure fair usage.

- Input Validation: Validate and sanitize all input received from clients and other sources to prevent common security vulnerabilities like injection attacks.

- Improve Error Handling and Logging

  - Current State: Basic error handling is in place.

  - Improvement: Implement centralized error handling and more detailed logging. Consider using a logging library like winston or integrating with a logging service like Loggly or Datadog. Also, improve error messages to include more context and traceability.

- Role Based Access: Implement Role-Based Access Control (RBAC) at a Granular Level.

- Scalability: Implement additional performance optimizations and scalability features for handling larger datasets and higher traffic.

- Implement Caching

  - Current State: No caching is implemented.
  - Improvement: Use caching for frequently accessed resources like products or warehouse data to reduce database load and improve response times. Consider using Redis or another caching solution.

- Optimize Database Queries

## Licence

This project is licensed under the MIT License.
