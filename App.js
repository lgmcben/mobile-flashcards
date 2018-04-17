import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <DeckList />
          <NewDeck />
        </View>
      </Provider>
    );
  }
}
