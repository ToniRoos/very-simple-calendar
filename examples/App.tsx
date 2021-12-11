import React from "react";

import { Calendar } from "../src/Calendar";
import { CalendarEvent, CalendarType, EventConditionItem } from "../src/types";

import './scss/examples.scss';

let events: CalendarEvent[] = [
    { startDate: new Date("2021-12-05"), endDate: new Date("2021-12-11") },
    { startDate: new Date("2021-12-05"), endDate: new Date("2021-12-07") },
    { startDate: new Date("2021-12-07"), endDate: new Date("2021-12-14") },
    { startDate: new Date("2022-06-30"), description: "Private" },
    { startDate: new Date("2022-06-30"), description: "Private 2" }
];

const eventConditions: EventConditionItem[] = [
    {
        range: { start: 0, end: 0 },
        className: "events-0",
        description: "nothing to do"
    },
    {
        range: { start: 1, end: 1 },
        className: "events-1",
        description: "busy"
    },
    {
        range: { start: 2, end: 3 },
        className: "events-2",
        description: "very busy"
    }];


export const App = () => {

    return <div>
        <h1>Very simple example 1 - small calendar</h1>
        <Calendar events={events} />

        <div className="example-seperator" />

        <h1>Very simple example 2 - small calendar using event conditions</h1>
        <Calendar events={events} eventConditions={eventConditions} options={{ numberCalendarsToShow: 2 }} />

        <div className="example-seperator" />

        <h1>Very simple example 3 - big calendar</h1>
        <Calendar events={events} options={{
            shiftWeekStartDay: -1,
            type: CalendarType.big
        }} />
    </div>
}