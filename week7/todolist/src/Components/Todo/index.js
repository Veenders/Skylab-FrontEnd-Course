import React, { Component } from 'react';
import AddTodo from '../AddTodo';
import TodoList from '../todoList';
import NavBar from '../NavBar';

class Todo extends Component {
  constructor(props){
    super(props);

    const todo = localStorage.getItem('todosList')!==null? JSON.parse(localStorage.getItem('todosList')):[{id:0,name:'Example ToDo',done:false}];
    const todoId = localStorage.getItem('todosListId')!==null? JSON.parse(localStorage.getItem('todosListId')):0;
    this.state = {
      todos: todo,
      todoId: parseInt(todoId),
      view: 2
    };
  }
  addTodoToArray = (todoName) => {
    const TodoId = this.state.todoId+1;
    const newTodo = {
      id:TodoId,
      name: todoName,
      done: false
    };
    const allTodos = this.state.todos;
    allTodos.push(newTodo);
    this.setState({todos:allTodos,todoId:TodoId});
    localStorage.setItem('todosList' , JSON.stringify(allTodos));
    localStorage.setItem('todosListId', JSON.stringify(TodoId));
  }
  checkTodo = (id,checked) => {
    const allTodos = [...this.state.todos];
    allTodos.forEach((todo) =>{
      if(todo.id===id){
        todo.done = checked;
      }
    });
    this.setState({todos: allTodos});
    localStorage.setItem('todosList' , JSON.stringify(allTodos));
  }
  deleteTodo = (id) => {
    const allTodos = [...this.state.todos];
    const notDeletedNotods = allTodos.filter(todo=>todo.id!==id);
    this.setState({todos: notDeletedNotods});
    localStorage.setItem('todosList' , JSON.stringify(notDeletedNotods));
  }
  changeView = (view) => {
    this.setState({view: view});
  }
  render() {
    const { todos , view } = this.state;
    const doneTodos = todos.filter(todo=>todo.done);
    const pendingTodos = todos.filter(todo=> !todo.done);
    return (
      <div>
        <AddTodo toSave={this.addTodoToArray} />
        <NavBar onChange={this.changeView} activeView={view}/>
        { view ===1 && <TodoList 
          title="All To Do's" 
          todos={todos}
          onChangeStatus={this.checkTodo}
          onDelete={this.deleteTodo}
        />}
        {view ===2 && <TodoList 
          title="Pending To Do's" 
          todos={pendingTodos}
          onChangeStatus={this.checkTodo}
          onDelete={this.deleteTodo}
        />}
        {view ===3 && <TodoList 
          title="Complete To Do's" 
          todos={doneTodos}
          onChangeStatus={this.checkTodo}
          onDelete={this.deleteTodo}
        />}
      </div>
    );
  }
}

export default Todo;