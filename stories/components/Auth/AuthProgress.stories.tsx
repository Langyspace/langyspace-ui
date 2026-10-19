import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthProgress } from '../../../src/components/Auth/AuthProgress'

const meta = {
  title: 'Auth/AuthProgress',
  component: AuthProgress,
  tags: ['visual-review'],
  args: {},
} satisfies Meta<typeof AuthProgress>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
