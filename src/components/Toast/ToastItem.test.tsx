import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ToastItem } from './ToastItem'

describe('ToastItem', () => {
  it('activates once with the keyboard and keeps selection ownership with the caller', async () => {
    const onClick = vi.fn()
    const ref = createRef<HTMLButtonElement>()
    const user = userEvent.setup()

    render(
      <ToastItem
        ref={ref}
        aria-label="Abrir detalhes"
        tone="brand"
        title="Novidade"
        message="Consulte as informações."
        actionLabel="Ver detalhes"
        icon={<span aria-hidden="true">!</span>}
        onClick={onClick}
      />,
    )

    await user.tab()
    await user.keyboard('{Enter}')

    expect(onClick).toHaveBeenCalledOnce()
    expect(ref.current).toBe(
      screen.getByRole('button', { name: 'Abrir detalhes' }),
    )
    expect(ref.current).toHaveAttribute('type', 'button')
    expect(ref.current).not.toHaveAttribute('aria-live')
    expect(screen.getByText('Ver detalhes')).toBeInTheDocument()
  })

  it('does not activate a disabled item or invent optional title/action content', async () => {
    const onClick = vi.fn()

    render(
      <ToastItem disabled message="Operação concluída" onClick={onClick} />,
    )

    await userEvent.click(screen.getByRole('button'))

    expect(onClick).not.toHaveBeenCalled()
    expect(screen.getByRole('button')).toHaveTextContent(/^Operação concluída$/)
  })
})
