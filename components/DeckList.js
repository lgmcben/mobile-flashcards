import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as DeckApi from '../utils/api'

export default class DeckList extends Component {

    state = {}

    componentDidMount() {
        this.setState({ decks: DeckApi.getDecks()})


    }
    render() {
        return (
            <View style={styles.deck}>
                <Text>{this.state.decks && JSON.stringify( Object.keys(this.state.decks) )}</Text>


            </View>
        )
    }

}

const styles = StyleSheet.create({
    deck: {
        marginTop: 100
    }
})
