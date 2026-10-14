import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect, vi } from 'vitest'
import { ConversationRow } from '.'
afterEach(cleanup)
it('preserves selection and a native callback with a long preview', () => {
  const action = vi.fn()
  render(
    <ConversationRow
      avatar="LS"
      title="Conversa"
      preview="Mensagem completa"
      aria-current="true"
      onClick={action}
    />,
  )
  const row = screen.getByRole('button')
  expect(row.getAttribute('aria-current')).toBe('true')
  row.click()
  expect(action).toHaveBeenCalledOnce()
  expect(screen.getByTitle('Mensagem completa')).toBeInTheDocument()
})
