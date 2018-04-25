import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux';

class DeckDetail extends Component {

    state = {}

    goToNewQuestionView = () => {
        this.props.navigation.navigate('NewQuestion', {key: this.props.deck.id} );
    }

    goToQuizView = () => {
        if(this.props.deck.questions.length === 0) {
            Alert.alert(
              'There is no card in this deck',
              'Please add a card first',
              [
                {text: 'OK'},
              ],
              { cancelable: true }
            )
        } else {
            this.props.navigation.navigate('Quiz', {questions: this.props.deck.questions, deckId: this.props.deck.id} );    
        }
    }

    render() {
        const { deck } = this.props;
        if(deck){
            return (
                <View style={styles.container}>
                    <Text style={styles.textLarge}>{deck.title}</Text>
                    {deck.questions?
                        <Text style={{color: 'gray'}}>{deck.questions.length} cards</Text>
                        :
                        <Text style={{color: 'gray'}}>0 cards</Text>
                    }
                    <TouchableOpacity style={styles.buttonAddCard} onPress={this.goToNewQuestionView}>
                        <Text>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStartQuiz} onPress={this.goToQuizView}>
                        <Text style={{color: 'white'}}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            )
        }else{
            return null
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    textLarge: {
        fontSize: 18
    },
    buttonAddCard: {
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
    buttonStartQuiz: {
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

function mapStateToProps ({deckList, deckDetail}, ownProps) {
    return {
        deck: deckList.decks.find(x => x.id === ownProps.navigation.state.params.id)
    }
}

export default connect(mapStateToProps, null)(DeckDetail);
