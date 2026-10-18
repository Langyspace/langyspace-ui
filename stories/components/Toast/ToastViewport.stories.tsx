import type { Meta, StoryObj } from '@storybook/react-vite'
import { ToastViewport } from '../../../src/components/Toast/ToastViewport'
import { ToastItem } from '../../../src/components/Toast/ToastItem'

const meta = {
  title: 'Toast/ToastViewport',
  component: ToastViewport,
  tags: ['visual-review'],
  parameters: { layout: 'fullscreen' },
  args: { 'aria-live': 'polite' },
} satisfies Meta<typeof ToastViewport>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: <ToastItem message="Informações atualizadas." /> },
}

export const Stack: Story = {
  tags: ['layout-boundary'],
  args: {
    children: (
      <>
        <ToastItem tone="success" message="Alteração salva." />
        <ToastItem
          tone="brand"
          title="Novidade"
          message="Abra para consultar as informações."
          actionLabel="Ver detalhes"
        />
      </>
    ),
  },
}
