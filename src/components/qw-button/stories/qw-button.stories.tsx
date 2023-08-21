import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { QwButton, type QwButtonProps } from '../qw-button';

const meta: Meta<QwButtonProps> = {
  title: 'UI - Elements/Action Elements/QwButton',
  component: QwButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['auto', 'full'],
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

export const PrimaryFull: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    size: 'full',
    ariaLabel: '',
  },
  render: (props) => <QwButton {...props}>Some QwButton</QwButton>,
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
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

export const SecondaryFull: Story = {
  args: {
    variant: 'secondary',
    disabled: false,
    size: 'full',
    ariaLabel: '',
  },
  render: (props) => <QwButton {...props}>Some QwButton</QwButton>,
};

export const SecondarDisabled: Story = {
  args: {
    variant: 'secondary',
    disabled: true,
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

export const TertiaryFull: Story = {
  args: {
    variant: 'tertiary',
    disabled: false,
    size: 'full',
    ariaLabel: '',
  },
  render: (props) => <QwButton {...props}>Some QwButton</QwButton>,
};

export const TertiaryDisabled: Story = {
  args: {
    variant: 'tertiary',
    disabled: true,
    ariaLabel: '',
  },
  render: (props) => <QwButton {...props}>Some QwButton</QwButton>,
};

export const Link: Story = {
  args: {
    variant: 'link',
    disabled: false,
    ariaLabel: '',
  },
  render: (props) => <QwButton {...props}>Some QwButton</QwButton>,
};

export const LinkFull: Story = {
  args: {
    variant: 'link',
    disabled: false,
    size: 'full',
    ariaLabel: '',
  },
  render: (props) => <QwButton {...props}>Some QwButton</QwButton>,
};

export const LinkDisabled: Story = {
  args: {
    variant: 'link',
    disabled: true,
    ariaLabel: '',
  },
  render: (props) => <QwButton {...props}>Some QwButton</QwButton>,
};
