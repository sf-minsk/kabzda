import React from "react";
import s from "./Accordion.module.css";

type itemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    /**
     * Collapse
     */
    collapsed: boolean
    /**
     * Callback that is called when any item will clicked
     * @param value is value of clicked item
     */
    setAccordionCollapsed: (value: boolean) => void
    /**
     * Optional button name color
     */
    color?: string
    items: itemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} color={props.color} accordionCollapsed={props.collapsed} setAccordionCollapsed={props.setAccordionCollapsed}/>
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: (value: boolean) => void
    accordionCollapsed: boolean
    color?: string

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => {props.setAccordionCollapsed(!props.accordionCollapsed)}} className={s.titleStyle} style={{color: props.color ? props.color : 'black'}}>{props.title}</h3>
}
type AccordionBodyPropsType = {
    items: itemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul className={s.menuStyle}>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i}</li>)}
        </ul>
    )
}
