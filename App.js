import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Deck from './components/Deck'

export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <View>
        <Deck />
      </View>
    );
  }
}
