import {herokuInstance} from "../api";
import {RegParamsType} from "../../store/registration/regTypes";
import {AxiosResponse} from "axios";


export const regApi = {
    setReg(body: RegParamsType) {
        return herokuInstance.post<RegParamsType, AxiosResponse<RegParamsType>>('auth/register', body)
    }
}



