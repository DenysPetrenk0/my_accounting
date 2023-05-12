import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import cakeReducer from "./Cake/reducerCake";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist";

const store = configureStore({
    reducer: {
        cake: cakeReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export default store;