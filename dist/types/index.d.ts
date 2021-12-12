import { CalendarDayContent } from "../CalendarDay/CalendarDay";
import { CalendarHeaderData } from "../CalendarHeader";
export interface DateRange {
    startDate: Date;
    endDate?: Date;
}
export interface CalendarEvent extends DateRange {
    description?: string;
    id?: string;
}
export declare const enum CalendarType {
    small = 0,
    big = 1
}
export interface CalendarDataOptions extends CalendarDayContent, CalendarHeaderData {
    shiftWeekStartDay?: number;
    weekDayNames?: string[];
    monthNames?: string[];
    numberCalendarsToShow?: number;
    type?: CalendarType;
}
export interface NumberRange {
    start: number;
    end: number;
}
export interface CalendarDayPropsExtension {
    description?: string;
    className: string;
}
export interface EventConditionItem extends CalendarDayPropsExtension {
    range: NumberRange;
}
