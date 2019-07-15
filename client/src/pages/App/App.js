import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
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
      <Fragment>
        <Header />
        <Link to="/about">
          Go to `/about` page
        </Link>
        <p>
          Click button below to call Node API.
        </p>
        <button
          onClick={this.handleButtonClick}>
          Click me!
        </button>
        <p className="response-text">
          {this.state.funText}
        </p>
      </Fragment>
    );
  }
}

export default App;
