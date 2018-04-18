import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import { TabNavigator } from 'react-navigation'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOption: {
      tabBarLabel: 'Deck List'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOption: {
      tabBarLabel: 'New Deck'
    }
  },
})

export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
          <Tabs />
    );
  }
}
