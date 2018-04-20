import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

// New Question View
// An option to enter in the question
// An option to enter in the answer
// An option to submit the new question

export default class NewQuestion extends Component {
    state = {
        textQuestion: '',
        textAnswer: '',
    }
    render() {
        const { textQuestion, textAnswer } = this.state
        return (
            <View style={styles.container}>
                <TextInput>{textQuestion}</TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    textInput: {
        marginBottom: 20
    }
})
