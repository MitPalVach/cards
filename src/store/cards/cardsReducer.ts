import {CardActions, CardsEnumActions, InitialCardsStateType} from "./cardsTypes";


export const initialCardsState = {
    cardsPack_id: '5f0ca6c5d1c4700004fe4cf3', // <<<===
    answer: '' as string | undefined,
    question: '' as string | undefined,
    grade: 0,
    page: 1,
    pageCount: 4,
    _id: '' ,
    isFetching: false,
    error: '',
}

export const cardsReducer = (state = initialCardsState, action: CardActions): InitialCardsStateType => {
    switch (action.type) {
        case CardsEnumActions.FETCH_CARDS:
            return {
                ...state,
                cardsPack_id: action.cardsPack_id,
                answer: action.answer,
                question: action.question
            }
        case CardsEnumActions.SET_CARD:
            return {
                ...state,
                cardsPack_id: action.card.cardsPack_id,
                answer: action.card.answer,
                question: action.card.question,
                grade: action.card.grade,
                page: action.card.page,
            }
        case CardsEnumActions.DELETE_CARD:
            return {
                ...state,
                _id: action._id
            }
        case CardsEnumActions.UPDATE_CARD:
            return {
                ...state,
                question: action.question,
                _id: action._id,
            }
        case CardsEnumActions.SET_CARD_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case CardsEnumActions.FETCH_CARD_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}
