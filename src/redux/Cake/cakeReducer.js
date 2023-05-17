import {combineReducers} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";
import {
    addCakeError,
    addCakeRequest,
    addCakeSuccess,
    deleteCakeError,
    deleteCakeRequest,
    deleteCakeSuccess,
    getCakeError,
    getCakeRequest,
    getCakeSuccess
} from "./cakeAction";

const itemsReducer = createReducer([], {
    [getCakeSuccess]: (_, {payload}) => payload,
    [addCakeSuccess]: (state, {payload}) => [...state, payload],
    [deleteCakeSuccess]: (state, {payload}) => state.filter((item) => item.id !== payload)
});

const loadingReducer = createReducer(false, {
    [getCakeRequest]: () => true,
    [getCakeSuccess]: () => false,
    [addCakeRequest]: () => true,
    [addCakeSuccess]: () => false,
    [deleteCakeRequest]: () => true,
    [deleteCakeSuccess]: () => false
});

const errorReducer = createReducer(null, {
    [getCakeError]: (error) => error,
    [addCakeError]: (error) => error,
    [deleteCakeError]: (error) => error
});

const cakeReducer = combineReducers({
    items: itemsReducer,
    loading: loadingReducer,
    error: errorReducer
});

export default cakeReducer;