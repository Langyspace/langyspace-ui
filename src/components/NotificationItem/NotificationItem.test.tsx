import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect, vi } from 'vitest'
import { NotificationItem } from './NotificationItem'

afterEach(cleanup)

it('retains rich content and invokes the supplied native action', () => {
  const action = vi.fn()

  render(
    <NotificationItem
      avatar="LS"
      title="Aviso"
      description="Texto"
      meta="Agora"
      onClick={action}
    />,
  )
  screen.getByRole('button', { name: /Aviso/ }).click()

  expect(action).toHaveBeenCalledOnce()
})
