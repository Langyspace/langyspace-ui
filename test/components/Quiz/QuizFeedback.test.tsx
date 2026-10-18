import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { QuizFeedback } from '../../../src/components/Quiz/QuizFeedback'

it('preserves caller feedback content and native announcement attributes for both outcomes', () => {
  const { rerender } = render(
    <QuizFeedback tone="correct" aria-live="polite" data-testid="feedback">
      <strong>Boa.</strong> Continue.
    </QuizFeedback>,
  )
  const feedback = screen.getByTestId('feedback')

  expect(feedback.tagName).toBe('DIV')
  expect(feedback.getAttribute('aria-live')).toBe('polite')
  expect(screen.getByText('Boa.').tagName).toBe('STRONG')
  expect(feedback.textContent).toContain('Continue.')
  expect(feedback.querySelector('svg')?.getAttribute('aria-hidden')).toBe(
    'true',
  )
  expect(feedback.hasAttribute('tone')).toBe(false)

  rerender(
    <QuizFeedback tone="wrong" aria-live="polite" data-testid="feedback">
      Revise esta resposta.
    </QuizFeedback>,
  )

  expect(screen.getByText('Revise esta resposta.')).toBeTruthy()
  expect(screen.queryByText('Boa.')).toBeNull()
  expect(screen.getByTestId('feedback').getAttribute('role')).toBeNull()
})
