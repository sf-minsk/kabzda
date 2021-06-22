import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type ProsType = {
    mode?: 'analog' | 'digital'
}

export type ClockViewPropsType = {
    date: Date
}



export const Clock: React.FC<ProsType> = (props: ProsType) => {
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const intID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intID)
        }
    }, [])

    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }


    return <div>
        {view}
    </div>
}



