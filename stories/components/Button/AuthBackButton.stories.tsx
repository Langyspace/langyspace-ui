import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthBackButton } from '../../../src/compatibility/Button'

const meta = {
  title: 'Compatibility/AuthBackButton',
  component: AuthBackButton,
  tags: ['visual-review'],
  args: { children: 'Continuar' },
} satisfies Meta<typeof AuthBackButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Disabled: Story = { args: { disabled: true } }
