import React, { Fragment, FunctionComponent } from "react";
import { CalendarDayProps } from "./CalendarDay";

export type CalendarDayData = Omit<CalendarDayProps, "calendarDayContent" | "calendarDayTemplate">;

const EventlistFormatter: FunctionComponent<CalendarDayData> = (({ eventsOfDay, day }) => {

    let descriptionList = eventsOfDay.filter(event => event.description).map(event => event.description);
    const descriptionListMapped = descriptionList.map((des, index) => <div key={day.getTime() + index} className="calendar-event ">{des}</div>);

    return (
        <Fragment>
            {descriptionListMapped}
        </Fragment>
    );
});

export { EventlistFormatter };