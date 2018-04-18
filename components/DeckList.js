import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as DeckApi from '../utils/api'

export default class DeckList extends Component {
    componentDidMount() {
        console.log('test api', DeckApi.getDecks());
    }
    render() {
        return (
            <View style={styles.deck}>
                <Text>A DeckList component</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    deck: {
        marginTop: 100
    }
})