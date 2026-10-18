import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthBrandTitle } from '../../../src/components/Auth/AuthBrandTitle'

const meta = {
  title: 'Auth/AuthBrandTitle',
  component: AuthBrandTitle,
  tags: ['visual-review'],
  decorators: [
    (Story) => (
      <div style={{ background: '#000', padding: 24 }}>
        <Story />
      </div>
    ),
  ],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof AuthBrandTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
