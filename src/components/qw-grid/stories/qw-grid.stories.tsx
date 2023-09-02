import type { Meta, StoryObj } from 'storybook-framework-qwik';
import { QwGrid, type QwGridProps } from '../qw-grid';

const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const meta: Meta<QwGridProps> = {
  title: 'UI - Elements/Layout Elements/QwGrid',
  component: QwGrid,
  tags: ['autodocs'],
  argTypes: {
    rowGap: {
      options: [...cols],
      control: { type: 'select' },
    },
  },
};

type Story = StoryObj<QwGridProps>;

export default meta;

export const Primary: Story = {
  args: {},
  render: (props) => <QwGrid {...props}>Some QwGrid</QwGrid>,
};
