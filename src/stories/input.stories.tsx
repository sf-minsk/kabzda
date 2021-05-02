import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(e) => {
        setValue(e.currentTarget.value)
    }}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    return <><input ref={inputRef}/>
        <button onClick={() => {
            const el = inputRef.current as HTMLInputElement
            setValue(el.value)
        }}>save
        </button>
        - actual value: {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input type="text" value={parentValue} onChange={onChange}/>
}

export const ControlledCheckBox = () => {
    const [checked, setChecked] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={checked} onChange={onChange}/>

}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value="2">Minsk</option>
        <option value="3">Kiev</option>
        <option value="4">Moscow</option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input value={'incubator'}/>
