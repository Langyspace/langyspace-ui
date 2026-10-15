import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it, vi } from 'vitest'
import { ActionMenu } from '../../molecules/ActionMenu'
import { Dialog } from '../../molecules/Dialog'

afterEach(cleanup)
const items = [
  { id: 'open', label: 'Abrir registro', onSelect: () => undefined },
]

it('lets Escape close the child menu before dismissing its modal', async () => {
  const user = userEvent.setup()
  const onClose = vi.fn()
  render(
    <Dialog closeLabel="Fechar painel" onClose={onClose} open title="Registro">
      <ActionMenu items={items} triggerLabel="Ações" />
    </Dialog>,
  )
  await user.click(screen.getByRole('button', { name: 'Ações' }))
  await user.keyboard('{Escape}')
  expect(onClose).not.toHaveBeenCalled()
  expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  expect(screen.getByRole('dialog', { name: 'Registro' })).toBeVisible()
  expect(screen.getByRole('button', { name: 'Ações' })).toHaveFocus()
})

it('keeps the Tab destination chosen by the child menu inside the modal', async () => {
  const user = userEvent.setup()
  render(
    <Dialog
      closeLabel="Fechar painel"
      footer={<button type="button">Continuar</button>}
      onClose={() => undefined}
      open
      title="Registro"
    >
      <ActionMenu items={items} triggerLabel="Ações" />
    </Dialog>,
  )
  await user.click(screen.getByRole('button', { name: 'Ações' }))
  await user.tab()
  expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Continuar' })).toHaveFocus()
})
