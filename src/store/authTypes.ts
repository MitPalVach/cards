export type AuthStateType = {
    login: string
    registration: string
    profile: string
    passRecovery: string
    newPass: string
}

export enum AuthActionTypes {
    LOGIN = 'LOGIN',
    REGISTRATION = 'REGISTRATION',
    PROFILE = 'PROFILE',
    PASS_RECOVERY = 'PASS_RECOVERY',
    NEW_PASS = 'NEW_PASS'
}

type FetchLoginAction = {
    type: AuthActionTypes.LOGIN
}
type FetchRegistrationAction = {
    type: AuthActionTypes.REGISTRATION
}
type FetchProfileAction = {
    type: AuthActionTypes.PROFILE
}
type FetchPassRecoveryAction = {
    type: AuthActionTypes.PASS_RECOVERY
}
type FetchNewPassAction = {
    type: AuthActionTypes.NEW_PASS
}

export type AuthAction =
    FetchLoginAction
    | FetchRegistrationAction
    | FetchProfileAction
    | FetchPassRecoveryAction
    | FetchNewPassAction






