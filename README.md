[![Node.js CI](https://github.com/ToniRoos/very-simple-calendar/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/ToniRoos/very-simple-calendar/actions/workflows/main.yml)
# Very simple calendar

Should be a very simple react based calendar to show occupied states or just even events.

No matter if small...
![Preview](docu/small-cal-one.png)

...or big calendar, to show occupied states or to show events, use it as you want. 
![Preview](docu/big-cal.png)

## Install

...

## Run examples

To run the examples on a local server, call the following commands.

```sh
npm install
npm run examples
```

## Usage
Simple example of usage:
```tsx
import { Calendar } from "very-simple-calendar";

export const App = () => {

    let events: CalendarEvent[] = [
        { startDate: new Date("2021-11-05"), endDate: new Date("2021-11-11") },
        { startDate: new Date("2021-11-05"), endDate: new Date("2021-11-07") },
        { startDate: new Date("2021-11-07"), endDate: new Date("2021-11-14") },
        { startDate: new Date("2021-06-30"), description: "Private" },
        { startDate: new Date("2021-06-30"), description: "Private 2" }
    ];

    return <div>
        <Calendar events={events} />
    </div>
}
```
Example for big calendar with custom content:
```tsx
export const App = () => {

    let events: CalendarEvent[] = [
        { startDate: new Date("2021-11-05"), endDate: new Date("2021-11-11") },
        { startDate: new Date("2021-11-05"), endDate: new Date("2021-11-07") },
        { startDate: new Date("2021-11-07"), endDate: new Date("2021-11-14") },
        { startDate: new Date("2021-06-30"), description: "Private" },
        { startDate: new Date("2021-06-30"), description: "Private 2" }
    ];

    return <div>
        <Calendar events={events} options={{
            type: CalendarType.big
        }} />
    </div>
}
```

## API
```tsx
export const App = () => {

    return <div>
        <Calendar startDate={...} events={...} options={...} eventConditions={...} />
    </div>
}
```


```startDate?```: default today, example: new Date(2021, 0, 5)

```events```: ```CalendarEvent[]``` (list of calendar events  to show)<br>
 - ```CalendarEvent```: (used to describe an event)
    - ```startDate```: ```Date```
    - ```endDate?```: ```Date```
    - ```description?```: ```string```
    - ```id?```: ```string``` (can be used to identify events, for example to group events)

```options?```: ```CalendarDataOptions``` (display options)
 - ```monthNames?```: ```string[]``` (default: ["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"])
 - ```weekDayNames?```: ```string[]``` (default: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
 - ```numberCalendarsToShow?```: ```number``` (number of pages to show)
 - ```type?```: ```CalendarType``` (small | big)
 - ```calendarDayContent?```: ```(calenderDayProps: CalendarDayData) => JSX.Element | JSX.Element[]``` (create your custom week day formatter)
