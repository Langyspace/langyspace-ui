import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Button } from '../../../src/components/Button/Button'
import { ToastProvider } from '../../../src/components/Toast/ToastProvider'
import { useToast } from '../../../src/components/Toast/useToast'

function SaveAction() {
  const toast = useToast()

  return (
    <Button
      onClick={() => {
        toast.show({ message: 'Alteração salva.', tone: 'success' })
      }}
    >
      Salvar
    </Button>
  )
}

const meta = {
  title: 'Toast/ToastProvider',
  component: ToastProvider,
  parameters: { layout: 'centered' },
  args: { children: <SaveAction />, duration: 4200 },
} satisfies Meta<typeof ToastProvider>

export default meta

type Story = StoryObj<typeof meta>

export const ShowFromHook: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body)

    await userEvent.click(canvas.getByRole('button', { name: 'Salvar' }))
    await expect(canvas.getByRole('status')).toHaveTextContent(
      'Alteração salva.',
    )
  },
}
