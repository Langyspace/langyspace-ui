import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShadowingContextPhrase } from '../../../src/components/Shadowing/ShadowingContextPhrase'

const meta = {
  title: 'Shadowing/ShadowingContextPhrase',
  component: ShadowingContextPhrase,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof ShadowingContextPhrase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
