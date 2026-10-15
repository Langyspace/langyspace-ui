import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFront } from '.'
const meta = {
  title: 'Molecules/FlashcardFront',
  component: FlashcardFront,
  tags: ['visual-review'],
  args: { children: 'Conteúdo do cartão' },
} satisfies Meta<typeof FlashcardFront>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
