import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardSwiper } from '.'
const meta = {
  title: 'Molecules/FlashcardSwiper',
  component: FlashcardSwiper,
  tags: ['visual-review'],
  args: { children: 'Conteúdo do cartão' },
} satisfies Meta<typeof FlashcardSwiper>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
