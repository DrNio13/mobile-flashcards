import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateDeck } from '../../actions/deck';

const StartQuizScreen = (props) => {
    const { deck, deckCards } = props.route.params
    const [index, setIndex] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
    const [completed, setCompleted] = useState(false)
    const correctCounter = useRef(0)

    const isCompleted = () => {
        return index === deckCards.length
    }

    return deckCards[index] ? <View>
        <Text>{deckCards[index].question}?</Text>
        <Text>{deckCards.length - (index + 1)} questions remaining. Total {deckCards.length}</Text>

        <Button onPress={() => {
            setShowAnswer(true);
        }}
            title="Show answer"
            color="#841584"
            accessibilityLabel="Show answer"
        />

        {showAnswer && <Text>Answer: {deckCards[index].answer}</Text>}

        <Button onPress={() => {
            correctCounter.current++
            setIndex(index + 1)
            setShowAnswer(false)
            if (isCompleted()) {
                props.dispatch(updateDeck({
                    ...deck,
                    isCompleted: true
                }))
            }
        }}
            disabled={index === deckCards.length}
            title="Correct"
            color="#841584"
            accessibilityLabel="mark as correct"
        />

        <Button onPress={() => {
            setIndex(index + 1)
            setShowAnswer(false)
            if (isCompleted()) {
                props.dispatch(updateDeck({
                    ...deck,
                    isCompleted: true
                }))
            }
        }}
            disabled={index === deckCards.length}
            title="Not Correct"
            color="#841584"
            accessibilityLabel="mark as correct"
        />
    </View> : <View>
            <Text>Correct Answers: {correctCounter.current}</Text>
            <Button onPress={() => {
                setIndex(0)
                setShowAnswer(false)
                correctCounter.current = 0
                props.dispatch(updateDeck({
                    ...deck,
                    isCompleted: false
                }))
            }}
                title="Restart quiz"
                color="#841584"
                accessibilityLabel="Restart quiz"
            />

            <Button onPress={() => {
                props.navigation.goBack()
            }}
                title="Go to Deck view"
                color="#841584"
                accessibilityLabel="Back to Deck"
            />
        </View>
}

export default connect()(StartQuizScreen)