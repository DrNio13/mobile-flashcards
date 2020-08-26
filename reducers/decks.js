import { ADD_DECK } from "../actions/deck";

const initialState = []

export function decks(state = initialState, action) {
    switch (action.type) {
        case ADD_DECK:
            return [
                ...state,
                {
                    ...action.deck
                }
            ]
        default:
            return state
    }
}

