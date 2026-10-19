import type { Meta, StoryObj } from '@storybook/react-vite'
import { AuthBrandContent } from '../../../src'

const meta = {
  title: 'Auth/AuthBrandContent',
  component: AuthBrandContent,
  args: {
    logo: <span>Langy.space</span>,
    title: 'Seu próximo passo ',
    highlight: 'começa aqui.',
    description: 'Acesse suas aulas e materiais.',
    features: ['Aulas ao vivo', 'Materiais organizados'],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: '#000',
          color: '#fff',
          padding: 32,
          maxWidth: 480,
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AuthBrandContent>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
