import React from 'react';

type OnOffType = {
    on: boolean
    setOn: (value: boolean) => void
    defaultOn?: boolean
}


export function OnOff(props: OnOffType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '3px',
        padding: '1px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '3px',
        padding: '1px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div onClick={() => {props.setOn(true)}} style={onStyle}>ON</div>
            <div onClick={() => {props.setOn(false)}} style={offStyle}>OFF</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}




