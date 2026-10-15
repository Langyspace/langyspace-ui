import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { FlashcardGhost } from '.'
const meta = {
  title: 'Molecules/FlashcardGhost',
  component: FlashcardGhost,
  tags: ['visual-review'],
  render: (args) => (
    <div style={{ position: 'relative', width: 300, height: 200 }}>
      <FlashcardGhost {...args} />
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const ghost = canvasElement.querySelector('.lsui-sc-flashcard-ghost')
    if (args.obscured) await expect(ghost).not.toBeVisible()
    else await expect(ghost).toBeVisible()
  },
  args: { children: 'Conteúdo do cartão', layer: 1 },
} satisfies Meta<typeof FlashcardGhost>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}

export const Obscured: Story = { args: { obscured: true } }
