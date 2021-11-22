import {CardActions, CardsEnumActions} from "./cardsTypes";
import {Dispatch} from "redux";
import {cardsApi} from "../../api/cardsApi/cardsApi";
import {InitialStateType} from "./cardsReducer";


export const fetchCards = (data: InitialStateType) => ({
    type: CardsEnumActions.FETCH_CARDS,
    data,
} as const)
export const setCard = (payload: any) => ({
    type: CardsEnumActions.SET_CARD,
    payload,
} as const)
export const removeCard = (_id: string) => ({
    type: CardsEnumActions.DELETE_CARD,
    _id,
} as const)
export const updateCard = (payload: any) => ({
    type: CardsEnumActions.UPDATE_CARD,
    payload,
} as const)
export const setCardIsFetching = (isFetching: boolean) => ({
    type: CardsEnumActions.SET_CARD_IS_FETCHING,
    isFetching,
} as const)
export const fetchCardError = (error: string) => ({
    type: CardsEnumActions.FETCH_CARD_ERROR,
    error,
} as const)

export const fetchCardsPayload =
    (cardsPack_id?: string, answer?: string, question?: string, grade?: number,
     page?: number, pageCount?: number, _id?: string, user_id?: string) =>
        async (dispatch: Dispatch<CardActions>) => {
            dispatch(setCardIsFetching(true))
            try {
                const res = await cardsApi.getCards(cardsPack_id, answer, question, grade, page, pageCount, _id, user_id)
                dispatch(fetchCards(res.data))
            } catch (e: any) {
                const error = e.response ? e.response.data.error : (e.message)
                dispatch(fetchCardError(error))
            }
            dispatch(setCardIsFetching(false))
        }

