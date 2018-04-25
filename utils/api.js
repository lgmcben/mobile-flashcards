import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'my_deck_storage_key'

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results)
    const arrayOfDecks = Object.keys(data).map((key) => {
      return {...data[key], id: key}
    });
    return arrayOfDecks;
  });
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results)
    return data[id];
  });
}

export function saveDeckTitle({title='', key=''} = {}) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: { title, questions: [] }
  }))
}

export function addCardToDeck({key='', question='', answer=''} = {}) {

  // Create a card object
  const card = {question: question, answer: answer};

  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
     const decks = JSON.parse(results);

     // Add new card to existing questions array
     let questions = decks[key].questions;
     questions.push(card);

     // Create new deck string
     const newDeck = JSON.stringify({
       [key]: { questions }
     });

     AsyncStorage.mergeItem(DECK_STORAGE_KEY, newDeck);
  });
}
