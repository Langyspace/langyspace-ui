import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeResultDescription } from '../../../src/compatibility/PracticeResultPanel'

const meta = {
  title: 'Compatibility/PracticeResultDescription',
  component: PracticeResultDescription,
  tags: ['visual-review'],
  args: { children: 'Resultado da prática' },
} satisfies Meta<typeof PracticeResultDescription>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
