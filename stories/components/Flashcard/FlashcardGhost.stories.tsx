import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { FlashcardGhost } from '../../../src/components/Flashcard/FlashcardGhost'
import { FlashcardDeckCanvas } from '../../../.storybook/flashcard-fixtures'

const meta = {
  title: 'Flashcard/FlashcardGhost',
  component: FlashcardGhost,
  tags: ['visual-review'],
  args: { layer: 1 },
  play: async ({ canvasElement, args }) => {
    const ghost = canvasElement.querySelector('.lsui-sc-flashcard-ghost')
    if (args.obscured) await expect(ghost).not.toBeVisible()
    else await expect(ghost).toBeVisible()
  },
  decorators: [
    (Story) => (
      <FlashcardDeckCanvas>
        <Story />
      </FlashcardDeckCanvas>
    ),
  ],
} satisfies Meta<typeof FlashcardGhost>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Obscured: Story = { args: { obscured: true } }
