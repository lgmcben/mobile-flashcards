import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class NewQuestion extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>New Question View</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
