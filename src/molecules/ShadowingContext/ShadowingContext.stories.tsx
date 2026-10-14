import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShadowingContext } from '.'
const meta = {
  title: 'Molecules/ShadowingContext',
  component: ShadowingContext,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof ShadowingContext>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
