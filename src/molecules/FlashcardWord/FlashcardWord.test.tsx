import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { FlashcardWord } from '.'

it('owns the word anatomy and accepts optional rich phonetic/example slots', () => {
  const { rerender } = render(
    <FlashcardWord
      phonetic="/bɜːrd/"
      example={
        <>
          A <b>bird</b> sings.
        </>
      }
    >
      bird
    </FlashcardWord>,
  )

  expect(screen.getByText('/bɜːrd/')).toHaveStyle({ fontSize: '0.875rem' })
  expect(screen.getByText('bird', { selector: 'b' })).toBeVisible()

  rerender(<FlashcardWord>bird</FlashcardWord>)

  expect(screen.queryByText('/bɜːrd/')).not.toBeInTheDocument()
})
