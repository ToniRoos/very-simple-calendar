import React, { FunctionComponent } from "react";

enum SlideBtnType {
    left = "left",
    right = "right"
}

interface CalendatSlideBtnProps {
    onClick: () => void;
    type: SlideBtnType;
}

const CalendatSlideBtn: FunctionComponent<CalendatSlideBtnProps> = ({ type, onClick }) => {
    return (
        <div className="calendar-btn" onClick={onClick}>
            <div className={`calendar-${type}`} />
        </div>
    )
}

export {
    CalendatSlideBtn,
    SlideBtnType
};