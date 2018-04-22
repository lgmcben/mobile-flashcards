import * as DeckApi from '../utils/api'
export const ADD_DECK_SUCCESS = 'add_deck_success';
export const FECTCH_DECKLIST_SUCCESS = 'fetch_decklist_success';

export const addDeckRequest = (title, key) => dispatch => {
	console.log('action addDeckRequest');
    return DeckApi.saveDeckTitle(title, key)
       .then(() => {
       		console.log('saveDeckTitle success in actions')
       		DeckApi.getDeck(key)
        		.then((deck) => { dispatch(addDeckSuccess(deck)) });	
       })
}

export const addDeckSuccess = deck => {
	console.log('addDeckSuccess deck = ', deck);
	return {
        type: ADD_DECK_SUCCESS,
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
