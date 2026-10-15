import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFlipHint } from '.'
const meta = {
  title: 'Molecules/FlashcardFlipHint',
  component: FlashcardFlipHint,
  tags: ['visual-review'],
  args: { children: 'Conteúdo do cartão' },
} satisfies Meta<typeof FlashcardFlipHint>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
