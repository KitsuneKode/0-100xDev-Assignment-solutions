# Assignment-4-2-React

https://github.com/KitsuneKode/React-TodoApp/assets/135751082/feb2eb3d-0d5d-4ecc-948d-6f920938ac0a


This project is a simple Todo application built with React. It allows users to add todos with a title and description, and displays the list of todos. The count of todos is also displayed.

## Features

- Add todos with a title and description
- Display the list of todos
- Display the count of todos

## Installation

To install the project, follow these steps:

1. Clone the repository: 
2. Navigate into the project directory: `cd assignment-4-2-react`
3. Install the dependencies: `npm install`

## Usage

To run the project, use the command: `npm start`

This will start the development server. You can view the application in your browser at `http://localhost:3000`.

## Project Structure

The main component of the application is `App`. This component manages the state of the todos and the input fields for the title and description. It also contains the logic for adding a new todo.

Here's a brief overview of the `App` component:

- `useState` hooks are used to manage the state of the todos (`todos`), the input fields (`title` and `description`), and the count of todos (`count`).
- The `handleTitleChange` and `handleDescriptionChange` functions update the state of the title and description input fields, respectively, when the user types into them.
- The `addTodo` function adds a new todo to the `todos` state, clears the input fields, and increments the `count`.
- The returned JSX renders the input fields, the "Add todo" button, the count of todos, and the list of todos.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

- [KitsuneKode](https://github.com/KitsuneKode)
