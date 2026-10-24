import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Toaster } from '../../../src/components/Toast/Toaster'
import type { ToasterItem } from '../../../src/components/Toast/Toaster.types'

const initialToasts: readonly ToasterItem[] = [
  { id: 'saved', message: 'Alteração salva.', tone: 'success' },
  {
    actionLabel: 'Ver detalhes',
    id: 'news',
    message: 'Abra para consultar as informações.',
    title: 'Novidade',
    tone: 'brand',
  },
]

function ToasterDemo() {
  const [toasts, setToasts] = useState(initialToasts)

  return (
    <Toaster
      toasts={toasts}
      onDismiss={(id) => {
        setToasts((current) => current.filter((toast) => toast.id !== id))
      }}
    />
  )
}

const meta = {
  title: 'Toast/Toaster',
  component: Toaster,
  tags: ['visual-review'],
  parameters: { layout: 'fullscreen' },
  args: { toasts: initialToasts, onDismiss: () => undefined },
  render: () => <ToasterDemo />,
} satisfies Meta<typeof Toaster>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DismissOnActivate: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByText('Alteração salva.'))
    await expect(canvas.queryByText('Alteração salva.')).toBeNull()
    await expect(canvas.getByRole('status')).toHaveTextContent('Novidade')
  },
}
