import React, {useReducer} from "react";
import s from './UncontrolledAccordion.module.css'
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    // let [toggle, setToggle] = useState(false)
    let [state, dispatch] = useReducer(reducer, { toggle: false})
    return (
        <div>
            {/*<AccordionTitle onClick={()=> {setToggle(!toggle)}} title={props.titleValue}/>*/}
            <AccordionTitle onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }} title={props.titleValue}/>
            {!state.toggle && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }} className={s.titleStyle}>{props.title}</h3>
    )

}

function AccordionBody() {
    return (
        <ul className={s.menuStyle}>
            <li>Menu1</li>
            <li>Menu2</li>
            <li>Menu3</li>
        </ul>
    )
}
