export const GET_DECKS_SUCCESS = 'GET_DECKS_SUCCESS'

export function getDecksSuccess (decks) {
    return {
        type: GET_DECKS_SUCCESS,
        decks
    }
}