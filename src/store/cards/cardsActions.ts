import {CardActions, CardsEnumActions, InitialCardsStateType} from "./cardsTypes";
import {Dispatch} from "redux";
import {cardsApi} from "../../api/cardsApi/cardsApi";


export const fetchCards = (cardsPack_id: string, answer?: string, question?: string) => ({
    type: CardsEnumActions.FETCH_CARDS,
    cardsPack_id,
    answer,
    question,
} as const)
export const setCard = (card: InitialCardsStateType) => ({
    type: CardsEnumActions.SET_CARD,
    card,
} as const)
export const removeCard = (_id: string) => ({
    type: CardsEnumActions.DELETE_CARD,
    _id,
} as const)
export const updateCard = (_id: string, question: string) => ({
    type: CardsEnumActions.UPDATE_CARD,
    question,
    _id,
} as const)
export const setCardIsFetching = (isFetching: boolean) => ({
    type: CardsEnumActions.SET_CARD_IS_FETCHING,
    isFetching,
} as const)
export const fetchCardError = (error: string) => ({
    type: CardsEnumActions.FETCH_CARD_ERROR,
    error,
} as const)


export const fetchCardsPayload = (cardsPack_id: string, answer?: string, question?: string) => async (dispatch: Dispatch<CardActions>) => {
    dispatch(setCardIsFetching(true))
    try {
        await cardsApi.getCards(cardsPack_id, answer, question)
        dispatch(fetchCards(cardsPack_id, answer, question))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}

export const setCardPayload = (data: InitialCardsStateType) => async (dispatch: Dispatch<CardActions>) => {
    dispatch(setCardIsFetching(true))
    try {
        const res = await cardsApi.postCard(data)
        dispatch(setCard(res.data.data))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}

export const removeCardPayload = (_id: string) => async (dispatch: Dispatch<CardActions>) => {
    dispatch(setCardIsFetching(true))
    try {
        await cardsApi.deleteCard(_id)
        dispatch(removeCard(_id))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}

export const updateCardPayload = (_id: string, question?: string) => async (dispatch: Dispatch<CardActions>) => {
    dispatch(setCardIsFetching(true))
    try {
        const res = await cardsApi.putCard(_id, question)
        dispatch(removeCard(res.data.data))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}





