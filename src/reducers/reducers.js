import { GET_CARDS, RECEIVE_CARDS } from '../actions/actions'

const initialState = {
    cards: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS:
        return { ...state, loading: true }

        case RECEIVE_CARDS:
        console.log("DATA HERE!!", action.cards)
        let data = action.cards
        return { ...state, cards: data, loading: false }
        
        default: return state
    }
}