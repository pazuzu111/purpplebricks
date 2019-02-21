import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            Learn React
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cards: state.cards, loading: state.loading };
};

export default connect(mapStateToProps)(App);
