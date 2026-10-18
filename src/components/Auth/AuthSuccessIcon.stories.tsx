import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthSuccessIcon } from './AuthSuccessIcon'

const meta = {
  title: 'Auth/AuthSuccessIcon',
  component: AuthSuccessIcon,
  tags: ['visual-review'],
  args: {},
} satisfies Meta<typeof AuthSuccessIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
