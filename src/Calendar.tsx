import React, { useState } from "react";
import { isDateInRange } from "./logic/helper";
import { CalendarDayProps, CalendarData, CalendarHeaderData, CalendarType } from "./types";

import './scss/styles.scss';
import { CalendarWeek } from "./components/CalendarWeek";
import { EventlistFormatter } from "./formatter/EventlistFormatter";

export const CalendarHeader = (props: CalendarHeaderData) => {

    const headerData = props.weekDayNames ? props.weekDayNames : defaultWeekDayNames();
    const header = headerData.map(item => <td key={item} className='calendar-header'>{item}</td>);

    return <thead><tr>{header}</tr></thead>;
}

const dayInMilliSeconds = 1000 * 60 * 60 * 24;
export const CalendarItem = (props: CalendarData) => {

    var monthNames = props.options?.monthNames ? props.options.monthNames : defaultMonthNames();

    let today = new Date(props.startDate.getTime());
    let month = today.getMonth();
    let year = today.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1, 12);
    let dayOfWeek = firstDayOfMonth.getDay() == 0 ? 6 : firstDayOfMonth.getDay() - 1;

    let calDays: Array<CalendarDayProps> = [];
    const numberCalCells = 42;
    let weeks: JSX.Element[] = [];

    const startOffset = -dayOfWeek;

    for (let i = 0; i < numberCalCells; i++) {

        const tmpDate = new Date(firstDayOfMonth.getTime() + ((i + startOffset) * dayInMilliSeconds));
        const eventsOfDay = props.events.filter(event => isDateInRange(event, tmpDate));

        let calItem: CalendarDayProps = {
            day: tmpDate,
            eventsOfDay: eventsOfDay,
            eventConditions: props.eventConditions,
            active: tmpDate.getMonth() === props.startDate.getMonth(),
            calendarDayContent: props.options?.calendarDayContent
        };

        calDays.push(calItem);
        if (i > 0 && (i + 1) % 7 == 0) {

            weeks.push(<CalendarWeek key={tmpDate.getTime()} row={calDays} />);
            calDays = [];
        }
    }

    return <div>
        <div className="title">{monthNames[month]} {year}</div>
        <table className="calendar">
            <CalendarHeader weekDayNames={props.options?.weekDayNames} />
            <tbody>
                {weeks}
            </tbody>
        </table>
    </div>;
}

export const Calendar = (props: CalendarData) => {

    const [calendarState, setCalendarState] = useState({ dateToDisplay: props.startDate ? props.startDate : new Date() });
    const numberCalendarsToShow = props.options?.numberCalendarsToShow ? props.options.numberCalendarsToShow : 1;

    const useBigCalendar = props.options?.type === CalendarType.big;
    const classCalendarType = useBigCalendar ? "calendar-big" : "";

    const options = { ...props.options };
    if (useBigCalendar && !props.options?.calendarDayContent) {
        options.calendarDayContent = EventlistFormatter;
    }

    const calendarItems: JSX.Element[] = [];
    for (let index = 0; index < numberCalendarsToShow; index++) {
        const startDate = new Date(calendarState.dateToDisplay.getFullYear(), calendarState.dateToDisplay.getMonth() + index);
        calendarItems.push(<CalendarItem key={startDate.getTime()} {...props} options={options} startDate={startDate} />)
    }

    return <div className="calendar-container">
        <div className="calendar-btn" onClick={() => {
            const curDate = new Date();
            if (calendarState.dateToDisplay.getFullYear() > curDate.getFullYear() ||
                (calendarState.dateToDisplay.getMonth() > curDate.getMonth() && calendarState.dateToDisplay.getFullYear() === curDate.getFullYear()))
                setCalendarState({ dateToDisplay: new Date(calendarState.dateToDisplay.getFullYear(), calendarState.dateToDisplay.getMonth() - 1) });
        }
        }>
            <div className="calendar-left" />
        </div>

        <div className={`${classCalendarType} calendar-flex`}>
            {calendarItems}
        </div>

        <div className="calendar-btn" onClick={() => {
            setCalendarState({ dateToDisplay: new Date(calendarState.dateToDisplay.getFullYear(), calendarState.dateToDisplay.getMonth() + 1) });
        }
        }>
            <div className="calendar-right" />
        </div>
    </div>;
}
function defaultWeekDayNames() {
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
}

function defaultMonthNames() {
    return ["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
}
