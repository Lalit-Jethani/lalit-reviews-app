import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppContainer from './Components/AppContainer/AppContainer'

class App extends Component {
  render() {
    return (
      <div className = "container">
        <AppContainer />
      </div>
    );
  }
}

export default App;
