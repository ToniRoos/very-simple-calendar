/// <reference types="react" />
import { CalendarDayProps } from "./CalendarDay";
export declare type CalendarDayData = Omit<CalendarDayProps, "calendarDayContent" | "calendarDayTemplate">;
declare const EventlistFormatter: (data: CalendarDayData) => JSX.Element[];
export { EventlistFormatter };
