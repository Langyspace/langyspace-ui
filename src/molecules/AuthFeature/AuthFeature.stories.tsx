import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthFeature } from '.'

const meta = {
  title: 'Molecules/AuthFeature',
  component: AuthFeature,
  tags: ['visual-review'],
  decorators: [
    (Story) => (
      <ul style={{ background: '#000', padding: 24 }}>
        <Story />
      </ul>
    ),
  ],
  args: { children: 'Conteúdo fornecido pelo produto' },
} satisfies Meta<typeof AuthFeature>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
