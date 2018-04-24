import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Quiz extends Component {


//     Quiz View
// displays a card question
// an option to view the answer (flips the card)
// a "Correct" button
// an "Incorrect" button
// the number of cards left in the quiz
// Displays the percentage correct once the quiz is complete
    state = {
        currentQuestionIndex: 0,
        showAnswer: false
    }

    toggleAnswer = () => {
        this.setState(previousState => ({
          showAnswer: !previousState.showAnswer
        }));
    }
    render() {
        console.log('Quiz props = ', this.props)
        console.log('Quiz state = ', this.state)
        const { questions } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Text>{this.state.currentQuestionIndex} / {questions.length}</Text>
                {this.state.showAnswer ?
                    <Text>{questions[this.state.currentQuestionIndex].answer}</Text>
                    :
                    <Text>{questions[this.state.currentQuestionIndex].question}</Text>
                }
                <TouchableOpacity style={styles.buttonAddCard} onPress={this.toggleAnswer}>
                {this.state.showAnswer ?
                    <Text>Show question</Text>
                    :
                    <Text>Show answer</Text>
                }
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
