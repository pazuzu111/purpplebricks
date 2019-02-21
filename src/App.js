import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { getTheCards } from './actions/actions'
import './App.css';
import { dispatch } from 'rxjs/internal/observable/range';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getTheCards('')
  }
  render() {
    return (
      <div className="App">
        <pre>
          {
            JSON.stringify(this.props.cards)
          }
      </pre>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.props.cards.cards? this.props.cards.cards.map(x => console.log(x)) : 'nothing'}
           
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cards: state.cards, loading: state.loading };
};

const mapDispatchToProps = dispatch => {
    return {
      getTheCards: name => dispatch(getTheCards(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
