import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {currentDay} from "./timeAction";

const currentDate = () => {
    const date = new Date();
    const padStart = num => String(num).padStart(2, '0');
    const year = date.getFullYear();
    const month = padStart(date.getMonth() + 1);
    const day = date.getDate();

    return `${day}.${month}.${year}`;
};

const date = createReducer(currentDate(), {
    [currentDay]: (_, { payload }) => payload,
});

const timeReducer = combineReducers({
    date: date,
});

export default timeReducer;