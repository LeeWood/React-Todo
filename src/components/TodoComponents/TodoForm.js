import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChange = event => {
    this.setState({
      task: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.task);
  }

  render() {
    //console.log("...rendering form"); form functionality working
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange}
          type = "text"
          name = "task"
          value = {this.state.task} 
          placeholder = "Enter A New Task!"
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;