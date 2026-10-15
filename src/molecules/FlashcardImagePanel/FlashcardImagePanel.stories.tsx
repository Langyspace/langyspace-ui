import type { Meta, StoryObj } from '@storybook/react-vite'
import { FlashcardImagePanel } from '.'
const meta = {
  title: 'Molecules/FlashcardImagePanel',
  component: FlashcardImagePanel,
  tags: ['visual-review'],
  args: { children: 'Conteúdo do cartão' },
} satisfies Meta<typeof FlashcardImagePanel>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
