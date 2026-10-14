import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthSuccessState } from '.'
const meta = {
  title: 'Molecules/AuthSuccessState',
  component: AuthSuccessState,
  tags: ['visual-review'],
  args: { children: 'Continuar' },
} satisfies Meta<typeof AuthSuccessState>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
