import {CardActions, CardsEnumActions, CardsType} from "./cardsTypes";


const initialState = {
    cards: [] as CardsType[],
    cardsPack_id: '5eb6a2f72f849402d46c6ac7',
    page: 1,
    pageCount: 4,
}

export type InitialStateType = typeof initialState

export const cardsReducer = (state = initialState, action: CardActions): InitialStateType => {
    switch (action.type) {
        case CardsEnumActions.FETCH_CARDS:
            return {
                ...state,
                cards: action.data.cards,
                page: action.data.page,
                pageCount: action.data.pageCount,
            }
        case CardsEnumActions.SET_CARD:
            return {...state,}
        case CardsEnumActions.DELETE_CARD:
            return {...state}
        case CardsEnumActions.UPDATE_CARD:
            return {...state}
        default:
            return state
    }
}
