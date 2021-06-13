import React, {useEffect, useState} from "react";

type ProsType = {

}

function getToDigitString(value: number) {
    return (value < 10 ? '0' + value : value)
}

export const Clock: React.FC<ProsType> = (props: ProsType) => {
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const intID = setInterval(() => {
            console.log('tick')
            setDate(new Date())}, 1000)
        return () => {
            clearInterval(intID)
        }
    },[])

    return <div>
        <span>{getToDigitString(date.getHours())}</span>
        :
        <span>{getToDigitString(date.getMinutes())}</span>
        :
        <span>{getToDigitString(date.getSeconds())}</span>
    </div>
}