import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Toaster } from '../../../src/components/Toast/Toaster'

describe('Toaster', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('announces toasts and dismisses the activated one', () => {
    const onDismiss = vi.fn()

    render(
      <Toaster
        toasts={[
          { id: 'saved', message: 'Aula salva', tone: 'success' },
          { id: 'sent', message: 'Mensagem enviada' },
        ]}
        onDismiss={onDismiss}
      />,
    )

    expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite')
    expect(
      screen.getAllByRole('button', { name: 'Fechar notificação' }),
    ).toHaveLength(2)

    fireEvent.click(screen.getByText('Mensagem enviada'))

    expect(onDismiss).toHaveBeenCalledWith('sent')
  })

  it('selects instead of dismissing and keeps product labels', () => {
    const onDismiss = vi.fn()
    const onSelect = vi.fn()
    const toast = { id: 'class', message: 'Nova aula', title: 'Agenda' }

    render(
      <Toaster
        getItemLabel={(item) => `Abrir ${item.title ?? item.message}`}
        toasts={[toast]}
        onDismiss={onDismiss}
        onSelect={onSelect}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Abrir Agenda' }))

    expect(onSelect).toHaveBeenCalledWith(toast)
    expect(onDismiss).not.toHaveBeenCalled()
  })

  it('dismisses after the duration and pauses while hovered', () => {
    vi.useFakeTimers()
    const onDismiss = vi.fn()

    render(
      <Toaster
        duration={1000}
        toasts={[{ id: 'saved', message: 'Aula salva' }]}
        onDismiss={onDismiss}
      />,
    )

    const toast = screen.getByRole('button')

    fireEvent.pointerEnter(toast)
    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(onDismiss).not.toHaveBeenCalled()

    fireEvent.pointerLeave(toast)
    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(onDismiss).toHaveBeenCalledExactlyOnceWith('saved')
  })

  it('keeps toasts without a duration until dismissed', () => {
    vi.useFakeTimers()
    const onDismiss = vi.fn()

    render(
      <Toaster
        toasts={[{ id: 'saved', message: 'Aula salva' }]}
        onDismiss={onDismiss}
      />,
    )
    act(() => {
      vi.advanceTimersByTime(60_000)
    })

    expect(onDismiss).not.toHaveBeenCalled()
  })
})
