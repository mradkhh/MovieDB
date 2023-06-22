import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from "./rootReducer";
import {fetchApi} from "services/services";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(fetchApi.middleware),
});


// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
