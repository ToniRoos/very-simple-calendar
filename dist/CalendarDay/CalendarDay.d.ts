import { FunctionComponent } from "react";
import { CalendarDayData } from "./ContentEventlistFormatter";
import { CalendarEvent, CalendarDayFormatter } from "../types";
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
export declare const CalendarDay: (props: CalendarDayProps) => JSX.Element;
