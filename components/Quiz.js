import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Quiz extends Component {


//     Quiz View
// displays a card question
// an option to view the answer (flips the card)
// a "Correct" button
// an "Incorrect" button
// the number of cards left in the quiz
// Displays the percentage correct once the quiz is complete
    render() {
        return (
            <View style={styles.container}>
                <Text>Quiz view</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
