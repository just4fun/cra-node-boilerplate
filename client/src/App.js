import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    funText: null
  }

  handleButtonClick = () => {
    fetch('api/have_some_fun', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'just4fun'
      })
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        funText: response.data
      });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Click button below to call Node API.
          </p>
          <button
            onClick={this.handleButtonClick}>
            Click me!
          </button>
          <p className="App-response">
            {this.state.funText}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
