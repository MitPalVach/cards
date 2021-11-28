import {instance} from "../api";
import {AxiosResponse} from "axios";


export const cardsApi = {
    getCards(cardAnswer: string, cardQuestion: string, cardsPack_id: string, min: number, max: number, sortCards: number,
             page: number, pageCount: number) {
        return instance.get(`/cards/card/`,
            {params: {cardAnswer, cardQuestion, cardsPack_id, min, max, sortCards, page, pageCount}})
    },
    getPackId(id: string) {
        return instance.get(`cards/card/?id=${id}`)
    },
    async postCard(cardsPack_id: string, question: string, answer: string, grade: number, shots: number) {
        return await instance.post<AxiosResponse>(`cards/card`, {card: {cardsPack_id, question, answer, grade, shots}})
    },
    async deleteCard(_id: string) {
        return await instance.delete(`cards/card?id=${_id}`)
    },
    async putCard(_id: string, question: string, answer: string) {
        return await instance.put<AxiosResponse>(`cards/card`, {card: {_id, question, answer}})
    },
}


