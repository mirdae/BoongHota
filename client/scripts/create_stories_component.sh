#!/usr/bin/env bash

if [ -z "$*" ]; then
 echo "put argument with ComponentName"
 exit 0

fi

FOLDER="stories/components"
FILE_NAME=$1
FIRST_CAP="$(tr '[:lower:]' '[:upper:]' <<< ${FOLDER:0:1})${FOLDER:1}"
APPEND=`echo "${FIRST_CAP%?}"`

echo `touch src/${FOLDER}/${FILE_NAME}.stories.tsx`

echo `echo "import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'components/${FILE_NAME}',
  component: ${FILE_NAME},
} as Meta;

const Template: Story = (args) => <${FILE_NAME} {...args} />;

export const ${FILE_NAME}Story = Template.bind({});
" > src/${FOLDER}/${FILE_NAME}.stories.tsx`
