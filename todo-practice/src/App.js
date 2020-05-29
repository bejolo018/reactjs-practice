import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state ={
    todos:[
      {
        id: 1,
        title: 'Ghost In The Shell',
        completed: true
      },
      {
        id: 2,
        title: 'Your Name',
        completed: true
      },
      {
        id: 3,
        title: 'Promare',
        completed: false
      },
    ]
  }


render() {
  return (
    <div className="App">
        <Todos todos={this.state.todos} />
    </div>
  );
}
}
export default App;
