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
                {this.state.decks && Object.keys(this.state.decks).map((key) => {
                    return(
                        <Text key={key}>{key}</Text>
                    )
                })}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    deck: {
        marginTop: 100
    }
})
