
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

