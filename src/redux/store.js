import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import cakeReducer from "./Cake/cakeReducer";
import costReducer from "./Cost/costReducer";

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        cost: costReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export default store;