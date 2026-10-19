import type { Meta, StoryObj } from '@storybook/react-vite'
import { GroupedBarChart } from '../../../src/components/Charts/GroupedBarChart'

const meta = {
  title: 'Charts/GroupedBarChart',
  component: GroupedBarChart,
  tags: ['visual-review'],
  args: {
    'aria-label': 'Evolução diária',
    items: [
      {
        id: 'a',
        label: 'Seg',
        description: 'Segunda: 12 cliques, 2 pagamentos',
        values: [12, 2],
      },
    ],
  },
} satisfies Meta<typeof GroupedBarChart>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
