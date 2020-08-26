export const ADD_DECK = 'ADD_DECK'
export const GET_DECKS = 'UPDATE_DECK'

export const addDeck = deck => ({
    type: ADD_DECK,
    deck
})

export const updateDeck = deck => ({
    type: UPDATE_DECK,
    deck
})