import React, {useState} from 'react';
import {Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
} as Meta;

const callback = action('accordion changed')

export const Collapsed = () => <Accordion titleValue={'Menu'} collapsed={true} setAccordionCollapsed={callback}/>;
export const Uncollapsed = () => <Accordion titleValue={'Users'} collapsed={false} setAccordionCollapsed={callback}/>;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'TEST'} collapsed={value} setAccordionCollapsed={() => setValue(!value)}/>;
}
