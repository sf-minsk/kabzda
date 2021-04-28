import React, {useState} from 'react';
import {Meta} from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
} as Meta;

export const RatingMode = () => <UncontrolledRating defaultValue={2}/>;