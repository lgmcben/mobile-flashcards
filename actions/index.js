import * as DeckApi from '../utils/api'

export const ADD_NEW_DECK_REQUEST = 'ADD_NEW_DECK_REQUEST';
export const ADD_NEW_DECK_SUCCESS = 'ADD_NEW_DECK_SUCCESS';
export const FECTCH_DECKLIST_SUCCESS = 'FECTCH_DECKLIST_SUCCESS';

export const addDeckRequest = (title, key) => dispatch => {
	console.log('action addDeckRequest');
    return DeckApi.saveDeckTitle(title, key)
       .then(() => {
       		console.log('saveDeckTitle success in actions')
       		dispatch(addDeckSuccess(deck))
       })
}

export const addDeckSuccess = deck => {
	// console.log('fetchDeckListSuccess');
	return {
        type: ADD_NEW_DECK_SUCCESS,
        deck
    }
}

export const fetchDeckListRequest = () => dispatch => {
	// console.log('action fetchDeckListRequest');
    return DeckApi.getDecks()
       .then(decks => dispatch(fetchDeckListSuccess(decks)))
}
	


export const fetchDeckListSuccess = decks => {
	// console.log('fetchDeckListSuccess');
	return {
        type: FECTCH_DECKLIST_SUCCESS,
        decks
    }
}
    

