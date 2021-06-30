import React from "react";
import { isInRange } from "../logic/helper";
import { CalendarDayProps } from "../types";

export const CalendarDay = (props: CalendarDayProps) => {

    const occupiedCountsPerDay = props.eventsOfDay.length;

    let description = props.eventsOfDay.filter(event => event.description).map(event => event.description).join("\n");
    let classNameBrushed = "";

    if (props.eventConditions) {
        const filteredStates = props.eventConditions.filter(item => isInRange(item.range, occupiedCountsPerDay));
        const eventCondition = filteredStates.length === 0 ? props.eventConditions[occupiedCountsPerDay] : filteredStates[0];

        if (eventCondition.description) {
            description = eventCondition.description;
        }
        classNameBrushed = eventCondition.className;
    }

    const className = props.active ? 'calendar calendar-item calendar-item-active' : 'calendar calendar-item calendar-item-inactive';
    const classNameBusy = occupiedCountsPerDay > 0 ? "calendar-item-busy" : "";

    return <td title={description}>
        <div className={`${className} ${classNameBusy} ${classNameBrushed}`}>
            {props.day.getDate()}
        </div>
    </td>;
};
