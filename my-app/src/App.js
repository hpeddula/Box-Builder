import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Box-Builder';
import BoxBuilder from './Box-Builder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoxBuilder/>
      </div>
    );
  }
}

export default App;
