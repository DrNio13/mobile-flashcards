import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button, Text } from 'react-native';
import { addDeck } from '../../actions/deck';

const AddDeckScreen = (props) => {
    const [name, setName] = useState();

    const submitNewDeck = () => {
        const deck = { name, id: name.toLowerCase(), isCompleted: false }

        props.dispatch(addDeck(deck))
        props.navigation.navigate('DeckDetailsScreen', {
            deck
        });
    }

    return <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
            value={name}
            onChangeText={text => setName(text)}
            disableFullscreenUI={true}
            keyboardType='default'
        />

        <Button onPress={() => {
            submitNewDeck();
        }}
            title="Create Deck"
            color="#841584"
            accessibilityLabel="Submit a new deck"
        />
    </View>
}

export default connect()(AddDeckScreen)