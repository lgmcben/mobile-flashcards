import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import * as DeckApi from '../utils/api'
import Deck from './Deck'

export default class DeckList extends Component {

    state = {}

    componentDidMount() {
        const decks = DeckApi.getDecks();
        this.setState({ decks })
    }

    renderItem = ({ item }) => {
        return <Deck {...item} navigation={this.props.navigation} />
    }

    render() {
        return (
            <View style={styles.deck}>
                <FlatList
                    data={this.state.decks}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    deck: {
        marginTop: 100
    }
})
