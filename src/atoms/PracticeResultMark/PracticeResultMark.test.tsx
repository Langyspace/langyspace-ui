import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { PracticeResultMark } from '.'

afterEach(cleanup)

it('preserves caller semantics and attributes without domain state', () => {
  render(<PracticeResultMark data-testid="mark" />)

  expect(screen.getByTestId('mark').getAttribute('aria-hidden')).toBe('true')
})
