import {
    ADD_DECK_SUCCESS,
    FECTCH_DECKLIST_SUCCESS
} from '../actions';
import { combineReducers } from 'redux';

const initialState = {
    decks: [],
}

function deckList (state = initialState, action) {
    switch (action.type) {
        case FECTCH_DECKLIST_SUCCESS:
            return {
                ...state,
                decks: action.decks
            };
        case ADD_DECK_SUCCESS:
            return {
                ...state,
                decks: [...state.decks, action.deck]
            };
        default:
            return state;
    }
}

function deckDetail (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    deckList,
    deckDetail
});
