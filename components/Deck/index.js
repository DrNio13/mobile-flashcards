import React from 'react';
import { Text, Button, View } from 'react-native';
import { connect } from 'react-redux';

const Deck = ({ route, navigation, deck, cards }) => {
    const deckCards = cards.filter(card => card.deckId === deck.id)

    return <View>
        <Text>Deck '{deck.name}' with {deckCards.length} cards</Text>

        <Button
            title="Go to Deck details"
            onPress={() => {
                navigation.navigate('DeckDetailsScreen', {
                    deck,
                    cards
                });
            }}
        />
    </View>
}

function mapStateToProps(state) {
    return {
        cards: state.cards
    }
}
export default connect(mapStateToProps)(Deck)