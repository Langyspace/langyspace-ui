import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthBrandDescription } from '.'

const meta = {
  title: 'Atoms/AuthBrandDescription',
  component: AuthBrandDescription,
  tags: ['visual-review'],
  decorators: [
    (Story) => (
      <div style={{ background: '#000', padding: 24 }}>
        <Story />
      </div>
    ),
  ],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof AuthBrandDescription>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
