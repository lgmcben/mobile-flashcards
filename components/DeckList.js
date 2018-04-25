import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { fetchDeckListRequest } from '../actions'
import Deck from './Deck'

class DeckList extends Component {

    state = {}

    componentDidMount() {
        this.props.dispatchFetchDeckList();
    }

    renderItem = ({ item }) => {
        return <Deck {...item} navigation={this.props.navigation} />
    }

    render = () => {
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
