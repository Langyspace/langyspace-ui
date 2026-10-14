import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardCounter } from '.'
const meta = {
  title: 'Molecules/FlashcardCounter',
  component: FlashcardCounter,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof FlashcardCounter>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
