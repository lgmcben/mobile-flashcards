import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class NewDeck extends Component {
    render() {
        return (
            <View style={styles.deck}>
                <Text>A NewDeck component</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    deck: {
        marginTop: 100
    }
})