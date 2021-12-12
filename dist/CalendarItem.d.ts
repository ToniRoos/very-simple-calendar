import { FunctionComponent } from "react";
import { CalendarDayProps } from "./CalendarDay/CalendarDay";
import { CalendarDataOptions, CalendarEvent, EventConditionItem } from "./types";
export interface CalendarData {
    startDate?: Date;
    events: CalendarEvent[];
    eventConditions?: EventConditionItem[];
    onClicked?: (calendarDayData: Omit<CalendarDayProps, 'onCalendarDayClicked'>) => void;
    options?: CalendarDataOptions;
}
declare const CalendarItem: FunctionComponent<CalendarData>;
export { CalendarItem };
