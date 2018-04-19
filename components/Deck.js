import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'

export default class Deck extends Component {
    state = {
        bounceValue: new Animated.Value(1)
    }


    onDeckPressed = () => {
        console.log('onDeckPressed');
        const { bounceValue } = this.state
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 200, toValue: 1.05} ),
            Animated.spring(bounceValue, { toValue: 1, friction: 5})
        ]).start()
    }

    render() {
        const { bounceValue } = this.state;
        return (
            <TouchableOpacity onPress={this.onDeckPressed}>
                <Animated.View key={this.props.title} style={[styles.deck, { transform: [{ scale: bounceValue }] }]}>
                    <Text>{this.props.title}</Text>
                    <Text style={{color: 'gray'}}>{this.props.questions.length} cards</Text>
                </Animated.View>
            </TouchableOpacity>
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