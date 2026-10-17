import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ToastViewport } from '.'
import { ToastItem } from '../ToastItem'

describe('ToastViewport', () => {
  it('forwards announcement semantics and ref without owning items or timers', () => {
    const ref = createRef<HTMLDivElement>()
    const { rerender } = render(
      <ToastViewport ref={ref} aria-live="polite" data-testid="viewport">
        <ToastItem message="Pronto" />
      </ToastViewport>,
    )

    expect(ref.current).toBe(screen.getByTestId('viewport'))
    expect(ref.current).toHaveAttribute('aria-live', 'polite')
    expect(screen.getByRole('button')).toHaveTextContent('Pronto')

    rerender(<ToastViewport data-testid="viewport" />)

    expect(screen.getByTestId('viewport')).not.toHaveAttribute('aria-live')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
