import React from 'react';

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
    console.log(this.state.todo);
  }

  render() {
    //console.log("...rendering form"); form functionality working
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange}
          type = "text"
          name = "todo"
          value = {this.state.todo} 
          placeholder = "Enter A New Task!"
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;