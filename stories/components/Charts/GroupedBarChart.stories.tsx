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

/** Numeric evidence must be legible, not inferred from unlabelled bar heights. */
export const DailyTrips: Story = {
  args: {
    'aria-label': 'Daily trips by month',
    items: [
      {
        id: 'jan',
        label: 'January',
        description: 'Trips per day',
        values: [100],
      },
      {
        id: 'feb',
        label: 'February',
        description: 'Trips per day',
        values: [120],
      },
      {
        id: 'mar',
        label: 'March',
        description: 'Trips per day',
        values: [140],
      },
    ],
  },
}
