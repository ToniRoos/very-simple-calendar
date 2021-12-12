import { FunctionComponent } from "react";
import { CalendarDataOptions, CalendarEvent, EventConditionItem } from "./types";
export interface CalendarData {
    startDate?: Date;
    events: CalendarEvent[];
    eventConditions?: EventConditionItem[];
    options?: CalendarDataOptions;
}
declare const CalendarItem: FunctionComponent<CalendarData>;
export { CalendarItem };
