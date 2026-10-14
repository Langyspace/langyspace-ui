import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShadowingRepetitions } from '.'
const meta = {
  title: 'Molecules/ShadowingRepetitions',
  component: ShadowingRepetitions,
  tags: ['visual-review'],
  args: { total: 3, value: 1, children: '1/3 escutas' },
} satisfies Meta<typeof ShadowingRepetitions>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

export const Playing: Story = {
  args: { value: 2, playing: true, children: '2/3 escutas' },
}
