import React from 'react';
import '../../styling/TodoForm.css';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  handleChange = event => {
    this.setState({
      todo: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.todo !== "") {
      this.props.addTask(this.state.todo);
      this.setState({
        todo: ""
      });
    }
  };

  render() {
    //console.log("...rendering form"); form functionality working
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input 
            className="text-bar"
            onChange={this.handleChange}
            type = "text"
            name = "todo"
            value = {this.state.todo} 
            placeholder = "Enter A New Task!"
          />
          <div className="buttons">
            <button className="add-btn">Add Task</button>
            <button className="clear-btn" onClick={this.props.clearCompleted}>Clear Completed</button>
          </div>
        </form>
      </div>
      
    );
  }
}

export default TodoForm;