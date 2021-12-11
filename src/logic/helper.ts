import { DateRange, NumberRange } from "../types";

const isDateInRange = (range: DateRange, date: Date) => {

    const tmpDate = date.getTime();
    if (range.endDate) {
        return isNumberInRange({ start: range.startDate.getTime(), end: range.endDate.getTime() }, tmpDate);
    }

    return range.startDate.getFullYear() === date.getFullYear()
        && range.startDate.getMonth() === date.getMonth()
        && range.startDate.getDate() === date.getDate();
}

const isNumberInRange = (range: NumberRange, number: number) => {

    return number >= range.start && number <= range.end;
}

export {
    isDateInRange,
    isNumberInRange
}