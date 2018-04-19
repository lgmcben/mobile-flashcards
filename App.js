import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'
import { TabNavigator, StackNavigator } from 'react-navigation'

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

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetail: {
    screen: DeckDetail,
  }
}, {
  headerMode: 'none'
})

export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
          <MainNavigator />
    );
  }
}
