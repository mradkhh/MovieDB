import {combineReducers} from "@reduxjs/toolkit";
import {fetchApi} from "services/services";
import {RootState} from "store/store";

export const rootReducer = combineReducers({
    [fetchApi.reducerPath]: fetchApi.reducer,
})