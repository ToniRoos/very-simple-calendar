import React, { useState } from "react";
import { isDateInRange, isInRange } from "../logic/helper";
import { CalendarItemData, CalendarRowData, CalendarData, CalendarHeaderData } from "../types";

import '../scss/styles.scss';

export const CalendarDay = (props: CalendarItemData) => {

    const className = props.active ? 'calendar calendar-item calendar-item-active' : 'calendar calendar-item calendar-item-inactive';
    const classNameBrushed = props.occupiedState.className;
    return <td title={props.occupiedState.tooltip}>
        <div className={`${className} ${classNameBrushed}`}>
            {props.day.getDate()}
        </div>
    </td>;
}

export const CalendarWeek = (props: CalendarRowData) => {

    return <tr>
        {props.row.map(item => <CalendarDay key={item.day.getTime()} {...item} />)}
    </tr>;
}

export const CalendarHeader = (props: CalendarHeaderData) => {

    // const headerData = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    const headerData = props.weekDayNames ? props.weekDayNames : defaultWeekDayNames();
    const header = headerData.map(item => <td key={item} className='calendar-header'>{item}</td>);

    return <thead><tr>{header}</tr></thead>;
}

export const CalendarItem = (props: CalendarData) => {

    var monthNames = props.monthNames ? props.monthNames : defaultMonthNames();

    let today = new Date(props.startDate.getTime());
    let month = today.getMonth();
    let year = today.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1, 12);
    let dayOfWeek = firstDayOfMonth.getDay() == 0 ? 6 : firstDayOfMonth.getDay() - 1;

    let calDays: Array<CalendarItemData> = [];
    const numberCalCells = 42;
    let weeks: JSX.Element[] = [];

    const startOffset = -dayOfWeek;
    const dayInMilliSeconds = 1000 * 60 * 60 * 24;

    for (let i = 0; i < numberCalCells; i++) {

        const tmpDate = new Date(firstDayOfMonth.getTime() + ((i + startOffset) * dayInMilliSeconds));
        const occupiedCountsPerDay = props.events.map(y => isDateInRange(y, new Date(year, month, i - dayOfWeek + 1))).reduce((a, b) => (a ? 1 : 0) + (b ? 1 : 0), 0);

        const filteredStates = props.occupiedStates.filter(item => isInRange(item.range, occupiedCountsPerDay));
        const occupiedStateItem = filteredStates.length === 0 ? props.occupiedStates[occupiedCountsPerDay] : filteredStates[0];
        let calItem: CalendarItemData = {
            day: tmpDate,
            active: tmpDate.getMonth() === props.startDate.getMonth(),
            occupiedState: occupiedStateItem
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
            <CalendarHeader />
            <tbody>
                {weeks}
            </tbody>
        </table>
    </div>;
}

export const Calendar = (props: CalendarData) => {

    const [calendarState, setCalendarState] = useState({ dateToDisplay: props.startDate ? props.startDate : new Date() });
    const numberCalendarsToShow = props.numberCalendarsToShow ? props.numberCalendarsToShow : 1;

    const calendarItems: JSX.Element[] = [];
    for (let index = 0; index < numberCalendarsToShow; index++) {
        const startDate = new Date(calendarState.dateToDisplay.getFullYear(), calendarState.dateToDisplay.getMonth() + index);
        calendarItems.push(<CalendarItem key={startDate.getTime()} {...props} startDate={startDate} />)
    }

    return <div className="calendar-container">
        <div className="btn" onClick={() => {
            const curDate = new Date();
            if (calendarState.dateToDisplay.getFullYear() > curDate.getFullYear() ||
                (calendarState.dateToDisplay.getMonth() > curDate.getMonth() && calendarState.dateToDisplay.getFullYear() === curDate.getFullYear()))
                setCalendarState({ dateToDisplay: new Date(calendarState.dateToDisplay.getFullYear(), calendarState.dateToDisplay.getMonth() - 1) });
        }
        }>
            <div className="arrow-left" />
        </div>

        <div className="calendar-flex">
            {calendarItems}
        </div>

        <div className="btn" onClick={() => {
            setCalendarState({ dateToDisplay: new Date(calendarState.dateToDisplay.getFullYear(), calendarState.dateToDisplay.getMonth() + 1) });
        }
        }>
            <div className="arrow-right" />
        </div>
    </div>;
}
function defaultWeekDayNames() {
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
}

function defaultMonthNames() {
    return ["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
}

