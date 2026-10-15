import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardFrame } from '.'
const meta = {
  title: 'Molecules/FlashcardFrame',
  component: FlashcardFrame,
  tags: ['visual-review'],
  args: { children: 'Conteúdo do cartão' },
} satisfies Meta<typeof FlashcardFrame>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
