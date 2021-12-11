import React from "react";
import { defaultWeekDayNames } from "./defaultWeekDayNames";

export interface CalendarHeaderData {
    weekDayNames?: string[];
    shiftWeekStartDay?: number;
}

const CalendarHeader = (props: CalendarHeaderData) => {

    const headerData = props.weekDayNames ? props.weekDayNames : defaultWeekDayNames();

    for (let index = 0; index <= props.shiftWeekStartDay; index++) {
        const firstWeekDayName = headerData.shift();
        headerData.push(firstWeekDayName);
    }

    const header = headerData.map(item => <td key={item} className='calendar-header'>{item}</td>);

    return <thead><tr>{header}</tr></thead>;
};

export { CalendarHeader };