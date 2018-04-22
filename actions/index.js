import * as DeckApi from '../utils/api'

export const ADD_NEW_DECK_REQUEST = 'ADD_NEW_DECK_REQUEST';
export const ADD_NEW_DECK_SUCCESS = 'ADD_NEW_DECK_SUCCESS';
export const FECK_DECKLIST_SUCCESS = 'FECK_DECKLIST_SUCCESS';

export const fetchDeckListRequest = () => dispatch => (
    DeckApi.getDecks()
       .then(decks => dispatch(fetchDeckListSuccess(decks)))
);

export const fetchDeckListSuccess = decks => (
    {
        type: FECK_DECKLIST_SUCCESS,
        decks
    }
);
