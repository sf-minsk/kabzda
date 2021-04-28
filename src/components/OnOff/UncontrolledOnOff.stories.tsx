import React, {useState} from 'react';
import {Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
} as Meta;

export const OnOffMode = () => <UncontrolledOnOff/>;