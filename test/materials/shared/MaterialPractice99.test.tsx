import { fireEvent, render, within } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { ReviewedLesson } from '../../../stories/materials/shared/ReviewedLesson'
import type { ReviewedPage } from '../../../stories/materials/shared/ReviewedLesson.types'
import { MeetSomeoneActivity } from '../../../stories/materials/A101/MeetSomeoneActivity'
import source from '../../../stories/materials/A101/A101.review.json'

beforeEach(() => {
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
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: true })),
  )
})
afterEach(() => vi.unstubAllGlobals())
const lesson = (pages: readonly ReviewedPage[]) => (
  <ReviewedLesson
    code="A1.01"
    title={source.title}
    pages={pages}
    recordings={[]}
  />
)

it('makes the café reply a three-pair live conversation with a complete first-click response, not another name/country quiz', () => {
  const page = source.pages.find((p) => p.id === 's91')! as ReviewedPage
  const { container } = render(lesson([page]))
  const slide = within(
    container.querySelector('[data-slide-id="s91"]') as HTMLElement,
  )
  expect(slide.getAllByText('You')).toHaveLength(3)
  expect(slide.getAllByText('Teacher')).toHaveLength(3)
  expect(slide.queryByRole('list')).toBeNull()
  expect(slide.queryByText('What’s your name?')).toBeNull()
  expect(slide.queryByText('Where are you from?')).toBeNull()
  expect(slide.getByText('Greet Mia')).toBeVisible()
  fireEvent.click(slide.getByRole('button', { name: 'Show next tip (1/3)' }))
  expect(slide.getByText('Greet Mia')).not.toBeVisible()
  expect(
    slide
      .getAllByText('Hi, Mia! Nice to meet you too')
      .some((node) => node.closest('[aria-hidden="false"]')),
  ).toBe(true)
})

it('keeps the profile controls with their card in the right-hand reference column', () => {
  const { container } = render(<MeetSomeoneActivity />)
  const reference = container.querySelector(
    '[aria-label="Character reference"]',
  ) as HTMLElement
  const card = within(reference)
  fireEvent.click(card.getByRole('button', { name: 'Kim' }))
  expect(card.getByText('South Korea')).toBeVisible()
  expect(card.getByText('tired and happy')).toBeVisible()
  expect(reference.parentElement?.previousElementSibling).toBeTruthy()
  expect(reference.parentElement?.previousElementSibling).toHaveTextContent(
    'What’s your name?',
  )
})

it('restores six image checks with an image-only sequence and retry until the correct choice', () => {
  const pages = source.pages.filter(
    (p) => p.kind === 'image-choice',
  ) as readonly ReviewedPage[]
  const { container } = render(lesson(pages))
  const first = within(
    container.querySelector('[data-slide-id="s_visual1"]') as HTMLElement,
  )
  expect(first.getByRole('img')).toHaveAccessibleName('A tired person yawning')
  expect(first.getByText('1/6')).toBeVisible()
  const wrong = first.getByRole('button', { name: /cold/ })
  fireEvent.click(wrong)
  expect(wrong).toHaveAttribute('aria-pressed', 'true')
  expect(first.getByRole('button', { name: /tired/ })).toBeEnabled()
  fireEvent.click(first.getByRole('button', { name: /tired/ }))
  for (const option of first.getAllByRole('button'))
    expect(option).toBeDisabled()
})

it('restores a full gap exchange using the unchanged recorded text and keeps the 50-minute lesson', () => {
  const original = source.pages.find((p) => p.id === 's6')! as ReviewedPage
  const gaps = source.pages.find((p) => p.id === 's8')! as ReviewedPage
  if (original.kind !== 'dialogue' || gaps.kind !== 'dialogue')
    throw new Error('Missing restored dialogue')
  expect(gaps.lines).toHaveLength(6)
  for (const [index, turn] of gaps.lines!.entries()) {
    expect(turn.audioText).toBe(original.lines![index]!.audioText)
    expect(turn.id).toBe(original.lines![index]!.id)
    expect(
      turn
        .parts!.map((part) => (typeof part === 'string' ? part : part.answer))
        .join(''),
    ).toBe(turn.text)
  }
  expect(
    source.pages.reduce((total, p) => total + p.minutes, 0) +
      source.openingMinutes +
      source.freeConversationMinutes,
  ).toBe(50)
})
