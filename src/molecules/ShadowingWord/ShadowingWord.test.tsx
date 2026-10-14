import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { createRef } from 'react'
import { ShadowingWord } from '.'
afterEach(cleanup)
it('keeps the readable word and native ref across playback state changes', () => {
  const ref = createRef<HTMLSpanElement>()
  const { rerender } = render(
    <ShadowingWord ref={ref} state="pending">
      practice
    </ShadowingWord>,
  )
  const word = screen.getByText('practice')
  rerender(
    <ShadowingWord ref={ref} state="current">
      practice
    </ShadowingWord>,
  )
  expect(ref.current).toBe(word)
  expect(word).toHaveTextContent('practice')
  expect(word).not.toHaveAttribute('state')
})
