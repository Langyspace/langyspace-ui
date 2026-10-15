import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShadowingActivePhrase } from '.'
const meta = {
  title: 'Molecules/ShadowingActivePhrase',
  component: ShadowingActivePhrase,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof ShadowingActivePhrase>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
