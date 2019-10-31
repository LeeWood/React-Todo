import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoTasks = [
  {
    task: "Cool thing!",
    id: 1,
    completed: false
  },
  {
    task: "Cool thing 2",
    id: 2,
    completed: false
  },
  {
    task: "Cool thing 3",
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  //// you will need a place to store your state in this component.
  //// design `App` to be the parent component of your application.
  //// this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: todoTasks
    };
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  toggleCompleted(taskId) {
    console.log("toggled ", taskId);

    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  }

  addTask = taskString => {
    console.log("added ", taskString);

    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          task: taskString,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };


  render() {
    return (
      <div className = "App">
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList 
          tasks = {this.state.tasks}
          toggleCompleted = {this.toggleCompleted}
        />

      </div>
    );
  }
}

export default App;
