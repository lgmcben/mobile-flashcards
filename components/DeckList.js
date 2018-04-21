import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import * as DeckApi from '../utils/api'
import Deck from './Deck'

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

export default class DeckList extends Component {

    state = {}

    componentDidMount() {
        const decks = DeckApi.getDecks()
            .then((arrayOfDecks) => this.setState({ decks: arrayOfDecks }));

    }

    renderItem = ({ item }) => {
        return <Deck {...item} navigation={this.props.navigation} />
    }

    render() {
        console.log('DeckList state = ', this.state);
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.decks}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    }
})
