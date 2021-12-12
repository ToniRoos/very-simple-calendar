import { DateRange, NumberRange } from "../types";
declare const isDateInRange: (range: DateRange, date: Date) => boolean;
declare const isNumberInRange: (range: NumberRange, number: number) => boolean;
export { isDateInRange, isNumberInRange };
