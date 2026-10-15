import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardStage } from '.'
const meta = {
  title: 'Molecules/FlashcardStage',
  component: FlashcardStage,
  tags: ['visual-review'],
  args: { children: 'Conteúdo do cartão' },
} satisfies Meta<typeof FlashcardStage>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
