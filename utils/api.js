import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'my_deck_storage_key'

const tempData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

export function getDecks() {
      const arrayOfDecks = Object.keys(tempData).map((key) => {
        return {...tempData[key], id: key}
      });
  return arrayOfDecks;
}

export function getDeck(id) {
    return tempData[id];
}

export function saveDeckTitle(title) {

}

export function addCardToDeck(title, card) {

}
