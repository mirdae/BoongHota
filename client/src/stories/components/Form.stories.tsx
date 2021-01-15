import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Form from '../../components/Form';

export default {
  title: 'components/Form',
  component: Form,
} as Meta;

const Template: Story = (args) => <Form {...args} />;

export const FormStory = Template.bind({});

