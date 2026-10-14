import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardGhost } from '.'
const meta = {
  title: 'Molecules/FlashcardGhost',
  component: FlashcardGhost,
  tags: ['visual-review'],
  args: { children: 'Conteúdo do cartão', layer: 1 },
} satisfies Meta<typeof FlashcardGhost>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

export const Obscured: Story = { args: { obscured: true } }
