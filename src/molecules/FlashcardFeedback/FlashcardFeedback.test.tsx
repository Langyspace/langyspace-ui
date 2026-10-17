import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { FlashcardFeedback } from '.'

it('owns grade presentation and announces the next step once', () => {
  render(
    <FlashcardFeedback grade="good" mark="✓" next="volta amanhã">
      Very good!
    </FlashcardFeedback>,
  )

  expect(screen.getByText('✓')).toHaveAttribute('aria-hidden', 'true')
  expect(screen.getByText('✓')).toHaveStyle({
    background: 'var(--fc-green)',
  })
  expect(screen.getByText('Very good!')).toHaveStyle({
    color: 'var(--fc-green)',
  })
  expect(screen.getByText('volta amanhã')).toHaveAttribute(
    'aria-live',
    'polite',
  )
})
