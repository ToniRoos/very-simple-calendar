import { FunctionComponent } from "react";
declare enum SlideBtnType {
    left = "left",
    right = "right"
}
interface CalendatSlideBtnProps {
    onClick: () => void;
    type: SlideBtnType;
}
declare const CalendatSlideBtn: FunctionComponent<CalendatSlideBtnProps>;
export { CalendatSlideBtn, SlideBtnType };
