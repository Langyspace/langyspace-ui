import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { expect, it, vi } from 'vitest'
import { FlashcardAudioButton } from '.'

it('delegates pronunciation once through the native command and preserves ref/disabled', async () => {
  const user = userEvent.setup()
  const onClick = vi.fn()
  const ref = createRef<HTMLButtonElement>()
  const { rerender } = render(
    <FlashcardAudioButton
      label="Ouvir bird"
      onClick={onClick}
      playing
      ref={ref}
      placement="term"
    />,
  )
  const button = screen.getByRole('button', { name: 'Ouvir bird' })
  expect(ref.current).toBe(button)
  expect(button).toHaveAttribute('aria-busy', 'true')
  expect(button).toHaveStyle({ position: 'static', width: '1.875rem' })
  await user.tab()
  await user.keyboard('{Enter}')
  expect(onClick).toHaveBeenCalledTimes(1)
  rerender(
    <FlashcardAudioButton
      label="Ouvir bird"
      onClick={onClick}
      disabled
      ref={ref}
    />,
  )
  expect(button).toBeDisabled()
  await user.click(button)
  expect(onClick).toHaveBeenCalledTimes(1)
})
