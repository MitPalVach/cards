export type FormikErrorType = {
    email?: string
    password?: string
    password2?: string
}


export enum LoginActions {
    SEND_LOGIN = 'SEND_LOGIN',
    SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN',
    SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS',
    FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR',
}

export type RequestLoginType = {
    isLoggedIn: boolean
    email: string
    password: string
    loading: boolean
    error?: string
    created: string
    updated: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    _id: string
    name: string
    avatar?: string
    publicCardPacksCount: number
}
export type ResponseLoginType = {
    email: string
    password: string
    rememberMe: boolean
}

type SetIsLoggedIn = {
    type: LoginActions.SET_IS_LOGGED_IN
    payload: RequestLoginType
}
type SetLoginSuccessAction = {
    type: LoginActions.SET_LOGIN_SUCCESS
    payload: string
}
type FetchLoginErrorAction = {
    type: LoginActions.FETCH_LOGIN_ERROR
    payload: string
}

export type LogActions = SetIsLoggedIn | SetLoginSuccessAction | FetchLoginErrorAction









