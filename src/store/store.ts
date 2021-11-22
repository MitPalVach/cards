import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {regReducer} from "./registration/regReducer";
import {recoveryPassReducer} from "./recoveryPass/recoveryPassReducer";
import {loginReducer} from './loginization/loginReducer';
import {cardsReducer} from "./cards/cardsReducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    registration: regReducer,
    recoveryPass: recoveryPassReducer,
    login: loginReducer,
    cards: cardsReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))