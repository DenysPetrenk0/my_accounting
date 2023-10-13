import axios from "axios";
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

axios.defaults.baseURL = "http://localhost:1111";

export const getCostOperation = () => async (dispatch) => {
    dispatch(getCostRequest());

    try {
        const {data} = await axios.get("/cost");
        dispatch(getCostSuccess(data));
    } catch (error) {
        dispatch(getCostError(error));
    }
};

export const addCostOperation = (cost) => async (dispatch) => {
    dispatch(addCostRequest());
    try {
        const {data} = await axios.post("/cost", cost);
        dispatch(addCostSuccess(data));
    } catch (error) {
        dispatch(addCostError(error))
    }
};

export const deleteCostOperation = (id) => async (dispatch) => {
  dispatch(deleteCostRequest());
  try {
      await axios.delete(`/cost/${id}`);
      dispatch(deleteCostSuccess(id));
  } catch (error) {
      dispatch(deleteCostError(error))
  }
};