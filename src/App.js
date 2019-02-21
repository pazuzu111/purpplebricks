import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTheCards, filterTheCards } from './actions/actions'
import Navbar from './components/Navbar'
import Cards from './components/Cards'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.searchPokemon('')
  }

  searchPokemon = name => { this.props.getTheCards(name) }

  filterPokemon = name => { this.props.filterTheCards(name) }

  render() {
    return (
      <div className="App">
          <Navbar handleSearch={this.searchPokemon} filterPokemon={this.filterPokemon} />
          <Cards loading={this.props.loading} cards={this.props.cards} />           
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cards: state.cards, loading: state.loading };
};

const mapDispatchToProps = dispatch => {
    return {
      getTheCards: name => dispatch(getTheCards(name)),
      filterTheCards: type => dispatch(filterTheCards(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
