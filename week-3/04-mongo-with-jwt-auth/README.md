# 04-mongo-with-jwt-auth

## Results Videos
https://github.com/KitsuneKode/0-100xDev-Assignment-solutions/assets/135751082/f3b96aa8-619d-4387-ba0e-2cca9aa3c5c2

 
-Access [Pictures](./Pictures) to access the screenshots


This project is a course selling website that uses MongoDB for persistent data storage and JWTs (JSON Web Tokens) for authentication. The application provides separate endpoints for user and admin sign-in, and all authenticated requests require a JWT in the headers.

The application allows admins to create and manage courses, while users can view and enroll in these courses. The data related to users, admins, and courses is stored in a MongoDB database, ensuring data persistence across sessions.

The use of JWTs for authentication provides a secure way to verify the identity of users and admins, ensuring that sensitive operations like course creation and enrollment are only accessible to authenticated individuals.

This project is a great example of a full-stack JavaScript application, showcasing the use of Node.js for backend development, MongoDB for data storage, and JWTs for secure authentication.
## Installation

1. Clone the repository: `
2. Navigate to the project directory: `cd 04-mongo-with-jwt-auth`
3. Install the dependencies: `npm install`

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:
    - `MONGO_URI`: The connection string for your MongoDB database.
    - `JWT_SECRET`: A secret key used for signing and verifying JWTs.
    - `JWT_EXPIRES_IN`: The expiration time for JWTs (e.g., "1d" for 1 day).
    - `PORT`: The port number on which the server will run (default is 3000).

## Usage

1. Start the server: `npm start`
2. The server will be running at `http://localhost:3000`.

## API Endpoints

- `POST /api/auth/signup`: Create a new user account.
- `POST /api/auth/login`: Log in with an existing user account.
- `POST /api/auth/admin/signup`: Create a new admin account.
- `POST /api/auth/admin/login`: Log in with an existing admin account.
- `GET /api/courses`: Get a list of all courses.
- `GET /api/courses/:id`: Get details of a specific course.
- `POST /api/courses`: Create a new course (admin only).
- `PUT /api/courses/:id`: Update details of a specific course (admin only).
- `DELETE /api/courses/:id`: Delete a specific course (admin only).
- `POST /api/courses/:id/enroll`: Enroll in a specific course.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Author

- [KitsuneKode](https://github.com/KitsuneKode)
