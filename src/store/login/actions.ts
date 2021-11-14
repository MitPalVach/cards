import {LogActions, LoginActions, LoginBodyType} from "./logTypes";
import {Dispatch} from "redux";
import {instance} from "../../api/api";


export const setLogin = (body: LoginBodyType) => async (dispatch: Dispatch<LogActions>) => {
    try {
        const res = await instance.post(`auth/login`, body)
        dispatch({type: LoginActions.SET_LOGIN_SUCCESS, payload: res.data})
    } catch (e) {
        dispatch({type: LoginActions.FETCH_LOGIN_ERROR, payload: 'Login or pass error'})
    }
}






