import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import { connect } from 'react-redux';
import { addDeckRequest } from '../actions'

class NewDeck extends Component {
    state = {
        title: ''    
    }

    handleTitleTextChange = (title) => {
        this.setState(() => ({
            title
        }));
    }

    submitNewDeck = () => {
        const { title } = this.state;

        // Basic form validation in case user press submit without typing anything
        if (/\S/.test(title)) {
            const uuidv1 = require('uuid/v1');
            const key = uuidv1();
            this.props.navigation.navigate('DeckDetail', { id: key });
            this.props.dispatchAddNewDeck({title: title, key: key});
            this.setState({ title: ''});
        }else{
            Alert.alert(
              'Deck name is empty',
              'Please enter a deck name',
              [
                {text: 'OK'},
              ],
              { cancelable: true }
            )
        }
    }

    render() {
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

function mapDispatchToProps (dispatch) {
    return {
        dispatchAddNewDeck: (data) => dispatch(addDeckRequest(data)),
    }
}

export default connect(null, mapDispatchToProps)(NewDeck);
