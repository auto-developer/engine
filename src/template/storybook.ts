const renderStorybook = (name: string) => {
    const COMPONENT_NAME = name
    const COMPONENT_TYPE = `ComponentStory<typeof ${name}>`
    const storybook = `import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ${COMPONENT_NAME} from './index';

export default {
  title: 'Example/${COMPONENT_NAME}',
  component: ${COMPONENT_NAME},
} as ComponentMeta<typeof ${COMPONENT_NAME}>;

const Template: ${COMPONENT_TYPE} = (args) => <${COMPONENT_NAME} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
`
    return storybook
}

export default renderStorybook
