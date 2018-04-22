import {
    ADD_NEW_DECK_SUCCESS,
    FECTCH_DECKLIST_SUCCESS
} from '../actions';
import { combineReducers } from 'redux';

const initialState = {
    decks: [],
}

function deckList (state = initialState, action) {
    switch (action.type) {
        case FECTCH_DECKLIST_SUCCESS:
            // console.log('reducer, FECTCH_DECKLIST_SUCCESS, action.decks = ', action.decks);

            return {
                ...state,
                decks: action.decks
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
