import React from "react";
import { CalendarDayData } from "../types";

export const EventlistFormatter = ((data: CalendarDayData) => {

    let descriptionList = data.eventsOfDay.filter(event => event.description).map(event => event.description);
    const descriptionListMapped = descriptionList.map((des, index) => <div key={data.day.getTime() + index} className="calendar-event ">{des}</div>);

    return descriptionListMapped;
});