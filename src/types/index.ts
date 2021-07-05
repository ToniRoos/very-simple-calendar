export interface DateRange {
    startDate: Date;
    endDate?: Date;
}

export interface CalendarEvent extends DateRange {
    description?: string;
    id?: string;
}

export interface CalendarData extends CalendarHeaderData {
    startDate?: Date;
    events: CalendarEvent[];
    eventConditions?: EventConditionItem[];
    options?: CalendarDataOptions;
}
export const enum CalendarType {
    small,
    big
}

export interface CalendarDataOptions extends CalendarDayContent {
    monthNames?: string[];
    weekDayNames?: string[];
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
}

export interface CalendarRowData {
    row: CalendarDayProps[];
}