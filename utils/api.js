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
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results)
    // console.log('getDecks data =', data); 
    const arrayOfDecks = Object.keys(data).map((key) => {
      return {...data[key], id: key}
    });
    return arrayOfDecks;
  });


  //     const arrayOfDecks = Object.keys(tempData).map((key) => {
  //       return {...tempData[key], id: key}
  //     });
  // return arrayOfDecks;
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results)
    console.log('get SINGLE Deck, data =', data); 
    return data[id];
  });
}

export function saveDeckTitle({title='', key=''} = {}) {
  console.log('saveDeckTitle, title = ', title);
  console.log('saveDeckTitle, key = ', key);
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: { title, questions: [] }
  }))
  console.log('saveDeckTitle promise = ', myPromise);

}

export function addCardToDeck({key='', question='', answer=''} = {}) {
  console.log('addCardToDeck key = ', key);

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

     // Merge to storage
     AsyncStorage.mergeItem(DECK_STORAGE_KEY, newDeck);
  });
}
