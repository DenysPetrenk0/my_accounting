import {createAction} from "@reduxjs/toolkit";

export const getCakeRequest = createAction("getCakeRequest");
export const getCakeSuccess = createAction("getCakeSuccess");
export const getCakeError = createAction("getCakeRequest");

export const addCakeRequest = createAction("addCakeRequest");
export const addCakeSuccess = createAction("addCakeSuccess");
export const addCakeError = createAction("addCakeRequest");

export const deleteCakeRequest = createAction("deleteCakeRequest");
export const deleteCakeSuccess = createAction("deleteCakeSuccess");
export const deleteCakeError = createAction("deleteCakeRequest");
