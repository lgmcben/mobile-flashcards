import {
    ADD_NEW_DECK_SUCCESS,
    FECK_DECKLIST_SUCCESS
} from '../actions';
import { combineReducers } from 'redux';

const initialState = {
    deckList: [],
    deckDetail: {}
}

function deckList (state = {}, action) {
    switch (action.type) {
        case FECK_DECKLIST_SUCCESS:
            return {
                ...state,
                comments: [...state.comments, action.newComment]
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
