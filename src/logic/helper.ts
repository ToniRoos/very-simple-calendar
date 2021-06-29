import { DateRange, NumberRange } from "../types";

export const isDateInRange = (range: DateRange, date: Date) => {

    const tmpDate = date.getTime();
    return isInRange({ start: range.startDate.getTime(), end: range.endDate.getTime() }, tmpDate);
}

export const isInRange = (range: NumberRange, number: number) => {

    return number >= range.start && number <= range.end;
}