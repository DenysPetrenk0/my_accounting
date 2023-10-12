import {createAction} from "@reduxjs/toolkit";

export const getCostRequest = createAction("getCostRequest");
export const getCostSuccess = createAction("getCostSuccess");
export const getCostError = createAction("getCostRequest");

export const addCostRequest = createAction("addCostRequest");
export const addCostSuccess = createAction("addCostSuccess");
export const addCostError = createAction("addCostRequest");

export const deleteCostRequest = createAction("deleteCostRequest");
export const deleteCostSuccess = createAction("deleteCostSuccess");
export const deleteCostError = createAction("deleteCostRequest");