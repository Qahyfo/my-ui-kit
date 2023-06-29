import React from 'react'
import { ComponentStory, Meta } from '@storybook/react'

import MyButton from '../MyButton/MyButton'

export default {
    title: 'Example/Button',
    component: MyButton,
    
} as Meta<typeof MyButton>

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const RedBtn = Template.bind({});
RedBtn.args = {
    color: 'red',
    children: "Какой-то текст"
};

export const OrangeBtn = Template.bind({})
OrangeBtn.args = {
    color: 'orange',
    children: "Какой-то текст"
}

export const BigBtn = Template.bind({})
BigBtn.args = {
    color: 'orange',
    big: true,
    children: "Какой-то текст"
}