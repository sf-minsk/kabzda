import React, {useState} from 'react';
import {Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
} as Meta;



export const Menu = () => <UncontrolledAccordion titleValue={'Menu'}/>;
