import { FunctionComponent } from "react";
import { CalendarDayData } from "./ContentEventlistFormatter";
import { CalendarEvent, EventConditionItem } from "../types";
export interface CalendarDayProps extends CalendarDayContent {
    day: Date;
    active: boolean;
    eventsOfDay: CalendarEvent[];
    eventConditions?: EventConditionItem[];
    onCalendarDayClicked: (calendarDayData: CalendarDayData) => void;
}
export interface CalendarDayContent {
    calendarDayContent?: FunctionComponent<CalendarDayData>;
    calendarDayTemplate?: FunctionComponent<CalendarDayData>;
}
export declare const CalendarDay: (props: CalendarDayProps) => JSX.Element;
