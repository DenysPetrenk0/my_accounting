import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {
    addCostError,
    addCostRequest,
    addCostSuccess,
    deleteCostError,
    deleteCostRequest,
    deleteCostSuccess,
    getCostError,
    getCostRequest,
    getCostSuccess
} from "./costAction";

const itemsReducer = createReducer([], {
    [getCostSuccess]: (_, {payload}) => payload,
    [addCostSuccess]: (state, {payload}) => [...state, payload],
    [deleteCostSuccess]: (state, {payload}) => state.filter((item) => item.id !== payload)
});

const loadingReducer = createReducer(false, {
    [getCostRequest]: () => true,
    [getCostSuccess]: () => false,
    [addCostRequest]: () => true,
    [addCostSuccess]: () => false,
    [deleteCostRequest]: () => true,
    [deleteCostSuccess]: () => false
});

const errorReducer = createReducer(null, {
    [getCostError]: (error) => error,
    [addCostError]: (error) => error,
    [deleteCostError]: (error) => error
});

const costReducer = combineReducers({
    items: itemsReducer,
    loading: loadingReducer,
    error: errorReducer
});

export default costReducer;