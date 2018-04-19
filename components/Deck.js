import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Deck extends Component {
    render() {
        return (
            <View style={styles.deck}>
                <Text> {this.props.title}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    deck: {
        marginTop: 100
    }
})