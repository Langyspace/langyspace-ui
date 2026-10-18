import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import { FlashcardFront } from '../../../src/components/Flashcard/FlashcardFront'
import { FlashcardFlipButton } from '../../../src/components/Flashcard/FlashcardFlipButton'

it('keeps flip and audio as independent native keyboard commands', async () => {
  const user = userEvent.setup()
  const onFlip = vi.fn()
  const onAudio = vi.fn()

  render(
    <FlashcardFront>
      <FlashcardFlipButton label="Virar card" onClick={onFlip} />
      <button type="button" onClick={onAudio}>
        Ouvir palavra
      </button>
    </FlashcardFront>,
  )

  await user.tab()

  expect(screen.getByRole('button', { name: 'Virar card' })).toHaveFocus()

  await user.keyboard('{Enter}')

  expect(onFlip).toHaveBeenCalledTimes(1)

  await user.tab()
  await user.keyboard(' ')

  expect(onAudio).toHaveBeenCalledTimes(1)
  expect(onFlip).toHaveBeenCalledTimes(1)
  expect(
    screen.getByRole('button', { name: 'Ouvir palavra' }).closest('button'),
  ).toBe(screen.getByRole('button', { name: 'Ouvir palavra' }))
})
