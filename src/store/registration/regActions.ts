import {Dispatch} from "redux";
import {RegActions, RegistrationActions, RegParamsType} from "./regTypes";
import {regApi} from "../../api/regApi/regApi";


export const sendReg = (payload: RegParamsType) => ({
    type: RegistrationActions.SEND_REG,
    payload,
} as const)
export const setRegIsFetching = (isFetching: boolean) => ({
    type: RegistrationActions.SET_REG_IS_FETCHING,
    isFetching,
} as const)
export const setRegIsReg = (isReg: boolean) => ({
    type: RegistrationActions.SET_REG_IS_REG,
    isReg,
} as const)
export const fetchRegError = (error: string) => ({
    type: RegistrationActions.FETCH_REG_ERROR,
    error,
} as const)


export const sendRegPayload = (body: RegParamsType) => async (dispatch: Dispatch<RegActions>) => {
    dispatch(setRegIsFetching(true))
    try {
        const res = await regApi.setReg(body)
        dispatch(sendReg(res.data))
        dispatch(setRegIsReg(true))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchRegError(error))
    }
    dispatch(setRegIsFetching(false))
}
