import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ToastProvider } from '../../../src/components/Toast/ToastProvider'
import { useToast } from '../../../src/components/Toast/useToast'

function SaveButton() {
  const toast = useToast()

  return (
    <button
      type="button"
      onClick={() => {
        toast.show({ message: 'Aula salva', tone: 'success' })
      }}
    >
      Salvar
    </button>
  )
}

describe('ToastProvider', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows toasts through useToast and dismisses them after the duration', () => {
    vi.useFakeTimers()

    render(
      <ToastProvider duration={1000}>
        <SaveButton />
      </ToastProvider>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Salvar' }))

    expect(screen.getByRole('status')).toHaveTextContent('Aula salva')

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.queryByText('Aula salva')).not.toBeInTheDocument()
  })

  it('requires a provider', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined)

    expect(() => render(<SaveButton />)).toThrow(
      'useToast must be used inside ToastProvider',
    )
  })
})
