import {instance} from "../api";


export const cardsApi = {
    getCards(cardsPack_id?: string, answer?: string, question?: string, grade?: number,
             page?: number, pageCount?: number, _id?: string, user_id?: string) {
        return instance.get(`cards/card`,
            {params: {cardsPack_id, answer, question, grade, page, pageCount, _id, user_id}})
    },
    postCard() {
        return instance.post('cards/card')
    },
    deleteCard(id: string) {
        return instance.delete(`cards/card`, {params: id})
    },
    putCard() {
        return instance.put('cards/card')
    },
}



