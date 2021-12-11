import React, { FunctionComponent } from "react";

interface CalenderDayContainerProps {
    title: string;
}

const CalenderDayContainer: FunctionComponent<CalenderDayContainerProps> = ({ children, title }) => {
    return (
        <td title={title}>
            {children}
        </td>
    );
}

export {
    CalenderDayContainer
};