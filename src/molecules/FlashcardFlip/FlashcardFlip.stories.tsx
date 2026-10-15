import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFlip } from '.'
const meta = {
  title: 'Molecules/FlashcardFlip',
  component: FlashcardFlip,
  tags: ['visual-review'],
  args: { children: 'Conteúdo do cartão' },
} satisfies Meta<typeof FlashcardFlip>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

export const Flipped: Story = { args: { flipped: true } }
