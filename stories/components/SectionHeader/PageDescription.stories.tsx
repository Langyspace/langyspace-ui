import type { Meta, StoryObj } from '@storybook/react-vite'
import { PageDescription } from '../../../src/components/SectionHeader/PageDescription'

const meta = {
  title: 'SectionHeader/PageDescription',
  component: PageDescription,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof PageDescription>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
