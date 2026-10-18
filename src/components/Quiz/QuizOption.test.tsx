import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { QuizOption } from './QuizOption'
import { QuizFeedback } from './QuizFeedback'

afterEach(cleanup)

it('preserves immediate answer commands, native disabled and decoration without submitting a form', () => {
  const select = vi.fn(),
    submit = vi.fn()
  const { rerender } = render(
    <form onSubmit={submit}>
      <QuizOption letter="A" onClick={select}>
        Yes
      </QuizOption>
    </form>,
  )

  fireEvent.click(screen.getByRole('button', { name: 'A Yes' }))

  expect(select).toHaveBeenCalledTimes(1)
  expect(submit).not.toHaveBeenCalled()

  for (const state of ['correct', 'wrong', 'dim'] as const) {
    rerender(
      <QuizOption letter="A" state={state} disabled onClick={select}>
        Yes
      </QuizOption>,
    )
    fireEvent.click(screen.getByRole('button'))

    expect(select).toHaveBeenCalledTimes(1)
  }
  rerender(<QuizFeedback tone="correct">Acertou</QuizFeedback>)

  expect(screen.getByText('Acertou')).toBeTruthy()

  rerender(<QuizFeedback tone="wrong">Revise</QuizFeedback>)

  expect(screen.getByText('Revise')).toBeTruthy()
})
