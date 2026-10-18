import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShadowingControlDock } from './ShadowingControlDock'

const meta = {
  title: 'Shadowing/ShadowingControlDock',
  component: ShadowingControlDock,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof ShadowingControlDock>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
