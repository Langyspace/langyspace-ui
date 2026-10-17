import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthSuccessIcon } from '.'

const meta = {
  title: 'Atoms/AuthSuccessIcon',
  component: AuthSuccessIcon,
  tags: ['visual-review'],
  args: {},
} satisfies Meta<typeof AuthSuccessIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
