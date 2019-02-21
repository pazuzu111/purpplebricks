import { GET_CARDS, RECEIVE_CARDS } from '../actions/actions'

export default (state = {}, action) => {
    switch (action.type) {
        case GET_CARDS:
        return { ...state, loading: true }

        case RECEIVE_CARDS:
        console.log("DATA HERE!!")
        return { ...state, cards: action.cards, loading: false }
        
        default: return state
    }
}