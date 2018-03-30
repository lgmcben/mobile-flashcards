import { GET_DECKS_SUCCESS } from '../actions'

function decks (state = {}, action) {
    switch (action.type) {
        case GET_DECKS_SUCCESS:
            return {
                ...state,
                ...action.decks
            }
        default:
            return state
    }
}

export default decks;
