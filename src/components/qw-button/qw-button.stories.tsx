import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { QwButton, type QwButtonProps } from './qw-button';

const meta: Meta<QwButtonProps> = {
  title: 'Qwik Design System/Action Elements/QwButton',
  component: QwButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
  },
};

type Story = StoryObj<QwButtonProps>;

export default meta;

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    ariaLabel: '',
  },
  render: (props) => <QwButton {...props}>Some QwButton</QwButton>,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    disabled: false,
    ariaLabel: '',
  },
  render: (props) => <QwButton {...props}>Some QwButton</QwButton>,
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    disabled: false,
    ariaLabel: '',
  },
  render: (props) => <QwButton {...props}>Some QwButton</QwButton>,
};

export const Disabled: Story = {
  args: {
    variant: 'secondary',
    disabled: true,
    ariaLabel: '',
  },
  render: (props) => <QwButton {...props}>Some QwButton</QwButton>,
};
