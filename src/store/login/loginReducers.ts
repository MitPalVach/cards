import {LogActions, LoginActions, RequestLoginType} from "./logTypes";


const initialValue: RequestLoginType = {
    isLoggedIn: false,
    email: '',
    password: '',
    loading: false,
    error: '',
    _id: '',
    name: '',
    avatar: '',
    publicCardPacksCount: 0,
    created: '',
    updated: '',
    isAdmin: false,
    verified: false,
    rememberMe: false,
}

export const loginReducer = (state = initialValue, action: LogActions): RequestLoginType => {
    switch (action.type) {
        case LoginActions.SET_IS_LOGGED_IN: {
            return {...state, ...action.payload, isLoggedIn: true}
        }
        case LoginActions.SET_LOGIN_SUCCESS: {
            return {...state, loading: false, error: ''}
        }
        case LoginActions.FETCH_LOGIN_ERROR: {
            return {...state, loading: false, error: action.payload}
        }
        default:
            return state
    }
}




