import {
    CardActions,
    CardsEnum, CardType, GetCardsType,
    // GetCardsType,
    InitialCardsStateType,
    PostCardType,
    PutCardType
} from "./cardsTypes";


export const initialCardsState: InitialCardsStateType = {
    cards: [] as GetCardsType[],
    newCard: {} as PostCardType,
    changedCard: {} as PutCardType,
    // cards: [] as CardType[],

    cardAnswer: '',
    cardQuestion: '',
    cardsPack_id: '',
    min: 0,
    max: 5,
    sortCards: 0,
    page: 1,
    pageCount: 4,
    cardsTotalCount: 0,
    question: 'q2q1',
    answer: 'aa21',
    grade: 0,
    shots: 0,
    _id: '',
    searchTerm: '',
    user_id: '',

    isFetching: false,
    error: '',
}

export const cardsReducer = (state = initialCardsState, action: CardActions): InitialCardsStateType => {
    switch (action.type) {
        case CardsEnum.PACK_ID:
        case CardsEnum.PAGE:
        case CardsEnum.PAGE_COUNT:
        case CardsEnum.TOTAL_COUNT:
        case CardsEnum.MIN:
        case CardsEnum.MAX:
        case CardsEnum.SORT_CARDS:
        case CardsEnum.QUEST:
        case CardsEnum.ANSWER:
        case CardsEnum.FETCHING:
        case CardsEnum.FETCH_ERROR:
        case CardsEnum.SEARCH_CARD:
            return {...state, ...action.payload}
        case CardsEnum.FETCH_ALL_CARDS:
            return {...state, cards: action.cards}
        case CardsEnum.SET_CARD:
            return {...state, newCard: action.newCard}
        case CardsEnum.DELETE_CARD:
            return {...state, cards: state.cards.filter(delCard => delCard._id !== action._id)}
        case CardsEnum.UPDATE_CARD:
            return {...state, changedCard: action.changedCard}
        // return {...state, cards: state.cards.map(card => card._id === action.cardId ? {...card, question: action.newQuestion} : card)}
        default:
            return state
    }
}

