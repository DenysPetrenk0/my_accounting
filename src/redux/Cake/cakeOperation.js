import axios from "axios";
import {
    addCakeError,
    addCakeRequest,
    addCakeSuccess, deleteCakeError,
    deleteCakeRequest, deleteCakeSuccess,
    getCakeError,
    getCakeRequest,
    getCakeSuccess
} from "./cakeAction";

axios.defaults.baseURL = "http://localhost:1111";

export const getCakeOperation = () => async (dispatch) => {
    dispatch(getCakeRequest());

    try {
        const {data} = await axios.get("/cake");
        dispatch(getCakeSuccess(data));
    } catch (error) {
        dispatch(getCakeError(error));
    }
};
export const addCakeOperation = (cake) => async (dispatch) => {
    dispatch(addCakeRequest());
    try {
        const {data} = await axios.post("/cake", cake);
        dispatch(addCakeSuccess(data));
    } catch (error) {
        dispatch(addCakeError());
    }
};
export const deleteCakeOperation = (id) => async (dispatch) => {
    dispatch(deleteCakeRequest());
    try {
        await axios.delete(`/cake/${id}`);
        dispatch(deleteCakeSuccess(id))
    } catch (error) {
        dispatch(deleteCakeError(error));
    }
};
