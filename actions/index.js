import * as DeckApi from '../utils/api'

export const ADD_DECK_SUCCESS = 'add_deck_success';
export const ADD_CARD_SUCCESS = 'add_card_success';
export const FETCH_DECKLIST_SUCCESS = 'fetch_decklist_success';
export const FETCH_DECK_SUCCESS = 'fetch_deck_success';

export const addCardRequest = ({key='', question='', answer=''} = {}) => dispatch => {
  console.log('action addCardRequest');
    return DeckApi.addCardToDeck({key: key, question: question, answer: answer})
       .then(() => {
          DeckApi.getDecks()
            .then((decks) => {
              dispatch(addCardSuccess(decks))
            });
       })
}

export const addCardSuccess = decks => {
  console.log('addCardSuccess, decks = ', decks )
  return {
        type: ADD_CARD_SUCCESS,
        decks
    }
}

export const addDeckRequest = ({title, key} = {}) => dispatch => {
	console.log('action addDeckRequest');
    return DeckApi.saveDeckTitle({title: title, key: key})
       .then(() => {
       		DeckApi.getDecks()
        		.then((decks) => {
        			dispatch(addDeckSuccess(decks))
        		});
       })
}

export const addDeckSuccess = decks => {
	console.log('addDeckSuccess decks = ', decks);
	return {
        type: ADD_DECK_SUCCESS,
        decks
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
        type: FETCH_DECKLIST_SUCCESS,
        decks
    }
}

export const fetchDeckRequest = (id) => dispatch => {
	console.log('fetchDeckRequest id =', id)
	return DeckApi.getDeck(id)
       .then(deck => { dispatch(fetchDeckSuccess(deck)) });
}

export const fetchDeckSuccess = deck => {
	console.log('fetchDeckSuccess deck = ', deck);
	return {
        type: FETCH_DECK_SUCCESS,
        deck
    }
}
