export type FormikErrorType = {
    email?: string
    password?: string
    password2?: string
}

export enum LoginActions {
    SEND_LOGIN = 'SEND_LOGIN',
    SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS',
    FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR',
}

export type LoginBodyType = {
    email: string
    password: string
}
export type LoginState = {
    body: LoginBodyType
    loading: boolean
    error: null | string
}

type SetLoginAction = {
    type: LoginActions.SEND_LOGIN
    payload: LoginBodyType
}
type SetLoginSuccessAction = {
    type: LoginActions.SET_LOGIN_SUCCESS
    payload: LoginBodyType
}
type FetchLoginErrorAction = {
    type: LoginActions.FETCH_LOGIN_ERROR
    payload: string
}

export type LogActions = SetLoginAction | SetLoginSuccessAction | FetchLoginErrorAction









