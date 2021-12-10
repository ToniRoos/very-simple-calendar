/// <reference types="react" />
export interface DateRange {
    startDate: Date;
    endDate?: Date;
}
export interface CalendarEvent extends DateRange {
    description?: string;
    id?: string;
}
export interface CalendarData {
    startDate?: Date;
    events: CalendarEvent[];
    eventConditions?: EventConditionItem[];
    options?: CalendarDataOptions;
}
export declare const enum CalendarType {
    small = 0,
    big = 1
}
export interface CalendarDataOptions extends CalendarDayContent, CalendarHeaderData {
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
export interface CalendarDayProps extends CalendarDayContent {
    day: Date;
    active: boolean;
    eventsOfDay: CalendarEvent[];
    eventConditions?: EventConditionItem[];
}
export interface CalendarDayContent {
    calendarDayContent?: (calenderDayProps: CalendarDayData) => JSX.Element | JSX.Element[];
}
export interface CalendarDayData extends Omit<CalendarDayProps, "calendarDayContent"> {
}
export interface CalendarHeaderData {
    weekDayNames?: string[];
    shiftWeekStartDay?: number;
}
export interface CalendarRowData {
    row: CalendarDayProps[];
}
