import React, { FunctionComponent } from "react";
import { CalendarDayData } from "./ContentEventlistFormatter";
import { CalendarEvent, EventConditionParser } from "../types";
import { CalenderDayContainer } from "./CalendarDayContainer";

export interface CalendarDayProps extends CalendarDayContent {
    day: Date;
    active: boolean;
    eventsOfDay: CalendarEvent[];
    eventConditions?: EventConditionParser;
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

    if (props.eventConditions) {

        const calendarDayDescriptor = props.eventConditions.validateEventsOfDay(props.active, props.day, props.eventsOfDay);
        if (calendarDayDescriptor) {
            if (calendarDayDescriptor.description) {
                description = calendarDayDescriptor.description;
            }
            classNameBrushed = calendarDayDescriptor.className;
        }
    }

    const activeClassName = props.active ? 'calendar-item-active' : 'calendar-item-inactive';
    const classNameBusy = occupiedCountsPerDay > 0 ? "calendar-item-busy" : "";

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
