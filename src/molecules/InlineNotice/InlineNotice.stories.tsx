import type { Meta, StoryObj } from '@storybook/react-vite'
import { InlineNotice } from '.'

const meta = {
  title: 'Molecules/InlineNotice',
  component: InlineNotice,
  tags: ['visual-review'],
  args: { role: 'status', children: 'Sua atualização está sendo processada.' },
} satisfies Meta<typeof InlineNotice>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
