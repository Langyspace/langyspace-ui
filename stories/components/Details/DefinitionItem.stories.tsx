import type { Meta, StoryObj } from '@storybook/react-vite'
import { DefinitionItem } from '../../../src/components/Details/DefinitionItem'

const meta = {
  title: 'Details/DefinitionItem',
  component: DefinitionItem,
  tags: ['visual-review'],
  args: {
    label: 'Identificador',
    value:
      'Um valor muito longo que precisa continuar legível em uma tela estreita',
  },
} satisfies Meta<typeof DefinitionItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
