import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthProgress } from '.'

const meta = {
  title: 'Atoms/AuthProgress',
  component: AuthProgress,
  tags: ['visual-review'],
  args: {},
} satisfies Meta<typeof AuthProgress>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
