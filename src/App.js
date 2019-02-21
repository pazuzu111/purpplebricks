import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTheCards } from './actions/actions'
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

  // handleSubmit = () => {

  // }

  searchPokemon = name => {
    this.props.getTheCards(name)
  }

  // filterPokemon = name => {
  //   this.props.getCards(name)
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar handleSearch={this.handleSearch} filteredSearch={this.handleFilteredSearch} />
          <Cards loading={this.props.loading} cards={this.props.cards} />           
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
