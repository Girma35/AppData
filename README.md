# Recipe Management API

## Description

This project is a backend API for a recipe management application built with Node.js and Express.js. It allows users to create, read, update, and delete recipes securely. User authentication is handled by Firebase Authentication, and recipe data is stored in a MongoDB database using Mongoose.

## Features

- User authentication through Firebase Authentication.
- Recipe creation, retrieval, updating, and deletion.
- MongoDB database integration with Mongoose.
- RESTful API endpoints for recipe management.
- Secure handling of sensitive data via environment variables.

## Technology Stack

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-4.x-grey?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-brightgreen?logo=mongodb)
![Mongoose](https://img.shields.io/badge/Mongoose-8.x-blue?logo=mongoose)
![Firebase](https://img.shields.io/badge/Firebase-Auth-yellow?logo=firebase)
![dotenv](https://img.shields.io/badge/dotenv-16.x-lightgrey?logo=dotenv)

## Getting Started

### Installation

To get started, clone the repository from GitHub and install the necessary dependencies using npm.

### Configuration

Set up your environment variables as outlined below, and configure MongoDB and Firebase Authentication following their respective setup sections.

### Running the Application

Launch the server with npm, and the API will be accessible on your local machine, typically at a default port like 3000.

## API Endpoints

The API provides endpoints for managing recipes:
- Create a new recipe with details like title, description, ingredients, and instructions.
- Retrieve a list of all recipes or a specific recipe by ID.
- Update an existing recipe with new information.
- Delete a recipe by its ID.

All endpoints require proper authentication where applicable.

## Database Setup

Install MongoDB locally or use a cloud service like MongoDB Atlas. The project uses a Mongoose schema to define the structure for recipes, including fields like title, description, ingredients, instructions, and more. Connect to your MongoDB instance using a URI stored securely.

## Firebase Authentication Setup

Create a Firebase project via the Firebase console, enable authentication (e.g., Email/Password or Google sign-in), and configure your app with the provided Firebase credentials. These credentials should be stored securely and loaded into the application.

## Environment Variables

Use a `.env` file in the project root to store sensitive information like the MongoDB URI, server port, and Firebase credentials. Ensure this file is not committed to version control for security. Load these variables into your application using a package like dotenv.

## Contributing

To contribute, fork the repository, create a feature branch, make your changes, and submit a pull request with a clear description of your updates.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

mongo Db access (only for the owner):
https://cloud.mongodb.com/v2/67bcddcab0942156c2fe1f53#/security/network/accessList
