import type { Meta, StoryObj } from '@storybook/react-vite'
import { PageTitle } from '.'
const meta = {
  title: 'Molecules/PageTitle',
  component: PageTitle,
  tags: ['visual-review'],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof PageTitle>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
