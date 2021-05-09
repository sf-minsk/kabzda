import React, {KeyboardEvent, useEffect, useState} from "react";
import style from './Select.module.css'

type ItemType = {
    value: string
    title: string
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        setActive(!active)
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        setHoveredElementValue(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Escape' || e.key === 'Enter') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={style.select}>
                <span
                    tabIndex={0}
                    onKeyUp={onKeyUp}
                    className={style.main}
                    onClick={toggleItems}
                >{selectedItem && selectedItem.title}</span>
                {active &&
                <div className={style.items}>
                    {props.items.map(i => <div

                        onMouseEnter={() => setHoveredElementValue(i.value)}
                        className={style.item + ' ' + (hoveredItem === i ? style.select : ' ')}
                        key={i.value}
                        onClick={() => onItemClick(i.value)}
                    >{i.title}</div>)}
                </div>
                }
            </div>
        </>
    )
}
