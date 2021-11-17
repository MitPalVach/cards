import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk";
import {regReducer} from "./registration/registrationReducer";
import {loginReducer} from "./login/loginReducers";


const rootReducer = combineReducers({
    reducer,
    registration: regReducer,
    login: loginReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))