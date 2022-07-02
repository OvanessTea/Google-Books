import { combineReducers } from "redux";
import { searchReducer } from "./seachReducer";

export const rootReducer = combineReducers({
    search: searchReducer
})

export type RootState = ReturnType<typeof rootReducer>