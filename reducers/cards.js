import { ADD_CARD } from "../actions/card";

const initialState = []

export function cards(state = initialState, action) {
    switch (action.type) {
        case ADD_CARD:
            return [
                ...state,
                {
                    ...action.card
                }
            ]
        default:
            return state
    }
}

