import {instance} from "../api";
import {AxiosResponse} from "axios";
import {InitialCardsStateType} from "../../store/cards/cardsTypes";


export const cardsApi = {
    async getCards(cardsPack_id: string, answer?: string, question?: string) {
        return await instance.get
        (`cards/card?cardsPack_id=${cardsPack_id}&answer=${answer}&question=${question}`)
    },
    async postCard(data: InitialCardsStateType) {
        return await instance.post<AxiosResponse>('cards/card', data)
    },
    async deleteCard(id: string) {
        return await instance.delete<AxiosResponse>(`cards/card?id=${id}`)
    },
    async putCard(_id: string, question?: string) {
        return await instance.put<AxiosResponse>('cards/card', {params: _id, question})
    },
}

// getCardsParam

