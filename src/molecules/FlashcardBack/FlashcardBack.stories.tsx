import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardBack } from '.'
const meta = {
  title: 'Molecules/FlashcardBack',
  component: FlashcardBack,
  tags: ['visual-review'],
  args: { children: 'Conteúdo do cartão' },
} satisfies Meta<typeof FlashcardBack>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
