import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameComponent from './components/NameComponent'
class App extends React.Component{
    componentDidMount(){
        console.log("mounted")
    }
  render() {
      var word="hello";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit {word} <code>src/App.js</code> and save to reload.
        </p>
          <NameComponent />
      </div>

    );
  }
}

export default App;
