import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './App.css';

class App extends Component {
  state = {
    funText: null
  }

  handleButtonClick = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'just4fun'
      })
    };
    // Only verify token in PROD mode, since client and server are
    // started via two different servers (webpack and node) in DEV mode.
    if (process.env.NODE_ENV === 'production') {
      const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      Object.assign(options.headers, {
        ...options.headers,
        'CSRF-Token': token
      });
    }

    fetch('api/have_some_fun', options)
      .then(response => response.json())
      .then(response => {
        this.setState({
          funText: response.data
        });
      });
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
