import React, { Component } from 'react';
import Counter from './Counter'
import Todo from './Todo'
import Github from './Github'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <br/> <h1>React-myApp</h1><br/>  
        </div> <br/>

        <Counter />
        <Todo />
        <Github />
      </div>
    );
  }
}


