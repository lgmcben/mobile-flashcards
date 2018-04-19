import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

export default class Deck extends Component {
    render() {
        return (
            <View key={this.props.title} style={styles.deck}>
                <Text>{this.props.title}</Text>
                <Text style={{color: 'gray'}}>{this.props.questions.length} cards</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    deck: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10
    }
})