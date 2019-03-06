import React, { Component } from 'react';
import './App.css';

export default class Counter extends Component {
state={ number:0}

up=()=>
{
  this.setState({number:this.state.number+1})
}
down=()=>
{
  this.setState({number:this.state.number-1})
}
reset=()=>
{
  this.setState({number:0})
}

  render() {
    return (
      <div>                 
     
        <br/>
        <h1> Counter : {this.state.number} </h1><br/>
        <button onClick={this.up}>UP</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.down}>DOWN</button>
      </div>
    );
  }
}


