import {
    ADD_DECK_SUCCESS,
    FETCH_DECKLIST_SUCCESS,
    FETCH_DECK_SUCCESS,
    ADD_CARD_SUCCESS
} from '../actions';
import { combineReducers } from 'redux';

const initialState = {
    decks: [],
    deck: {}
}

function deckList (state = initialState, action) {
    switch (action.type) {
        case FETCH_DECKLIST_SUCCESS:
            return {
                ...state,
                decks: action.decks
            };
        case ADD_DECK_SUCCESS:
            return {
                ...state,
                decks: action.decks
            };
        case ADD_CARD_SUCCESS:
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

        case FETCH_DECK_SUCCESS:
            console.log('reducer FETCH_DECK_SUCCESS, action =', action)
            return {
                ...state,
                deck: action.deck
            };
        default:
            return state;
    }
}

export default combineReducers({
    deckList,
    deckDetail
});
