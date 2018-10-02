import React, { Component } from 'react';
import './App.css';
import SuperBasic from './Components/SuperBasic';
import CheckEmOut from './Components/CheckEmOut';

class App extends Component {
  render() {
    return (
          <div className="App">
            <SuperBasic />
            <CheckEmOut />
          </div>
    );
  }
}

export default App;
