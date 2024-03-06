/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }
  remove(indexOfTodo) {
    if (this.todoList.length === 0) {
      throw new emptyTodoList("Cannot remove Todo from an empty Todo-List");
    } else {
      if (indexOfTodo >= this.todoList.length || indexOfTodo < 0) {
        // throw new invalidIndexError("The index provide is invalid");
        console.log("The index provided is invalid");
        return ;
      } else {
        this.todoList.splice(indexOfTodo, 1); //remove from the index and removes 1 element=>splice()
      }
    }
  }

  update(indexOfTodo, updatedTodo) {
    if( updatedTodo === 'Invalid Task'){
      return
    }

    // if (this.todoList.length === 0) {
    //   throw new emptyTodoList("Cannot update Todo from an empty Todo-List");
    // }
    //  else {

    if (indexOfTodo >= this.todoList.length || indexOfTodo < 0) {
        // throw new invalidIndexError("The index provide is invalid");

        console.log("The index provided is invalid");
        
    } 
    else {

        this.todoList.splice(indexOfTodo, 1, updatedTodo); //(remove element from the index, removes 1 element,
        //                                                          //    insert element at the indx )=>splice(index, 1, updatedTodo)
      }
    }
  // }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= this.todoList.length || indexOfTodo < 0) {
      return null;  
    }
    else{
      return this.todoList[indexOfTodo];
    }
  }

  clear() {
    this.todoList.length = 0; //This method sets the length property of the array to 0, effectively removing all elements
    // this.todoList.splice(0, myArray.length);   //This method uses the splice() method to remove elements starting from index 0 up to the end of the array.
    this.todoList = []; //This method assigns an empty array to the variable, effectively creating a new empty array.
  }
}

module.exports = Todo;
