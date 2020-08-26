import React from 'react';
import { TextInput, View, Button, Text, AsyncStorage } from 'react-native';
import { DECKS_KEY } from '../../utils/storage';
import { addCard } from '../../actions/card';
import { connect } from 'react-redux';

const AddCardScreen = ({ dispatch, route, navigation: { goBack } }) => {
    const { deck } = route.params;
    const [question, setQuestion] = React.useState('Question');
    const [answer, setAnswer] = React.useState('Answer');
    const [data, setData] = React.useState();

    const storeData = async () => {
        try {
            dispatch(addCard({ question, answer, deckId: deck.id, isAnswered: false }));
        } catch (error) {
            // Error saving data
            console.error(error)
        }
    };

    return <View>
        <TextInput
            value={question}
            onChangeText={text => setQuestion(text)}
            disableFullscreenUI={true}
            keyboardType='default'
        />

        <TextInput
            value={answer}
            onChangeText={text => setAnswer(text)}
            disableFullscreenUI={true}
            keyboardType='default'
        />

        <Button onPress={async () => {
            storeData()
            goBack();
        }}
            title="Submit"
            color="#841584"
            accessibilityLabel="Add a new card"
        />

    </View>
}

export default connect()(AddCardScreen)