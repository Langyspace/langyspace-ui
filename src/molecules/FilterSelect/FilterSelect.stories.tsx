import type { Meta, StoryObj } from '@storybook/react-vite'
import { FilterSelect } from '.'

const meta = {
  title: 'Molecules/FilterSelect',
  component: FilterSelect,
  tags: ['visual-review'],
  args: {
    'aria-label': 'Estado',
    defaultValue: 'all',
    children: (
      <>
        <option value="all">Todos</option>
        <option value="active">Ativos</option>
      </>
    ),
  },
} satisfies Meta<typeof FilterSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = { args: { disabled: true } }

export const LongOptions: Story = {
  args: {
    children: (
      <>
        <option>
          Todos os registros e situações em andamento para revisão
        </option>
      </>
    ),
  },
}
