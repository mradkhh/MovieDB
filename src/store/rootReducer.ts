import {combineReducers} from "@reduxjs/toolkit";
import {fetchApi} from "services/services";

export const rootReducer = combineReducers({
    [fetchApi.reducerPath]: fetchApi.reducer,
})