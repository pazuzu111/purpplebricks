import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTheCards } from './actions/actions'
import Navbar from './components/Navbar'
import './App.css';
import { dispatch } from 'rxjs/internal/observable/range';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
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
        <pre>
          {
            JSON.stringify(this.props.cards)
          }
      </pre>
        <header className="App-header">
          <Navbar handleSearch={this.handleSearch} filteredSearch={this.handleFilteredSearch} />

          {/* {this.props.cards.cards? this.props.cards.cards.map(x => console.log(x)) : 'nothing'} */}
           
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
