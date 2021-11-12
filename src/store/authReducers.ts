import {AuthAction, AuthActionTypes, AuthStateType} from "./authTypes";


const initialState: AuthStateType = {
    login: '',
    registration: '',
    profile: '',
    passRecovery: '',
    newPass: '',
}

export const authReducers = (state = initialState, action: AuthAction): AuthStateType => {
    switch (action.type) {
        case AuthActionTypes.LOGIN: {
            return state
        }
        case AuthActionTypes.REGISTRATION: {
            return state
        }
        case AuthActionTypes.PROFILE: {
            return state
        }
        case AuthActionTypes.PASS_RECOVERY: {
            return state
        }
        case AuthActionTypes.NEW_PASS: {
            return state
        }
        default:
            return state
    }
}



