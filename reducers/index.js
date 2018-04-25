import { combineReducers } from 'redux';
import {
    ADD_DECK_SUCCESS,
    FETCH_DECKLIST_SUCCESS,
    ADD_CARD_SUCCESS
} from '../actions';

const initialState = {
    decks: [],
}

function deckList (state = initialState, action) {
    // This reducer end up doing the same thing for each action until now
    // But I leave the switch statement like this for possile future logic changes
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

// I'd prefer to leave combineReducers like this in case we want to add more reducer later. Not sure if this cause bad thing like performance hit?
export default combineReducers({
    deckList,
});
