import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import * as DeckApi from '../utils/api'

// New Question View
// An option to enter in the question
// An option to enter in the answer
// An option to submit the new question

export default class NewDeck extends Component {
    state = {
        title: ''    
    }

    handleTitleTextChange = (title) => {
        this.setState(() => ({
            title
        }));
    }

    submitNewDeck = () => {
        const uuidv1 = require('uuid/v1');
        const key = uuidv1();
        DeckApi.saveDeckTitle(this.state.title, key);
    }

    render() {
        console.log('NewDeck state = ', this.state);
        const { title } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Please enter a title for your new Deck</Text>
                <TextInput
                    style={styles.textInput}
                    value={title}
                    onChangeText={this.handleTitleTextChange}/>
                <TouchableOpacity style={styles.buttonSubmit} onPress={this.submitNewDeck}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    textTitle: {
        marginBottom: 50
    },
    textInput: {
        marginBottom: 5,
    },
    buttonSubmit: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    },
})
