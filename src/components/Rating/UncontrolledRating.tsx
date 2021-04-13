import React, {useState} from "react";
import s from './UncontrolledRating.module.css'




export function UncontrolledRating() {
    let [value, setValue] = useState(0)
    return (
        <div className={s.rating}>
            <span onClick={()=>{setValue(1)}}><Star selected={value > 0}/></span>
            <span onClick={()=>{setValue(2)}}><Star selected={value > 1}/></span>
            <span onClick={()=>{setValue(3)}}><Star selected={value > 2}/></span>
            <span onClick={()=>{setValue(4)}}><Star selected={value > 3}/></span>
            <span onClick={()=>{setValue(5)}}><Star selected={value > 4}/></span>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
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
        return props.selected ? <div className={s.starSelected}/> : <div className={s.starUnSelected}/>

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