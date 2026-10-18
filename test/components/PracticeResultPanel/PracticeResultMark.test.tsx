import { render, screen } from '@testing-library/react'
import { it, expect } from 'vitest'
import { PracticeResultMark } from '../../../src/compatibility/PracticeResultPanel'

it('preserves caller semantics and attributes without domain state', () => {
  render(<PracticeResultMark data-testid="mark" />)

  expect(screen.getByTestId('mark').getAttribute('aria-hidden')).toBe('true')
})
