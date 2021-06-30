import * as React from "react";
import * as ReactDOM from "react-dom";

import { Calendar } from "./components/Calendar";
import { CalendarEvent, OccupiedStateItem as OccupiedDataItem } from "./types";

function GetCalendarDates(): CalendarEvent[] {
    return [
        { startDate: new Date("2021-11-05"), endDate: new Date("2021-11-11") },
        { startDate: new Date("2021-11-05"), endDate: new Date("2021-11-07") },
        { startDate: new Date("2021-11-07"), endDate: new Date("2021-11-14") },
        { startDate: new Date("2021-06-30"), description: "Private" }
    ]
};

let dates: CalendarEvent[] = GetCalendarDates();

const occupiedStates: OccupiedDataItem[] = [
    {
        range: { start: 0, end: 0 },
        className: "events-0",
        tooltip: "nothing to do"
    },
    {
        range: { start: 1, end: 1 },
        className: "events-1",
        tooltip: "busy"
    },
    {
        range: { start: 2, end: 3 },
        className: "events-2",
        tooltip: "very busy"
    }];

ReactDOM.render(
    <Calendar events={dates} occupiedStates={occupiedStates} numberCalendarsToShow={2} />,
    document.getElementById("root")
);
