import { render } from '@testing-library/react'
import { it, expect } from 'vitest'
import { QuizBlank } from '../../../src/components/Quiz/QuizBlank'

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
