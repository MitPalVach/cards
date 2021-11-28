import {
    fetchCardError,
    fetchAllCards,
    removeCard,
    setCard,
    setCardIsFetching,
    updateCard,
    fetchCardPage,
    fetchPackId,
    fetchCardPageCount,
    fetchMin,
    fetchMax,
    fetchSortCards,
    fetchCardQuestion,
    fetchCardAnswer, fetchCardTotalCount
} from "./cardsActions";


export enum CardsEnum {
    FETCH_ALL_CARDS = 'CARDS/FETCH_ALL_CARDS',
    PACK_ID = 'CARDS/FETCH_PACK_ID',
    PAGE = 'CARDS/FETCH_CARDS_PAGE',
    PAGE_COUNT = 'CARDS/FETCH_CARDS_PAGE_COUNT',
    TOTAL_COUNT = 'CARDS/FETCH_CARDS_TOTAL_COUNT',
    MIN = 'CARDS/FETCH_MIN',
    MAX = 'CARDS/FETCH_MAX',
    SORT_CARDS = 'CARDS/FETCH_SORT_CARDS',
    QUEST = 'CARDS/FETCH_CARD_QUESTION',
    ANSWER = 'CARDS/FETCH_CARD_ANSWER',
    SET_CARD = 'CARDS/SET_CARD',
    DELETE_CARD = 'CARDS/DELETE_CARD',
    UPDATE_CARD = 'CARDS/UPDATE_CARD',
    FETCHING = 'CARDS/SET_CARD_IS_FETCHING',
    FETCH_ERROR = 'CARDS/FETCH_CARD_ERROR',
}

export type InitialCardsStateType = {
    cards: GetCardsType[]
    newCard: PostCardType
    changedCard: PutCardType

    cardAnswer: string
    cardQuestion: string
    cardsPack_id: string
    min: number
    max: number
    sortCards: number
    page: number
    pageCount: number
    cardsTotalCount: number
    question: string
    answer: string
    grade: number
    shots: number
    _id: string

    isFetching: boolean
    error: string
}

export type GetCardsType = {
    cardAnswer: string,
    cardQuestion: string,
    cardsPack_id: string,
    min: number,
    max: number,
    sortCards: number,
    page: number,
    pageCount: number,
    _id?: string,
}

export type PostCardType = {
    cardsPack_id: string,
    question: string
    answer: string
    grade: number
    shots: number
    _id?: string,
}

export type PutCardType = {
    _id: string,
    question: string,
    answer: string
}

export type FetchCardsAction = ReturnType<typeof fetchAllCards>
export type FetchPackIdAction = ReturnType<typeof fetchPackId>
export type FetchCardPageAction = ReturnType<typeof fetchCardPage>
export type FetchCardPageCountAction = ReturnType<typeof fetchCardPageCount>
export type FetchCardTotalCountAction = ReturnType<typeof fetchCardTotalCount>
export type FetchMinAction = ReturnType<typeof fetchMin>
export type FetchMaxAction = ReturnType<typeof fetchMax>
export type FetchSortCardsAction = ReturnType<typeof fetchSortCards>
export type FetchCardQuestionAction = ReturnType<typeof fetchCardQuestion>
export type FetchCardAnswerAction = ReturnType<typeof fetchCardAnswer>
export type SetCardAction = ReturnType<typeof setCard>
export type RemoveCardAction = ReturnType<typeof removeCard>
export type UpdateCardAction = ReturnType<typeof updateCard>
export type SetCardIsFetchingAction = ReturnType<typeof setCardIsFetching>
export type FetchCardErrorAction = ReturnType<typeof fetchCardError>

export type CardActions =
    FetchCardsAction
    | FetchPackIdAction
    | FetchCardPageAction
    | FetchCardPageCountAction
    | FetchCardTotalCountAction
    | FetchMinAction
    | FetchMaxAction
    | FetchSortCardsAction
    | FetchCardQuestionAction
    | FetchCardAnswerAction
    | SetCardAction
    | RemoveCardAction
    | UpdateCardAction
    | SetCardIsFetchingAction
    | FetchCardErrorAction


