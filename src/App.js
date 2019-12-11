import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './styling/App.css';

const todoTasks = [
  {
    task: "Add your first task!",
    id: 1,
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

  clearCompleted = () => {
    console.log("removed completed items");
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed;
      })
    });
  };

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
        <div className="app-head">
          <h1>Do It Why Dontcha?! </h1>
        </div>
          <main>
          <div className="form-section">
            <TodoForm 
              addTask = {this.addTask}
              clearCompleted = {this.clearCompleted}
            />
          </div>
          <div className="lists">
          <TodoList 
            tasks = {this.state.tasks}
            toggleCompleted = {this.toggleCompleted}
          />
          </div>
          </main>
      </div>
    );
  }
}

export default App;
