import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthBrandFooter } from '../../../src/components/Auth/AuthBrandFooter'

const meta = {
  title: 'Auth/AuthBrandFooter',
  component: AuthBrandFooter,
  tags: ['visual-review'],
  decorators: [
    (Story) => (
      <div style={{ background: '#000', padding: 24 }}>
        <Story />
      </div>
    ),
  ],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof AuthBrandFooter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
