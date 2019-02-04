/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';


class AddTodo extends Component {
  constructor(props){
    super(props);

    this.state = {
      newTask: '',
      showError: false
    };
  }
  updateNewTask = (event) =>{
    this.setState({newTask: event.target.value});
  }
  addNewTask = () =>{
    const { newTask } = this.state;
    if(newTask){
      this.props.toSave(newTask);
      this.setState({newTask:'',showError:false});
    }else{
      this.setState({showError: true});
    }
  }
  render() {
    const { newTask, showError } = this.state;
    return (
      <div className="addElement">
        <div>
          <input 
            type="text" 
            value={newTask}
            onChange={this.updateNewTask}
            placeholder="Create a New Task"
          />
          <button onClick={this.addNewTask}>New Task</button>
        </div>
        {showError&&<p className="error">You don't put any Task To Do</p>}
      </div>
    );
  }
}

export default AddTodo;