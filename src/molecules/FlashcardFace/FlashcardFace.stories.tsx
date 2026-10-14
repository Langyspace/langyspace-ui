import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFace } from '.'
const meta = {
  title: 'Molecules/FlashcardFace',
  component: FlashcardFace,
  tags: ['visual-review'],
  args: { children: 'Conteúdo do cartão' },
} satisfies Meta<typeof FlashcardFace>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

export const Back: Story = { args: { side: 'back' } }
