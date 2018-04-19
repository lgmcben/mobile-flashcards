import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class DeckDetail extends Component {

    render() {
        return (
            <View style={styles.deck}>
                <Text>Individual Deck View</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    deck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10
    }
})