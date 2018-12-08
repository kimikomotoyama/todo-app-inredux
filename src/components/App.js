import React, { Component } from 'react';
import '../styles/App.css';
import TaskContainer from "./TaskContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskContainer />
      </div>
    );
  }
}

export default App;
