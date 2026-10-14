import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect, vi } from 'vitest'
import { DetailRow } from '.'
afterEach(cleanup)
it('keeps a supplied action independently accessible', () => {
  const action = vi.fn()
  render(
    <DetailRow
      label="Contato"
      value="Nome longo"
      action={<button onClick={action}>Editar</button>}
    />,
  )
  screen.getByRole('button', { name: 'Editar' }).click()
  expect(action).toHaveBeenCalledOnce()
})
