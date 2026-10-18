import { cleanup, render } from '@testing-library/react'
import { afterEach, it, expect } from 'vitest'
import { QuizBlank } from './QuizBlank'

afterEach(cleanup)

it('keeps decorative gaps out of the accessible sentence', () => {
  const { container } = render(<QuizBlank />)

  expect(container.firstChild).toHaveAttribute('aria-hidden', 'true')
})

it('preserves an explicitly named gap for assistive technology', () => {
  const { getByRole } = render(<QuizBlank aria-label="lacuna" />)

  expect(getByRole('img', { name: 'lacuna' })).not.toHaveAttribute(
    'aria-hidden',
    'true',
  )
})
