/// <reference types="react" />
export interface CalendarHeaderData {
    weekDayNames?: string[];
    shiftWeekStartDay?: number;
}
declare const CalendarHeader: (props: CalendarHeaderData) => JSX.Element;
export { CalendarHeader };
