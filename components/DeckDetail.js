import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class DeckDetail extends Component {

    render() {
        console.log('DeckDetail', this.props);
        return (
            <View style={styles.deck}>
                <Text>id: {this.props.navigation.state.params.id}</Text>
                <Text>{this.props.navigation.state.params.title}</Text>
                <Text style={{color: 'gray'}}>{this.props.navigation.state.params.questions.length} cards</Text>
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