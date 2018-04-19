import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

export default class Deck extends Component {
    state = {
        opacity: new Animated.Value(1)
    }
    render() {
        const { opacity } = this.state;
        return (
            <Animated.View key={this.props.title} style={[styles.deck, { opacity }]}>
                <Text>{this.props.title}</Text>
                <Text style={{color: 'gray'}}>{this.props.questions.length} cards</Text>
            </Animated.View>
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