import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as DeckApi from '../utils/api'

export default class DeckDetail extends Component {

    state = {
        deck: {}
    }

    componentDidMount() {
        const deck = DeckApi.getDeck(this.props.navigation.state.params.id);
        console.log('DeckDetail', deck);
        this.setState({ deck });
    }

    render() {
        console.log('DeckDetail render() props=', this.props);
        console.log('DeckDetail render() state=', this.state);
        const { deck } = this.state;
        console.log('deck=', deck);
        const numberOfQuestions = deck.questions;
        console.log('numberOfQuestions=', numberOfQuestions);
        return (

            <View style={styles.deck}>
                <Text>title: {deck.title}</Text>
                {deck.questions && <Text>{deck.questions.length} cards</Text>}
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
