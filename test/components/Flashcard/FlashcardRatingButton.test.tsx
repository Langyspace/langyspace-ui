import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { FlashcardRatingButton } from '../../../src/components/Flashcard/FlashcardRatingButton'

it('keeps every grade as a native command and lets the consumer block repeated decisions', () => {
  const select = vi.fn(),
    submit = vi.fn()
  const { rerender } = render(
    <form onSubmit={submit}>
      <FlashcardRatingButton grade="good" interval="4 dias" onClick={select}>
        Bom
      </FlashcardRatingButton>
    </form>,
  )

  fireEvent.click(screen.getByRole('button', { name: 'Bom 4 dias' }))

  expect(select).toHaveBeenCalledTimes(1)
  expect(submit).not.toHaveBeenCalled()

  for (const grade of ['again', 'hard', 'good', 'easy'] as const)
    for (const selected of [false, true]) {
      rerender(
        <FlashcardRatingButton
          grade={grade}
          interval="4 dias"
          selected={selected}
          disabled
          onClick={select}
        >
          Bom
        </FlashcardRatingButton>,
      )
      fireEvent.click(screen.getByRole('button'))

      expect(select).toHaveBeenCalledTimes(1)
    }
})
