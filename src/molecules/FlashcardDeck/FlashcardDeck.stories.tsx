import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardDeck } from '.'
const meta = {
  title: 'Molecules/FlashcardDeck',
  component: FlashcardDeck,
  tags: ['visual-review'],
  args: { children: 'Conteúdo do cartão' },
} satisfies Meta<typeof FlashcardDeck>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
