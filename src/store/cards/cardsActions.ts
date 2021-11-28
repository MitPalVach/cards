import {CardActions, CardsEnum, GetCardsType, PostCardType, PutCardType} from "./cardsTypes";
import {cardsApi} from "../../api/cardsApi/cardsApi";
import {RootStateType} from "../store";
import {ThunkDispatch} from "redux-thunk";


// actions
export const fetchAllCards = (cards: GetCardsType[]) => ({type: CardsEnum.FETCH_ALL_CARDS, cards} as const)
export const fetchPackId = (cardsPack_id: string) => ({type: CardsEnum.PACK_ID, payload: {cardsPack_id}} as const)
export const fetchCardPage = (page: number) => ({type: CardsEnum.PAGE, payload: {page}} as const)
export const fetchCardPageCount = (pageCount: number) => ({type: CardsEnum.PAGE_COUNT, payload: {pageCount}} as const)
export const fetchCardTotalCount = (cardsTotalCount: number) => ({
    type: CardsEnum.TOTAL_COUNT,
    payload: {cardsTotalCount}
} as const)
export const fetchMin = (min: number) => ({type: CardsEnum.MIN, payload: {min}} as const)
export const fetchMax = (max: number) => ({type: CardsEnum.MAX, payload: {max}} as const)
export const fetchSortCards = (sortCards: number) => ({type: CardsEnum.SORT_CARDS, payload: {sortCards}} as const)
export const fetchCardQuestion = (cardQuestion: string) => ({type: CardsEnum.QUEST, payload: {cardQuestion}} as const)
export const fetchCardAnswer = (cardAnswer: string) => ({type: CardsEnum.ANSWER, payload: {cardAnswer}} as const)

export const setCard = (newCard: PostCardType) => ({type: CardsEnum.SET_CARD, newCard} as const)
export const removeCard = (_id: string) => ({type: CardsEnum.DELETE_CARD, _id} as const)
export const updateCard = (changedCard: PutCardType) => ({type: CardsEnum.UPDATE_CARD, changedCard} as const)
export const setCardIsFetching = (isFetching: boolean) => ({type: CardsEnum.FETCHING, payload: {isFetching}} as const)
export const fetchCardError = (error: string) => ({type: CardsEnum.FETCH_ERROR, payload: {error}} as const)


// thunk
export const fetchCardsPayload = (cardsPack_id: string, page: number, pageCount: number) => async (dispatch: ThunkDispatch<RootStateType, unknown, CardActions>, getState: () => RootStateType) => {
    const {cardAnswer, cardQuestion, min, max, sortCards} = getState().cards
    dispatch(setCardIsFetching(true))
    try {
        const res = await cardsApi.getCards(cardAnswer, cardQuestion, cardsPack_id, min, max, sortCards, page, pageCount)
        dispatch(fetchAllCards(res.data.cards))
        dispatch(fetchCardTotalCount(res.data.cardsTotalCount))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : e.message
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}

export const setCardPayload = (cardsPack_id: string, question: string, answer: string, grade: number, shots: number) => async (dispatch: ThunkDispatch<RootStateType, unknown, CardActions>, getState: () => RootStateType) => {
    const {page, pageCount, cardsTotalCount} = getState().cards
    dispatch(setCardIsFetching(true))
    try {
        await cardsApi.postCard(cardsPack_id, question, answer, grade, shots)
        dispatch(setCard({cardsPack_id, question, answer, grade, shots}))
        dispatch(fetchCardTotalCount(cardsTotalCount))
        await dispatch(fetchCardsPayload(cardsPack_id, page, pageCount))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : e.message
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}

export const removeCardPayload = (_id: string, cardsPack_id: string) => async (dispatch: ThunkDispatch<RootStateType, unknown, CardActions>, getState: () => RootStateType) => {
    const {page, pageCount, cardsTotalCount} = getState().cards
    dispatch(setCardIsFetching(true))
    try {
        await cardsApi.deleteCard(_id)
        dispatch(removeCard(_id))
        dispatch(fetchCardTotalCount(cardsTotalCount))
        await dispatch(fetchCardsPayload(cardsPack_id, page, pageCount))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : e.message
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}

export const updateCardPayload = (_id: string, question: string,  answer:string, cardsPack_id: string) => async (dispatch: ThunkDispatch<RootStateType, unknown, CardActions>, getState: () => RootStateType) => {
    const {page, pageCount, cardsTotalCount} = getState().cards
    dispatch(setCardIsFetching(true))
    try {
        await cardsApi.putCard(_id, question, answer)
        dispatch(updateCard({_id, question, answer}))
        dispatch(fetchCardTotalCount(cardsTotalCount))
        await dispatch(fetchCardsPayload(cardsPack_id, page, pageCount))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : e.message
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}


