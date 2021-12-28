import React, { FunctionComponent } from "react";
import { CalendarDayProps } from "./CalendarDay/CalendarDay";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarWeek } from "./CalendarWeek/CalendarWeek";
import { defaultMonthNames } from "./defaultMonthNames";
import { isDateInRange } from "./logic/helper";
import { CalendarDataOptions, CalendarEvent, CalendarDayFormatter } from "./types";

const dayInMilliSeconds = 1000 * 60 * 60 * 24;

export interface CalendarData {
    startDate?: Date;
    events: CalendarEvent[];
    calendarDayFormatter?: CalendarDayFormatter;
    onClicked?: (calendarDayData: CalendarDayClickedData) => void;
    options?: CalendarDataOptions;
}

export type CalendarDayClickedData = Omit<CalendarDayProps, 'onCalendarDayClicked'>;

const CalendarItem: FunctionComponent<CalendarData> = (props) => {

    var monthNames = props.options?.monthNames ? props.options.monthNames : defaultMonthNames();

    const startDate = props.startDate ? props.startDate : new Date();
    let today = new Date(startDate.getTime());
    let month = today.getMonth();
    let year = today.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1, 12);
    let dayOfWeek = firstDayOfMonth.getDay() == 0 ? 6 : firstDayOfMonth.getDay() - 1;

    let calDays: Array<CalendarDayProps> = [];
    const numberCalCells = 42;
    let weeks: JSX.Element[] = [];

    const shiftWeekDaysNumber = props.options?.shiftWeekStartDay ? props.options.shiftWeekStartDay : 0;
    const startOffset = -dayOfWeek + shiftWeekDaysNumber;

    for (let i = 0; i < numberCalCells; i++) {

        const tmpDate = new Date(firstDayOfMonth.getTime() + ((i + startOffset) * dayInMilliSeconds));
        const eventsOfDay = props.events.filter(event => isDateInRange(event, tmpDate));

        let calItem: CalendarDayProps = {
            day: tmpDate,
            eventsOfDay: eventsOfDay,
            eventConditions: props.calendarDayFormatter,
            active: tmpDate.getMonth() === startDate.getMonth(),
            calendarDayContent: props.options?.calendarDayContent,
            onCalendarDayClicked: props.onClicked
        };

        calDays.push(calItem);
        if (i > 0 && (i + 1) % 7 == 0) {

            weeks.push(<CalendarWeek key={tmpDate.getTime()} calendarDays={calDays} />);
            calDays = [];
        }
    }

    return (
        <div>
            <div className="title">{monthNames[month]} {year}</div>
            <table className="calendar">
                <CalendarHeader weekDayNames={props.options?.weekDayNames} shiftWeekStartDay={shiftWeekDaysNumber} />
                <tbody>
                    {weeks}
                </tbody>
            </table>
        </div>
    );
}

export { CalendarItem };