import { FunctionComponent } from "react";
import { CalendarDayProps } from "./CalendarDay/CalendarDay";
import { CalendarDataOptions, CalendarEvent, EventConditionItem } from "./types";
export interface CalendarData {
    startDate?: Date;
    events: CalendarEvent[];
    eventConditions?: EventConditionItem[];
    onClicked?: (calendarDayData: CalendarDayClickedData) => void;
    options?: CalendarDataOptions;
}
export declare type CalendarDayClickedData = Omit<CalendarDayProps, 'onCalendarDayClicked'>;
declare const CalendarItem: FunctionComponent<CalendarData>;
export { CalendarItem };
