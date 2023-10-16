import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {currentDay, weeksAction} from "./timeAction";

const padStart = num => String(num).padStart(2, '0');

const currentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = padStart(date.getMonth() + 1);
    const day = date.getDate();

    return `${day}.${month}.${year}`;
};

const getWeeks = () => {
    const date = new Date();
// Дата
    const weekDay = date.getDay();
// День недели
    const monthDay = date.getDate();
// День месяца
    const month = date.getMonth();
// Номер месяца (индекс)
    const year = date.getFullYear();

    const countDayOnMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Кол-во дней в каждом месяце
    const week = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П\'ятниця', 'Cубота', 'Неділя'];
    let result = [];
    // День месяца, понедельника текущей недели
    let countMonthDay;
    // Проверка что бы всегда начинать выстаривать текущую неделю с понедельника
    if (weekDay > 1) {
        countMonthDay = monthDay - (weekDay - 1);
    } else if (weekDay === 0) {
        countMonthDay = monthDay - 6;
    } else {
        countMonthDay = monthDay;
    }
    // Постраение итогового массива
    for (let i = 0; i < week.length; i++) {
        // Если countMonthDay больше кол-ва дней в месяце
        // дни начинаются сначала
        if ((countMonthDay + i) > countDayOnMonth[month]) {
            let count = countDayOnMonth[month] - (countMonthDay + (week.length - 1));
            result.push({day: week[i], date: count + i});

        } else {
            result.push({day: week[i], date: `${countMonthDay +i}.${padStart(month + 1)}.${year}`});
        }

    }

    return result
};

const date = createReducer(currentDate(), {
    [currentDay]: (_, { payload }) => payload
});

const weeks = createReducer(getWeeks(), {
    [weeksAction]: (_, {payload}) => payload
});

const timeReducer = combineReducers({
    date: date,
    weeks: weeks
});

export default timeReducer;