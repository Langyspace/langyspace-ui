import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFeedback } from '.'
const meta = {
  title: 'Molecules/FlashcardFeedback',
  component: FlashcardFeedback,
  tags: ['visual-review'],
  args: { children: 'Conteúdo do cartão' },
} satisfies Meta<typeof FlashcardFeedback>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
