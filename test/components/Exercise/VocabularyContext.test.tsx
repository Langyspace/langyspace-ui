import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'

const item = {
  id: 'busy',
  word: 'be snowed under',
  translation: 'estar sobrecarregada',
  example: 'I’m snowed under with deadlines this week',
  imageUrl: '/busy.webp',
  imageAlt: 'A person facing unfinished work',
}

it('reveals the usage example only on the explicit word click, keeps it stable after pointer exit and plays once', () => {
  const play = vi.fn()
  function Example() {
    const [revealed, setRevealed] = useState<string[]>([])
    return (
      <VocabularyGrid
        items={[item]}
        imageVariant="scene"
        density="regular"
        imageAspectRatio={1}
        imageFit="contain"
        activeId="busy"
        revealedIds={revealed}
        revealVariant="tooltip"
        onReveal={(id) => setRevealed([id])}
        onPlay={play}
      />
    )
  }
  render(<Example />)
  const button = screen.getByRole('button', {
    name: /A person facing unfinished work/,
  })
  expect(screen.queryByText(item.example)).toBeNull()
  fireEvent.pointerEnter(button)
  expect(screen.queryByText(item.example)).toBeNull()
  fireEvent.click(button)
  expect(screen.getByText(item.example)).toBeVisible()
  expect(play).toHaveBeenCalledExactlyOnceWith('busy')
  fireEvent.pointerLeave(button)
  expect(screen.getByText(item.example)).toBeVisible()
  expect(button).toHaveAttribute('aria-expanded', 'true')
})

it('does not expose the example with only a first-letter hint, and shows it with showAll', () => {
  const view = render(
    <VocabularyGrid
      items={[item]}
      revealedIds={[]}
      showInitial
      revealVariant="tooltip"
    />,
  )
  expect(screen.queryByText(item.example)).toBeNull()
  view.rerender(
    <VocabularyGrid
      items={[item]}
      revealedIds={[]}
      showAll
      revealVariant="tooltip"
    />,
  )
  expect(screen.getByText(item.example)).toBeVisible()
})

it('preserves the word-only default when no example is supplied', () => {
  const { example: _example, ...wordOnly } = item
  render(
    <VocabularyGrid
      items={[wordOnly]}
      revealedIds={['busy']}
      revealVariant="tooltip"
    />,
  )
  expect(screen.getByText(item.word)).toBeVisible()
  expect(screen.queryByText(item.example)).toBeNull()
})
