import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeResultTitle } from './PracticeResultPanel.compatibility'

const meta = {
  title: 'Compatibility/PracticeResultTitle',
  component: PracticeResultTitle,
  tags: ['visual-review'],
  args: { children: 'Resultado da prática' },
} satisfies Meta<typeof PracticeResultTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
