import React from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, View, AsyncStorage } from 'react-native';
import Deck from '../Deck';
import { DECKS_KEY } from '../AddCardScreen';
import { getDecks } from '../../actions/deck';

const DeckList = ({ navigation, dispatch, decks, cards }) => {
    return <View>
        <Text>Decks list view:</Text>
        <FlatList data={decks} renderItem={({ item }) => !!item.name && <Deck navigation={navigation} deck={item} cards={cards.filter(card => card.deckId === item.id)} />} />
    </View >
}

function mapStateToProps(state) {
    return {
        decks: state.decks,
        cards: state.cards
    }
}

export default connect(mapStateToProps)(DeckList)