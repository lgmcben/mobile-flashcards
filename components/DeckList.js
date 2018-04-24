import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Deck from './Deck'
import { fetchDeckListRequest } from '../actions'
import { connect } from 'react-redux';

const tempData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

class DeckList extends Component {

    state = {}

    componentDidMount() {
        // console.log('DeckList componentDidMount this.props = ', this.props);
        // console.log('DeckList componentDidMount this.state = ', this.state);
        this.props.dispatchFetchDeckList();
    }

    renderItem = ({ item }) => {
        return <Deck {...item} navigation={this.props.navigation} />
    }

    render = () => {
        // console.log('DeckList render state = ', this.state);
        // console.log('DeckList render props = ', this.props);
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.decks}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    }
})

function mapStateToProps ({deckList, deckDetail}, ownProps) {
    return {
        decks: deckList.decks,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        dispatchFetchDeckList: (data) => dispatch(fetchDeckListRequest(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
