import {fetchData} from '../services/fetchService'

export const GET_CARDS = 'GET_CARDS'
export const getCards = (name) => dispatch => {
    dispatch({
        type: 'GET_CARDS',
        name
    })
}

export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const receiveCards = (name, data) => dispatch => {
    dispatch({
        type: 'RECEIVE_CARDS',
        name,
        cards: data
    })
}

//action creator
export const getTheCards = (name) => dispatch => {
    dispatch(getCards(name))
    fetchData(name).then(cards => dispatch(receiveCards(name, cards)))
}

