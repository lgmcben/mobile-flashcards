import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ToastAndroid, Platform, Alert } from 'react-native'
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
        if (/\S/.test(this.state.textQuestion) && /\S/.test(this.state.textAnswer)) {
            this.props.dispatchAddCard({key: this.props.navigation.state.params.key, question: this.state.textQuestion, answer: this.state.textAnswer});
            this.setState({
                textQuestion: '',
                textAnswer: '',
            });
            Alert.alert(
              'Success',
              `Question ${this.state.textQuestion} added to the deck`,
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: true }
            )
            
        }else{
            // Works on both iOS and Android
            Alert.alert(
              'Question or Answer field is empty',
              'Please enter both question and answer',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: true }
            )
        }

        

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
                    onChangeText={this.handleQuestionTextChange}/>
                <TextInput
                    style={styles.textInput}
                    value={textAnswer}
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
        dispatchAddCard: (data) => dispatch(addCardRequest(data)),
    }
}

export default connect(null, mapDispatchToProps)(NewQuestion);
