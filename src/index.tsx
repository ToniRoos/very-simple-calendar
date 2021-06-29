import * as React from "react";
import * as ReactDOM from "react-dom";

// import "bootstrap";

import { Calendar } from "./components/Calendar";
import { DateRange, OccupiedStateItem } from "./types";

function GetCalendarDates(): DateRange[] {
    return [
        { startDate: new Date("2021-11-05"), endDate: new Date("2021-11-11") },
        { startDate: new Date("2021-11-05"), endDate: new Date("2021-11-07") },
        { startDate: new Date("2021-11-07"), endDate: new Date("2021-11-14") }
    ]
};

let dates: DateRange[] = GetCalendarDates();

const occupiedStates: OccupiedStateItem[] = [
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
    <Calendar datesOccupied={dates} startDate={new Date()} occupiedStates={occupiedStates} numberCalendarsToShow={2} />,
    document.getElementById("root")
);
