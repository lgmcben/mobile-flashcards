import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as DeckApi from '../utils/api'
import { connect } from 'react-redux';
import { fetchDeckRequest } from '../actions'


class DeckDetail extends Component {

    state = {
        deck: { title: '', questions: '' }
    }

    componentDidMount() {
        // DeckApi.getDeck(this.props.navigation.state.params.id)
        // .then((deck) => { this.setState({ deck }) });
        // this.props.dispatchFetchDeck(this.props.navigation.state.params.id);


    }

    goToNewQuestionView = () => {
        this.props.navigation.navigate('NewQuestion', {} );
    }

    goToQuizView = () => {
        this.props.navigation.navigate('Quiz', {} );
    }

    render() {
        console.log('DeckDetail render() props=', this.props);
        console.log('DeckDetail render() state=', this.state);
        const { deck } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.textLarge}>{deck.title}</Text>

                {deck.questions?
                        <Text style={{color: 'gray'}}>{this.props.questions.length} cards</Text>
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
    console.log('ownProps', ownProps);
    return {
        deck: deckList.decks.find(x => x.id === ownProps.navigation.state.params.id)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        dispatchFetchDeck: (data) => dispatch(fetchDeckRequest(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);
