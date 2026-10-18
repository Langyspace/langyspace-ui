import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeResultMark } from '../../../src/compatibility/PracticeResultPanel'

const meta = {
  title: 'Compatibility/PracticeResultMark',
  component: PracticeResultMark,
  tags: ['visual-review'],
  args: {},
} satisfies Meta<typeof PracticeResultMark>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
