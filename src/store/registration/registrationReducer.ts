import {RegActions, RegistrationActions, RegState} from "./regTypes";


const initialValue: RegState = {
    body: {email: '', password: ''},
    loading: false,
    error: '',
}

export const regReducer = (state = initialValue, action: RegActions): RegState => {
    switch (action.type) {
        case RegistrationActions.SEND_REG: {
            return {...state, loading: true, error: '', body: action.payload}
        }
        case RegistrationActions.SET_REG_SUCCESS: {
            return {...state, loading: false, error: '', body: action.payload}
        }
        case RegistrationActions.FETCH_REG_ERROR: {
            return {...state, loading: false, error: action.payload}
        }
        default:
            return state
    }
}
