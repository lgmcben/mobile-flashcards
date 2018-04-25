import * as DeckApi from '../utils/api'

export const ADD_DECK_SUCCESS = 'add_deck_success';
export const ADD_CARD_SUCCESS = 'add_card_success';
export const FETCH_DECKLIST_SUCCESS = 'fetch_decklist_success';

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
  return DeckApi.saveDeckTitle({title: title, key: key})
     .then(() => {
     		DeckApi.getDecks()
      		.then((decks) => {
      			dispatch(addDeckSuccess(decks))
      		});
     })
}

export const addDeckSuccess = decks => {
	return {
      type: ADD_DECK_SUCCESS,
      decks
    }
}

export const fetchDeckListRequest = () => dispatch => {
    return DeckApi.getDecks()
      .then(decks => dispatch(fetchDeckListSuccess(decks)))
}

export const fetchDeckListSuccess = decks => {
	return {
      type: FETCH_DECKLIST_SUCCESS,
      decks
    }
}
