import React, {useState} from 'react';

export function UncontrolledOnOff() {
    console.log('rendering')
    let [on, setOn] = useState(false)
    console.log('on:' + on)
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '3px',
        padding: '1px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '3px',
        padding: '1px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div onClick={() => { setOn(true) }} style={onStyle}>ON</div>
            <div onClick={() => { setOn(false) }} style={offStyle}>OFF</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}
