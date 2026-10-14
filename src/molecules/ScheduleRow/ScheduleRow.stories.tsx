import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScheduleRow } from '.'
import { Button } from '../../atoms/Button'
const meta = {
  title: 'Molecules/ScheduleRow',
  component: ScheduleRow,
  tags: ['visual-review'],
  args: {
    time: '10:00',
    participant: 'Participante',
    actions: <Button size="sm">Abrir</Button>,
  },
} satisfies Meta<typeof ScheduleRow>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
