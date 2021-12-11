import React, { FunctionComponent } from "react";

const CalendarContainer: FunctionComponent = ({ children }) => {
    return (
        <div className="calendar-container">
            {children}
        </div>
    );
}

export { CalendarContainer };