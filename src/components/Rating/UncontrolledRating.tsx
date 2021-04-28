import React, {useState} from "react";
import s from './UncontrolledRating.module.css'

type UncontrolledRatingPropsType = {
    defaultValue?: 0 | 1 | 2 | 3 | 4 | 5
}


export function UncontrolledRating(props:UncontrolledRatingPropsType) {
    let [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div className={s.rating}>
            {/*<span onClick={()=>{setValue(1)}}><Star selected={value > 0}/></span>*/}
            {/*<span onClick={()=>{setValue(2)}}><Star selected={value > 1}/></span>*/}
            {/*<span onClick={()=>{setValue(3)}}><Star selected={value > 2}/></span>*/}
            {/*<span onClick={()=>{setValue(4)}}><Star selected={value > 3}/></span>*/}
            {/*<span onClick={()=>{setValue(5)}}><Star selected={value > 4}/></span>*/}
            <Star selected={value > 0} setValue={() => {setValue(1)}}/>
            <Star selected={value > 1} setValue={() => {setValue(2)}}/>
            <Star selected={value > 2} setValue={() => {setValue(3)}}/>
            <Star selected={value > 3} setValue={() => {setValue(4)}}/>
            <Star selected={value > 4} setValue={() => {setValue(5)}}/>

        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

// function Star(props: StarPropsType) {
//     console.log('Star rendering')
//     switch (props.selected) {
//         case true:
//             return <span><b>star </b></span>
//         default:
//             return <span>star </span>
//     }

    function Star(props: StarPropsType) {
        console.log('Star rendering')
        return  <div onClick={() => {props.setValue()}} className={props.selected ? s.starSelected : s.starUnSelected}/>

    // if (props.selected) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>
    // }
}


// function Star(props: StarPropsType) {
//     console.log('Star rendering')
//     if (props.selected) {
//         return <span><b>star </b></span>
//     } else {
//         return <span>star </span>
//     }
// }