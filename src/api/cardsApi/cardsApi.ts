import {instance} from "../api";
import {AxiosResponse} from "axios";
import {CardType} from "../../store/cards/cardsTypes";


export const cardsApi = {
    async getCards(cards: CardType, cardsTotalCount: number) {
        return await instance.get(`cards/card`, {params: {...cards, cardsTotalCount}})
    },
    async postCard(cardsPack_id: string, question: string, answer: string, grade: number) {
        return await instance.post<AxiosResponse>(`cards/card`, {card: {cardsPack_id, question, answer, grade}})
    },
    async deleteCard(id: string) {
        return await instance.delete<AxiosResponse>(`cards/card?id=${id}`)
    },
    async putCard(_id: string, question?: string) {
        return await instance.put<AxiosResponse>(`cards/card`, {params: _id, question})
    },
}


