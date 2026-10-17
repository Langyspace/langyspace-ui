import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { expect, it } from 'vitest'
import { FlashcardWordSkeleton } from '.'

it('keeps one decorative word placeholder and forwards the caller region ref', () => {
  const ref = createRef<HTMLDivElement>()

  render(<FlashcardWordSkeleton data-testid="word-loading" ref={ref} />)

  expect(ref.current).toBe(screen.getByTestId('word-loading'))
  expect(ref.current).toHaveAttribute('aria-hidden', 'true')
  expect(screen.queryByRole('status')).not.toBeInTheDocument()
  expect(ref.current).not.toHaveAttribute('tabindex')
})
