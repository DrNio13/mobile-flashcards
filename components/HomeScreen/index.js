import React from 'react';
import { View, Button } from 'react-native';
import DeckList from '../DeckList';

export function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <DeckList navigation={navigation} />
            <Button onPress={() => {
                navigation.navigate('AddDeckScreen', {

                });
            }}
                title="Add new Deck"
                color="#841584"
                accessibilityLabel="Add a new deck"
            />
        </View>
    );
}