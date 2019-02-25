import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from './reducers/reducers'
import { GET_CARDS, RECEIVE_CARDS, FILTER_CARDS } from './actions/actions';
import * as actions from './actions/actions'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

const cards = [{data: {title: 'one'}}]

describe('fetch reducer', () => {
  it('has a default state', () => {
    expect(reducers(undefined, {}))
    .toMatchSnapshot()
  })
  
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

describe('testing getCards action', () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore();
  
  beforeEach(() => {
    store.clearActions();
  });

  it('should dispatch the getCards action and payload', () => {
    const expectedAction = [{ 'name': '', 'type': 'GET_CARDS' },]

    store.dispatch(actions.getCards(''))
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should dispatch the receiveCards action and payload', () => {
    const expectedAction = [{ 'name': '', 'type': 'RECEIVE_CARDS', cards: cards },]

    store.dispatch(actions.receiveCards('', cards))
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should dispatch the filterCards action and payload', () => {
    const expectedAction = [{ 'pokemonType': 'mega', 'type': 'FILTER_CARDS'}]

    store.dispatch(actions.filterCards('mega'))
    expect(store.getActions()).toEqual(expectedAction)
  })


})