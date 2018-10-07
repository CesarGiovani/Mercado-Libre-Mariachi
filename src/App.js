import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Productos from './Productos';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <Productos/>
      </div>
    );
  }
}

export default App;
