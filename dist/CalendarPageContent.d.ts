import { FunctionComponent } from "react";
import { CalendarData } from "./CalendarItem";
interface CalendarPageContentProps {
    calendarData: CalendarData;
    calendarDateToShow: Date;
}
declare const CalendarPageContent: FunctionComponent<CalendarPageContentProps>;
export { CalendarPageContent };
