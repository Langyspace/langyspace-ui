import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardProgressTrack } from '.'
const meta = {
  title: 'Molecules/FlashcardProgressTrack',
  component: FlashcardProgressTrack,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof FlashcardProgressTrack>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
