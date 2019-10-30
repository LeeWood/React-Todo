import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

const testItems = [
  {
    task: "Cool thing!",
    id: 1,
    completed: "false"
  },
  {
    task: "Cool thing 2",
    id: 2,
    completed: "false"
  },
  {
    task: "Cool thing 3",
    id: 3,
    completed: "false"
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: testItems,
      testState: "cool state"
    };
  }

  render() {
    return (
      <div className = "App">
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm />
        </div>
        
      </div>
    );
  }
}

export default App;
