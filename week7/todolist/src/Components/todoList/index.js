/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    const {title, todos, onChangeStatus, onDelete} = this.props;
    return (
      <div className="todolist">
        <h3>{title}</h3>
        {
          todos.length>0 && todos.map((todo)=>{
            return(
              <TodoItem
                id={todo.id}
                name={todo.name}
                done={todo.done}
                key={todo.id}
                onChangeStatus={onChangeStatus}
                onDelete={onDelete}
              />
            );
          })
        }
        {todos.length===0 && 'We don\'t have any To Do\'s to show'}
      </div>
    );
  }
}

export default TodoList;