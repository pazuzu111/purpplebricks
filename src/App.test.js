import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from './reducers/reducers'
import { GET_CARDS, RECEIVE_CARDS, FILTER_CARDS } from './actions/actions';


describe('fetch reducer', () => {
  it('has a default state', () => {
    expect(reducers(undefined, {}))
    .toEqual({ cards: []})
  })
  
  const cards = [{data: {title: 'one'}}]
  it('handles GET_CARDS request', () => {
    expect(reducers(undefined, {
      type:   GET_CARDS,
      payload: {
       name: ''
      }
    })).toEqual({
      loading: true,
      cards: []
    })
  })

  it('handles RECEIVE_CARDS request', () => {
    expect(reducers([], {
      type:   RECEIVE_CARDS,
      payload: {
        name: '',
        cards: cards
      }
    })).toEqual({
      loading: false
    })
  })

  it('handles FILTER_CARDS request', () => {
    expect(reducers(undefined, {
      type:   FILTER_CARDS,
      payload: {
        pokemonType: 'mega'
      }
    })).toEqual({
      loading: true,
      cards: []
    })
  } )
})