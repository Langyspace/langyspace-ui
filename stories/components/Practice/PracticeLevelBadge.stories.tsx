import * as StoryLayout from './PracticeLevelBadge.stories.styles'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeLevelBadge } from '../../../src/components/Practice/PracticeLevelBadge'

const meta = {
  title: 'Practice/PracticeLevelBadge',
  component: PracticeLevelBadge,
  tags: ['visual-review'],
  decorators: [
    (Story) => (
      <StoryLayout.LevelCoverPreview>
        <Story />
      </StoryLayout.LevelCoverPreview>
    ),
  ],
  args: { children: 'A1' },
} satisfies Meta<typeof PracticeLevelBadge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
