import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShadowingWord } from '.'
const meta = {
  title: 'Molecules/ShadowingWord',
  component: ShadowingWord,
  tags: ['visual-review'],
  args: { state: 'current', children: 'practice' },
} satisfies Meta<typeof ShadowingWord>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

export const Pending: Story = { args: { state: 'pending' } }
export const Spoken: Story = { args: { state: 'spoken' } }
