import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

const DeckDetailsScreen = ({ route, navigation, cards }) => {
    const { deck } = route.params;
    const deckCards = cards.filter(card => card.deckId === deck.id)

    return <View>
        <Text>Deck '{deck.name}' with {deckCards.length} cards</Text>

        <Button onPress={() => {
            navigation.navigate('AddCardScreen', {
                deck
            });
        }}
            title="Add Card"
            color="#841584"
            accessibilityLabel="Add Card"
        />

        <Button onPress={() => {
            navigation.navigate('StartQuizScreen', {
                deck,
                deckCards
            });
        }}
            title="Start Quiz"
            accessibilityLabel="Start Quiz"
        />
    </View>
}

function mapStateToProps(state) {
    return {
        cards: state.cards,
        decks: state.decks
    }
}

export default connect(mapStateToProps)(DeckDetailsScreen)
