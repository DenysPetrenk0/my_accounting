import {combineReducers} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit/src";
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
    loading: loadingReducer,
    error: errorReducer
});

export default cakeReducer;