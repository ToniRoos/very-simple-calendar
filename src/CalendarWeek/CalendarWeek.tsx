import React, { FunctionComponent } from "react";
import { CalendarDay, CalendarDayProps } from "../CalendarDay/CalendarDay";

export interface CalendarWeekProps {
    calendarDays: CalendarDayProps[];
}

const CalendarWeek: FunctionComponent<CalendarWeekProps> = ({ calendarDays }) => {
    return (
        <tr>
            {calendarDays.map(calendarDay => <CalendarDay key={calendarDay.day.getTime()} {...calendarDay} />)}
        </tr>
    );
};

export { CalendarWeek };