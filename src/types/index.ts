export interface DateRange {
    startDate: Date;
    endDate?: Date;
}

export interface CalendarEvent extends DateRange {
    description?: string;
}

export interface CalendarData extends CalendarHeaderData {
    startDate?: Date;
    events: CalendarEvent[];
    eventConditions?: EventConditionItem[];
    monthNames?: string[];
    numberCalendarsToShow?: number;
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

export interface CalendarDayProps {
    day: Date;
    active: boolean;
    eventsOfDay: CalendarEvent[];
    eventConditions?: EventConditionItem[];
}

export interface CalendarHeaderData {
    weekDayNames?: string[];
}

export interface CalendarRowData {
    row: CalendarDayProps[];
}