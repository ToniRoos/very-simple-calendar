import React, { FunctionComponent } from "react";
import { EventlistFormatter } from "./CalendarDay/ContentEventlistFormatter";
import { CalendarData, CalendarItem } from "./CalendarItem";
import { CalendarType } from "./types";

interface CalendarPageContentProps {
    calendarData: CalendarData;
    calendarDateToShow: Date;
}

const CalendarPageContent: FunctionComponent<CalendarPageContentProps> = ({ calendarDateToShow, calendarData }) => {

    const numberCalendarsToShow = calendarData.options?.numberCalendarsToShow ? calendarData.options.numberCalendarsToShow : 1;

    const useBigCalendar = calendarData.options?.type === CalendarType.big;
    const classCalendarType = useBigCalendar ? "calendar-big" : "";

    const options = { ...calendarData.options };
    if (useBigCalendar && !calendarData.options?.calendarDayContent) {
        options.calendarDayContent = EventlistFormatter;
    }

    const calendarItems: JSX.Element[] = [];
    for (let index = 0; index < numberCalendarsToShow; index++) {
        const startDate = new Date(calendarDateToShow.getFullYear(), calendarDateToShow.getMonth() + index);
        calendarItems.push(<CalendarItem key={startDate.getTime()} {...calendarData} options={options} startDate={startDate} />)
    }

    return (
        <div className={`${classCalendarType} calendar-flex`}>
            {calendarItems}
        </div>
    );
}

export { CalendarPageContent };