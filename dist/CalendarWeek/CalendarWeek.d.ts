import { FunctionComponent } from "react";
import { CalendarDayProps } from "../CalendarDay/CalendarDay";
export interface CalendarWeekProps {
    calendarDays: CalendarDayProps[];
}
declare const CalendarWeek: FunctionComponent<CalendarWeekProps>;
export { CalendarWeek };
