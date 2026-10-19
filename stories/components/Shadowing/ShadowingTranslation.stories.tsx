import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShadowingTranslation } from '../../../src/components/Shadowing/ShadowingTranslation'

const meta = {
  title: 'Shadowing/ShadowingTranslation',
  component: ShadowingTranslation,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof ShadowingTranslation>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
