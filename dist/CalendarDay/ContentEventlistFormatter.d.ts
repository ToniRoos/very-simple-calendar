import { FunctionComponent } from "react";
import { CalendarDayProps } from "./CalendarDay";
export declare type CalendarDayData = Omit<CalendarDayProps, "calendarDayContent" | "calendarDayTemplate">;
declare const EventlistFormatter: FunctionComponent<CalendarDayData>;
export { EventlistFormatter };
