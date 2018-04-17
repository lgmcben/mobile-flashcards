import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class DeckList extends Component {
    render() {
        return (
            <View style={styles.deck}>
                <Text>A DeckList component 2</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    deck: {
        marginTop: 100
    }
})