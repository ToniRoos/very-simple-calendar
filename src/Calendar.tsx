import React, { FunctionComponent, useState } from "react";
import { CalendarData } from "./CalendarItem";
import { CalendatSlideBtn, SlideBtnType } from "./CalendarSlideBtn";
import { CalendarContainer } from "./CalendarContainer";
import { CalendarPageContent } from "./CalendarPageContent";

import './scss/styles.scss';

const Calendar: FunctionComponent<CalendarData> = (props) => {

    const [calendarDateToShow, setCalendarState] = useState({ dateToDisplay: props.startDate ? props.startDate : new Date() });

    const handleLeftButtonClick = () => {
        const curDate = new Date();
        if (calendarDateToShow.dateToDisplay.getFullYear() > curDate.getFullYear()
            || (calendarDateToShow.dateToDisplay.getMonth() > curDate.getMonth() && calendarDateToShow.dateToDisplay.getFullYear() === curDate.getFullYear())) {
            setCalendarState({ dateToDisplay: new Date(calendarDateToShow.dateToDisplay.getFullYear(), calendarDateToShow.dateToDisplay.getMonth() - 1) });
        }
    }
    const handleRightButtonClick = () => {
        setCalendarState({ dateToDisplay: new Date(calendarDateToShow.dateToDisplay.getFullYear(), calendarDateToShow.dateToDisplay.getMonth() + 1) });
    }

    return <CalendarContainer>
        <CalendatSlideBtn type={SlideBtnType.left} onClick={handleLeftButtonClick} />
        <CalendarPageContent calendarData={props} calendarDateToShow={calendarDateToShow.dateToDisplay} />
        <CalendatSlideBtn type={SlideBtnType.right} onClick={handleRightButtonClick} />
    </CalendarContainer>;
}

export { Calendar };
