import { Base } from './Base';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'templates/Base',
  component: Base,
  argTypes: {}
};

const Template = (args) => <Base {...args} />;

export const BaseTemplate = Template.bind({});
BaseTemplate.args = {};
