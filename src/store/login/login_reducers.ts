import {LogActions, LoginActions, LoginState} from "./logTypes";


const initialValue: LoginState = {
    body: {email: '', password: ''},
    loading: false,
    error: null,
}

export const loginReducer = (state = initialValue, action: LogActions): LoginState => {
    switch (action.type) {
        case LoginActions.SEND_LOGIN: {
            return {...state, loading: true, error: null, body: action.payload}
        }
        case LoginActions.SET_LOGIN_SUCCESS: {
            return {...state, loading: false, error: null, body: action.payload}
        }
        case LoginActions.FETCH_LOGIN_ERROR: {
            return {...state, loading: false, error: action.payload}
        }
        default:
            return state
    }
}







