import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { ScheduleRow } from './ScheduleRow'
import { Button } from '../Button/Button'

const meta = {
  title: 'Calendar/ScheduleRow',
  component: ScheduleRow,
  tags: ['visual-review'],
  args: {
    onOpen: () => undefined,
    openLabel: 'Abrir aula de Participante',
    time: '10:00',
    participant: 'Participante',
    actions: <Button size="sm">Abrir</Button>,
  },
} satisfies Meta<typeof ScheduleRow>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Focused: Story = {
  play: async ({ canvasElement }) => {
    const primary = within(canvasElement).getByRole('button', {
      name: 'Abrir aula de Participante',
    })
    primary.focus()

    await expect(primary).toHaveFocus()
  },
}

export const ActionFocused: Story = {
  play: async ({ canvasElement }) => {
    const action = within(canvasElement).getByRole('button', {
      name: 'Abrir',
    })
    action.focus()

    await expect(action).toHaveFocus()
  },
}
