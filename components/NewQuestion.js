import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import * as DeckApi from '../utils/api'
import { connect } from 'react-redux';
import { addCardRequest } from '../actions'

// New Question View
// An option to enter in the question
// An option to enter in the answer
// An option to submit the new question

class NewQuestion extends Component {
    state = {
        textQuestion: '',
        textAnswer: '',
    }

    handleQuestionTextChange = (textQuestion) => {
        this.setState(() => ({
            textQuestion
        }));
    }

    handleAnswerTextChange = (textAnswer) => {
        this.setState(() => ({
            textAnswer
        }));
    }

    submitNewQuestion = () => {
        console.log('key',this.props.navigation.state.params.key);
        console.log('question', this.state.textQuestion);
        console.log('answer', this.state.textAnswer);
        DeckApi.addCardToDeck({key: this.props.navigation.state.params.key, question: this.state.textQuestion, answer: this.state.textAnswer});
    }

    render() {
        console.log('NewQuestion state = ', this.state);
        const { textQuestion, textAnswer } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Please enter a question and answer</Text>
                <TextInput
                    style={styles.textInput}
                    value={textQuestion}
                    placeholder={'Question...'}
                    onChangeText={this.handleQuestionTextChange}/>
                <TextInput
                    style={styles.textInput}
                    value={textAnswer}
                    placeholder={'Answer...'}
                    onChangeText={this.handleAnswerTextChange}/>
                <TouchableOpacity style={styles.buttonSubmit} onPress={this.submitNewQuestion}>
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
        padding:10,
        marginBottom: 20
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

export default connect(null, mapDispatchToProps)(NewQuestion);
