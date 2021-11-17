import {LogActions, LoginActions, RequestLoginType, ResponseLoginType} from "./logTypes";
import {Dispatch} from "redux";
import {instance} from "../../api/api";
import axios from "axios";


export const setLogin = (body: ResponseLoginType) => async (dispatch: Dispatch<LogActions>) => {
    try {
        const res = await instance.post<RequestLoginType>(`auth/login`, body)
        dispatch({type: LoginActions.SET_IS_LOGGED_IN, payload: res.data})

        console.log(res.data)
    } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch({type: LoginActions.FETCH_LOGIN_ERROR, payload: error})

            console.log('Error: ', {...e})
        }
    }
}






