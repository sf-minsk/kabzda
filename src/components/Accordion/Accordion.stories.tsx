import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes : {
        color: {
            control: 'color',
            table: {
                category: 'colors'
            }
        }
    }
} as Meta;

const callback = action('accordion changed')
const onClickCallback = action('some item was clicked')


const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const AccordionCollapsedProps = {
    setAccordionCollapsed: callback
}
export const Collapsed = Template.bind({})
Collapsed.args = {
    ...AccordionCollapsedProps,
    titleValue: 'Menu',
    collapsed: true,
    items: [{title: 'Dmitriy',value: 1},{title: 'Valera',value: 2},{title: 'Artem',value: 3},{title: 'Victor',value: 4}],
    onClick: onClickCallback
}

export const UnCollapsed = Template.bind({})
UnCollapsed.args = {
    ...AccordionCollapsedProps,
    titleValue: 'Users',
    collapsed: false,
    items: [{title: 'Dmitriy',value: 1},{title: 'Valera',value: 2},{title: 'Artem',value: 3},{title: 'Victor',value: 4}],
    onClick: onClickCallback
}




export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion {...args} collapsed={collapsed} setAccordionCollapsed={() => setCollapsed(!collapsed)} onClick={onClickCallback}/>;
}
ModeChanging.args = {
    titleValue:'TEST',
    items: [{title: 'Dmitriy',value: 1},{title: 'Valera',value: 2},{title: 'Artem',value: 3},{title: 'Victor',value: 4}],

}


