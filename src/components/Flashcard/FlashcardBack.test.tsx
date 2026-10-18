import { render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { FlashcardBack } from './FlashcardBack'

it('owns term, phonetic, translation and rich example without caller classes', () => {
  const onPlay = vi.fn()

  render(
    <FlashcardBack
      data-testid="back"
      term={
        <>
          <button onClick={onPlay}>Ouvir</button>bird
        </>
      }
      phonetic="/bɜːrd/"
      translation="pássaro"
      example={
        <>
          A <b>bird</b> sings.
        </>
      }
    />,
  )

  expect(screen.getByTestId('back')).toHaveClass('lsui-sc-flashcard-back')
  expect(screen.getByText('/bɜːrd/')).toHaveStyle({ fontSize: '0.75rem' })
  expect(screen.getByText('pássaro')).toHaveStyle({ fontWeight: '700' })
  expect(screen.getByText('bird', { selector: 'b' })).toHaveStyle({
    fontWeight: '600',
  })

  screen.getByRole('button', { name: 'Ouvir' }).click()

  expect(onPlay).toHaveBeenCalledOnce()
})
