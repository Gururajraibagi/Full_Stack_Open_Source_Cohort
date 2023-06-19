/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.todos = [];
  }
  add(todo){
    this.todos.push(todo);
  }
  remove(index){
    this.todos.splice (index,1);
  }
  update(index,updatedTodo){
    //console.log("3:",this.todos[index]);
    if(this.todos[index] != null)
      this.todos[index] =updatedTodo;
  }
  getAll(){
    return this.todos;
  }
  get(indexOfTodo){
    if(this.todos[indexOfTodo] != null)
      return this.todos[indexOfTodo];
    return null;
  }
  clear(){
    this.todos=[]
  }

}


/*
let todoList= new Todo();
todoList.add('Task 1');
todoList.add('Task 2');

todoList.remove(5);
console.log(todoList.getAll())
todoList.update(3, 'Updated Task');
console.log(todoList.getAll())
*/

module.exports = Todo;
