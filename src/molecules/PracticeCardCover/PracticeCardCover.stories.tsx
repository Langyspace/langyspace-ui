import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeCardCover } from '.'
const meta = {
  title: 'Molecules/PracticeCardCover',
  component: PracticeCardCover,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof PracticeCardCover>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
