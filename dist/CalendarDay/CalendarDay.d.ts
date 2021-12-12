/// <reference types="react" />
import { CalendarDayData } from "./ContentEventlistFormatter";
import { CalendarEvent, EventConditionItem } from "../types";
export interface CalendarDayProps extends CalendarDayContent {
    day: Date;
    active: boolean;
    eventsOfDay: CalendarEvent[];
    eventConditions?: EventConditionItem[];
}
export interface CalendarDayContent {
    calendarDayContent?: (calenderDayProps: CalendarDayData) => JSX.Element | JSX.Element[];
    calendarDayTemplate?: (calenderDayProps: CalendarDayData) => JSX.Element | JSX.Element[];
}
export declare const CalendarDay: (props: CalendarDayProps) => JSX.Element;
