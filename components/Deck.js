import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'

//  This class is for displaying a deck as list item
export default class Deck extends Component {
    state = {
        bounceValue: new Animated.Value(1)
    }

    onDeckPressed = () => {
        const { bounceValue } = this.state
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 300, toValue: 1.1} ),
            Animated.timing(bounceValue, { duration: 300, toValue: 1.0} ),
        ]).start(this.goToDeckDetail);
    }

    goToDeckDetail = () => {
        this.props.navigation.navigate('DeckDetail', { id: this.props.id });
    }

    render() {
        const { bounceValue } = this.state;
        return (
            <TouchableOpacity onPress={this.onDeckPressed}>
                <Animated.View key={this.props.title} style={[styles.deck, { transform: [{ scale: bounceValue }] }]}>
                    <Text style={styles.textLarge}>{this.props.title}</Text>
                    {this.props.questions?
                        <Text style={{color: 'gray'}}>{this.props.questions.length} cards</Text>
                        :
                        <Text style={{color: 'gray'}}>0 cards</Text>
                    }
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
    },
    textLarge: {
        fontSize: 18
    },
})