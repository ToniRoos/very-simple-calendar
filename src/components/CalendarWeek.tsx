import React from "react";
import { CalendarRowData } from "../types";
import { CalendarDay } from "./CalendarDay";

export const CalendarWeek = (props: CalendarRowData) => {

    return <tr>
        {props.row.map(item => <CalendarDay key={item.day.getTime()} {...item} />)}
    </tr>;
};
