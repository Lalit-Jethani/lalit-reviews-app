import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Components/Search/Search';
import ReviewsList from './Components/Reviews/ReviewList'
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
