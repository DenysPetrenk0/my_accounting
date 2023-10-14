import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import cakeReducer from "./Cake/cakeReducer";
import costReducer from "./Cost/costReducer";
import timeReducer from "./Time/timeReducer";

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        cost: costReducer,
        time: timeReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export default store;