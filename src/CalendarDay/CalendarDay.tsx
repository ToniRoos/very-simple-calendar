import React, { FunctionComponent } from "react";
import { CalendarDayData } from "./ContentEventlistFormatter";
import { isNumberInRange } from "../logic/helper";
import { CalendarEvent, EventConditionItem } from "../types";
import { CalenderDayContainer } from "./CalendarDayContainer";

export interface CalendarDayProps extends CalendarDayContent {
    day: Date;
    active: boolean;
    eventsOfDay: CalendarEvent[];
    eventConditions?: EventConditionItem[];
}

export interface CalendarDayContent {
    calendarDayContent?: FunctionComponent<CalendarDayData>;
    calendarDayTemplate?: FunctionComponent<CalendarDayData>;
    onCalendarDayClicked?: (calendarDayData: CalendarDayData) => void;
}

export const CalendarDay = (props: CalendarDayProps) => {

    const occupiedCountsPerDay = props.eventsOfDay.length;

    let descriptionList = props.eventsOfDay.filter(event => event.description).map(event => event.description);
    let description = descriptionList.join("\n");
    let classNameBrushed = "";

    if (props.eventConditions) {
        const filteredStates = props.eventConditions.filter(item => isNumberInRange(item.range, occupiedCountsPerDay));
        const eventCondition = filteredStates.length === 0 ? props.eventConditions[occupiedCountsPerDay] : filteredStates[0];

        if (eventCondition.description) {
            description = eventCondition.description;
        }
        classNameBrushed = eventCondition.className;
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
