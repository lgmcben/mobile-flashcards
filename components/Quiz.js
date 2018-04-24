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
        numberOfCorrectGuess: 0,
        showAnswer: false,
        showSummary: false
    }

    toggleAnswer = () => {
        this.setState(previousState => ({
          showAnswer: !previousState.showAnswer
        }));
    }

    userGuessCorrect = () => {
        const { questions } = this.props.navigation.state.params;
        if(this.state.currentQuestionIndex < questions.length-1){
            this.setState(previousState => ({
              numberOfCorrectGuess: previousState.numberOfCorrectGuess+1,
              currentQuestionIndex: previousState.currentQuestionIndex+1
            }));
        }else{
            this.setState(previousState => ({
              numberOfCorrectGuess: previousState.numberOfCorrectGuess+1,
              showSummary: true
            }));
        }

    }

    userGuessIncorrect = () => {
        const { questions } = this.props.navigation.state.params;
        if(this.state.currentQuestionIndex < questions.length-1){
            this.setState(previousState => ({
              currentQuestionIndex: previousState.currentQuestionIndex+1
            }));
        }else{
            this.setState({ showSummary: true});
            console.log('last question');
        }
    }

    restartQuiz = () => {
        this.setState({
            currentQuestionIndex: 0,
            numberOfCorrectGuess: 0,
            showAnswer: false,
            showSummary: false
        })
    }

    backToDeck = () => {
        this.props.navigation.goBack();
    }

    render() {
        console.log('Quiz props = ', this.props)
        console.log('Quiz state = ', this.state)
        const { questions } = this.props.navigation.state.params;

        // I'm not sure why {this.state.showSummary ? xxx : xxx } won't work
        // Uncaught (in promise) Error: DeltaPatcher should receive a fresh Delta when being initialized
        if(this.state.showSummary){
            return (
                <View style={styles.container}>
                    <Text style={styles.textQuestion}>You nailed {this.state.numberOfCorrectGuess} out of {questions.length} cards</Text>
                    <TouchableOpacity style={styles.buttonRestartQuiz} onPress={this.restartQuiz}>
                        <Text>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBackToDeck} onPress={this.backToDeck}>
                        <Text style={{color: 'white'}}>Back to Deck</Text>
                    </TouchableOpacity>
                </View>

            )
        }else {
            return (
                <View style={styles.container}>
                    <View style={styles.cardNumberContainer}>
                        <Text>Card # {this.state.currentQuestionIndex + 1} / {questions.length}</Text>
                    </View>
                    {this.state.showAnswer ?
                        <Text style={styles.textAnswer}>{questions[this.state.currentQuestionIndex].answer}</Text>
                        :
                        <Text style={styles.textQuestion}>{questions[this.state.currentQuestionIndex].question}</Text>
                    }
                    <TouchableOpacity style={styles.buttonShowAnswer} onPress={this.toggleAnswer}>
                    {this.state.showAnswer ?
                        <Text>Show question</Text>
                        :
                        <Text>Show answer</Text>
                    }
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCorrect} onPress={this.userGuessCorrect}>
                        <Text style={{color: 'white'}}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonIncorrect} onPress={this.userGuessIncorrect}>
                        <Text style={{color: 'white'}}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            )
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardNumberContainer: {
        marginBottom: 30,
    },
    textQuestion: {
        fontSize: 24,
    },
    textSummary: {
        fontSize: 24,
    },
    textAnswer: {
        fontSize: 24,
        color: 'green'
    },
    buttonShowAnswer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        marginBottom: 30,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    buttonCorrect: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'green'
    },
    buttonIncorrect: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'red'
    },
    buttonRestartQuiz: {
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
    buttonBackToDeck: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'black'
    }
})
