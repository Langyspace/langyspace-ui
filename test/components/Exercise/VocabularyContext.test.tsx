import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { ReviewedLesson } from '../../../stories/materials/shared/ReviewedLesson'
import type { ReviewedPage } from '../../../stories/materials/shared/ReviewedLesson.types'

const item = {
  id: 'busy',
  word: 'be snowed under',
  translation: 'estar sobrecarregada',
  example: 'I’m snowed under with deadlines this week',
  imageUrl: '/busy.webp',
  imageAlt: 'A person facing unfinished work',
}

it('resets individual reveals, hints and show-all in the actual lesson vocabulary, and allows a fresh reveal', () => {
  const scrollToDescriptor = Object.getOwnPropertyDescriptor(
    Element.prototype,
    'scrollTo',
  )
  Object.defineProperty(Element.prototype, 'scrollTo', {
    configurable: true,
    value: vi.fn(),
  })
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe() {}
      disconnect() {}
    },
  )
  vi.stubGlobal('matchMedia', () => ({ matches: false }))
  try {
    const other = {
      ...item,
      id: 'break',
      word: 'take a break',
      imageAlt: 'A person resting',
      example: 'I take a break after lunch',
    }
    const page: ReviewedPage = {
      id: 'words',
      kind: 'vocabulary',
      title: 'Busy weeks',
      eyebrow: 'Vocabulary',
      instruction: 'Name each picture, then click to check',
      minutes: 2,
      items: [item, other],
    }
    render(
      <ReviewedLesson
        code="B1.01"
        title="A lesson"
        pages={[page]}
        recordings={[]}
        initialPageId="words"
      />,
    )
    fireEvent.click(
      screen.getByRole('button', { name: /A person facing unfinished work/ }),
    )
    expect(screen.getByText(item.example)).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Hint: first letter' }))
    fireEvent.click(screen.getByRole('button', { name: 'Reset vocabulary' }))
    expect(screen.queryByText(item.example)).toBeNull()
    expect(
      screen.getByRole('button', { name: 'Hint: first letter' }),
    ).toHaveAttribute('aria-pressed', 'false')
    fireEvent.click(screen.getByRole('button', { name: 'Show all words' }))
    expect(screen.getByText(other.example)).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Reset vocabulary' }))
    expect(screen.queryByText(other.example)).toBeNull()
    expect(
      screen.getByRole('button', { name: 'Show all words' }),
    ).toHaveAttribute('aria-pressed', 'false')
    expect(
      screen.getByRole('button', { name: /A person resting/ }),
    ).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(
      screen.getByRole('button', { name: /A person facing unfinished work/ }),
    )
    expect(screen.getByText(item.example)).toBeVisible()
  } finally {
    if (scrollToDescriptor)
      Object.defineProperty(Element.prototype, 'scrollTo', scrollToDescriptor)
    else Reflect.deleteProperty(Element.prototype, 'scrollTo')
    vi.unstubAllGlobals()
  }
})

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
