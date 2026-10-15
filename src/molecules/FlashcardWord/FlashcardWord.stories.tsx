import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardWord } from '.'
const meta = {
  title: 'Molecules/FlashcardWord',
  component: FlashcardWord,
  tags: ['visual-review'],
  args: { children: 'Conteúdo do cartão' },
} satisfies Meta<typeof FlashcardWord>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
