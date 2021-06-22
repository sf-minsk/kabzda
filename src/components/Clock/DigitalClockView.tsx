import React from "react";
import {ClockViewPropsType} from "./Clock";

export function getToDigitString(value: number) {
    return (value < 10 ? '0' + value : value)
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{getToDigitString(date.getHours())}</span>
        :
        <span>{getToDigitString(date.getMinutes())}</span>
        :
        <span>{getToDigitString(date.getSeconds())}</span>
    </>
}