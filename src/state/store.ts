import {combineReducers, createStore} from "redux";
import {mainPageReducer} from "./mainPageReducer";


const rootReducer = combineReducers({
    mainPage: mainPageReducer
})

export const store = createStore(rootReducer);

export type RootStoreType = ReturnType <typeof rootReducer>