import { AsyncStorage } from 'react-native';

export const DECKS_KEY = '@Flashcards:decks'

export const getDecks = async () => {
    const value = await AsyncStorage.getItem(DECKS_KEY);
    console.log('getDecks', value)
    return value
}

export const getDeck = async (id) => {
    const decks = await getDecks()
    return decks.filter(d => deck.name === id).pop()
}

export const saveDeck = async (name) => {
    const decks = await getDecks();
    decks.push({ name, cards: [] });
    return await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
}

export const addCardToDeck = async (deckName, card) => {
    const allDecks = await getDecks();
    const deck = await getDeck(deckName);
    deck.cards.push(card);

    return await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(...allDecks, deck));
}