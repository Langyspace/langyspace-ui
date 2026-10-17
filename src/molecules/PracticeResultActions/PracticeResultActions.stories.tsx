import { Button } from '../../atoms/Button'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeResultActions } from '.'

const meta = {
  title: 'Molecules/PracticeResultActions',
  component: PracticeResultActions,
  tags: ['visual-review'],
  args: { children: <Button type="button">Voltar para lista</Button> },
} satisfies Meta<typeof PracticeResultActions>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
