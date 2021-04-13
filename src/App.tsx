import React, {useState} from 'react';
import './App.css';
// import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
// import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(true)

    return (
        <div className={'App'}>
            {/*<OnOff/>*/}
            <UncontrolledOnOff on={on} setOn={setOn}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <div> </div>
            <UncontrolledRating/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} accordionCollapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
            {/*<Accordion titleValue={'Users'} collapsed={accordionCollapsed} accordionCollapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>*/}
            {/*<UncontrolledAccordion titleValue={'MENU'}/>*/}
            {/*<UncontrolledAccordion titleValue={'USERS'}/>*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'das'}/>*/}
            {/*<h3>HELLO</h3>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    )
}

// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     return <div>{props.title}</div>
//}

export default App;