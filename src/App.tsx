import React from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
// import Accordion from "./components/Accordion/Accordion";
// import {Rating} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {
    return (
        <div className={'App'}>
            <OnOff/>
            <UncontrolledAccordion titleValue={'MENU'}/>
            <UncontrolledAccordion titleValue={'USERS'}/>
            <UncontrolledRating/>
            {/*<Rating value={0}/>*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'das'}/>*/}
            {/*<h3>HELLO</h3>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={false}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={true}/>*/}
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