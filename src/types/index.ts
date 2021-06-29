export interface DateRange {
    startDate: Date;
    endDate: Date;
}

export interface CalendarData extends CalendarHeaderData {
    startDate: Date;
    datesOccupied: DateRange[];
    occupiedStates: OccupiedStateItem[];
    monthNames?: string[];
    numberCalendarsToShow?: number;
}

export interface NumberRange {
    start: number;
    end: number;
}

export interface OccupiedStateItem {
    range: NumberRange;
    tooltip?: string;
    className: string;
}

export interface CalendarItemData {
    day: Date;
    active: boolean;
    occupiedState: OccupiedStateItem;
}

export interface CalendarHeaderData {
    weekDayNames?: string[];
}

export interface CalendarRowData {
    row: CalendarItemData[];
}