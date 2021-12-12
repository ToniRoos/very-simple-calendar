import React, { FunctionComponent } from "react";

interface CalenderDayContainerProps {
    title: string;
    onClick: () => void;
}

const CalenderDayContainer: FunctionComponent<CalenderDayContainerProps> = ({ children, title, onClick }) => {
    return (
        <td title={title} onClick={() => onClick}>
            {children}
        </td>
    );
}

export {
    CalenderDayContainer
};