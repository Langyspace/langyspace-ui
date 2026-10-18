import type { Meta, StoryObj } from '@storybook/react-vite'
import { ShadowingReader } from './ShadowingReader'

const meta = {
  title: 'Shadowing/ShadowingReader',
  component: ShadowingReader,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof ShadowingReader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
