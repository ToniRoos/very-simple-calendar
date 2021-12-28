import React, { FunctionComponent } from "react";
import { CalendarDayData } from "./ContentEventlistFormatter";
import { CalendarEvent, CalendarDayFormatter } from "../types";
import { CalenderDayContainer } from "./CalendarDayContainer";

export interface CalendarDayProps extends CalendarDayContent {
    day: Date;
    active: boolean;
    eventsOfDay: CalendarEvent[];
    eventConditions?: CalendarDayFormatter;
    onCalendarDayClicked: (calendarDayData: CalendarDayData) => void;
}

export interface CalendarDayContent {
    calendarDayContent?: FunctionComponent<CalendarDayData>;
    calendarDayTemplate?: FunctionComponent<CalendarDayData>;
}

export const CalendarDay = (props: CalendarDayProps) => {

    const occupiedCountsPerDay = props.eventsOfDay.length;

    let descriptionList = props.eventsOfDay.filter(event => event.description).map(event => event.description);
    let description = descriptionList.join("\n");
    let classNameBrushed = "";
    let classNameBusy = "";
    const activeClassName = props.active ? 'calendar-item-active' : 'calendar-item-inactive';

    if (props.eventConditions) {

        const calendarDayDescriptor = props.eventConditions.validateEventsOfDay(props.active, props.day, props.eventsOfDay);
        if (calendarDayDescriptor) {
            if (calendarDayDescriptor.description) {
                description = calendarDayDescriptor.description;
            }
            classNameBrushed = calendarDayDescriptor.className;
        }
    } else {
        if (occupiedCountsPerDay > 0) {
            classNameBusy = "calendar-item-busy";
        }
    }

    return (
        <CalenderDayContainer title={description} onClick={() => {
            if (props.onCalendarDayClicked) {
                props.onCalendarDayClicked(props);
            }
        }}>
            {props.calendarDayTemplate
                ? props.calendarDayTemplate(props)
                : <div className={`calendar calendar-item ${activeClassName} ${classNameBusy} ${classNameBrushed}`}>
                    {props.day.getDate()}
                    {props.calendarDayContent ? props.calendarDayContent(props) : undefined}
                </div>}
        </CalenderDayContainer>
    );
};
