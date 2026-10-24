import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ToastViewport } from '../../../src/components/Toast/ToastViewport'
import { ToastItem } from '../../../src/components/Toast/ToastItem'

describe('ToastViewport', () => {
  it('is a polite live region by default and forwards ref without owning items or timers', () => {
    const ref = createRef<HTMLDivElement>()
    const { rerender } = render(
      <ToastViewport ref={ref} aria-live="polite" data-testid="viewport">
        <ToastItem message="Pronto" />
      </ToastViewport>,
    )

    expect(ref.current).toBe(screen.getByTestId('viewport'))
    expect(ref.current).toHaveAttribute('aria-live', 'polite')
    expect(screen.getByRole('button')).toHaveTextContent('Pronto')

    rerender(<ToastViewport aria-live="assertive" data-testid="viewport" />)

    expect(screen.getByTestId('viewport')).toHaveAttribute('role', 'status')
    expect(screen.getByTestId('viewport')).toHaveAttribute(
      'aria-live',
      'assertive',
    )
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
