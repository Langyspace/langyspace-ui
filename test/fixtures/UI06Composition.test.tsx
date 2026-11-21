import { useRef } from 'react'
import { act, cleanup, fireEvent, render, within } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import type { SlideDeckProps } from '../../src/components/Slide/SlideDeck.types'
import { TrialA1Lesson } from '../../stories/materials/TrialA1/TrialA1Lesson'
import { TrialB1Lesson } from '../../stories/materials/TrialB1/TrialB1Lesson'
import { TrialB2Lesson } from '../../stories/materials/TrialB2/TrialB2Lesson'
import { PictureTalkSection } from '../../stories/materials/TrialA1/TrialA1.sections'
import { LabeledSceneDemo } from '../../stories/components/UXLab/MaterialVariants'
import { MaterialTheme } from '../../stories/materials/shared/MaterialTheme'
import { createBrowserStorage } from '../helpers/browserStorage'

// Composition wiring only. Native scrolling and model media have separate,
// unchanged author evidence; this fixture does not replay those engines.
vi.mock('../../src/components/Slide/useSlideNavigation', () => ({
  useSlideNavigation: ({ pages, pageId }: SlideDeckProps) => ({
    viewportRef: useRef<HTMLDivElement>(null),
    index: Math.max(
      0,
      pages.findIndex((page) => page.id === pageId),
    ),
    progress: 0,
    goToIndex: vi.fn(),
    onKeyDown: vi.fn(),
  }),
}))

class CompositionMedia {
  static all: CompositionMedia[] = []
  src: string
  paused = true
  ended = false
  playbackRate = 1
  currentTime = 0
  error = null
  onplaying: (() => void) | null = null
  onwaiting: (() => void) | null = null
  onpause: (() => void) | null = null
  onended: (() => void) | null = null
  onerror: (() => void) | null = null
  play = vi.fn(() => {
    this.paused = false
    return Promise.resolve()
  })
  pause = vi.fn(() => {
    this.paused = true
  })
  removeAttribute = vi.fn(() => {
    this.src = ''
  })
  load = vi.fn()
  constructor(src = '') {
    this.src = src
    CompositionMedia.all.push(this)
  }
}

let browserStorage: ReturnType<typeof createBrowserStorage>
beforeEach(() => {
  CompositionMedia.all = []
  browserStorage = createBrowserStorage()
  vi.stubGlobal('localStorage', browserStorage.storage)
  vi.spyOn(document, 'hidden', 'get').mockReturnValue(false)
  vi.stubGlobal('Audio', CompositionMedia)
})
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  browserStorage.dispose()
})

const cases = [
  {
    label: 'B1',
    lesson: <TrialB1Lesson initialPageId="s3" />,
    rehearsal: '2. Rehearse',
    independent: '3. Without the script',
    model: '1. Model',
    subtitle: 'Listen, respond and keep the conversation going.',
  },
  {
    label: 'B2',
    lesson: <TrialB2Lesson initialPageId="s3" />,
    rehearsal: '2. Rehearse',
    independent: '3. Without the script',
    model: '1. Model',
    subtitle: 'Listen, respond and develop each other’s ideas.',
  },
]

it('splits TrialA1 into model, visible rehearsal and open conversation pages', () => {
  const view = render(<TrialA1Lesson initialPageId="s3" />)
  expect(
    Array.from(view.container.querySelectorAll('[data-slide-id]')).map((page) =>
      page.getAttribute('data-slide-id'),
    ),
  ).toEqual([
    's1',
    's2',
    's3',
    's3-rehearse',
    's3-independent',
    's41',
    's42',
    's43',
    's5',
    's6',
  ])
  const model = within(
    view.container.querySelector<HTMLElement>('[data-slide-id="s3"]')!,
  )
  expect(model.queryByRole('group', { name: 'Conversation stages' })).toBeNull()
  expect(model.queryByRole('complementary')).toBeNull()
  expect(
    model.getByRole('button', { name: /Play dialogue: Do you like the park/ }),
  ).toBeEnabled()
  const rehearsal = within(
    view.container.querySelector<HTMLElement>('[data-slide-id="s3-rehearse"]')!,
  )
  expect(
    rehearsal.getByText('Talk about what you like', { exact: true }),
  ).toBeInTheDocument()
  expect(
    rehearsal.getByText('Do you like soccer?', { exact: true }),
  ).toBeInTheDocument()
  const open = within(
    view.container.querySelector<HTMLElement>(
      '[data-slide-id="s3-independent"]',
    )!,
  )
  expect(open.getByText('Do you like …?', { exact: true })).toBeInTheDocument()
})

for (const fixture of cases) {
  it(`composes ${fixture.label} header playback, guided modes, copy and existing page IDs`, () => {
    const view = render(fixture.lesson)
    expect(
      Array.from(view.container.querySelectorAll('[data-slide-id]')).map(
        (page) => page.getAttribute('data-slide-id'),
      ),
    ).toEqual(['s1', 's2', 's3', 's41', 's42', 's43', 's5', 's6'])
    const page = view.container.querySelector<HTMLElement>(
      '[data-slide-id="s3"]',
    )!
    const c = within(page)
    expect(c.getAllByText(fixture.subtitle, { exact: true })).toHaveLength(1)
    const title = page.querySelector('[data-dialogue-title="true"]')!
    const action = title.querySelector<HTMLButtonElement>(
      '[data-dialogue-playback-action="true"]',
    )!
    expect(action).not.toBeDisabled()
    expect(action.textContent).toBe('')
    expect(action.querySelector('svg')).toHaveAttribute('fill', 'currentColor')
    expect(CompositionMedia.all).toHaveLength(0)
    fireEvent.click(action)
    const first = CompositionMedia.all[0]!
    act(() => first.onplaying?.())
    expect(action).toHaveAttribute('aria-pressed', 'true')
    const late = first.onended
    fireEvent.click(c.getByRole('button', { name: fixture.rehearsal }))
    expect(action).toBeDisabled()
    expect(first.pause).toHaveBeenCalled()
    expect(first.src).toBe('')
    expect(page.querySelector('[data-guided-conversation]')).toHaveAttribute(
      'data-guided-conversation',
      'rehearse',
    )
    act(() => {
      first.ended = true
      late?.()
    })
    expect(CompositionMedia.all).toHaveLength(1)
    fireEvent.click(c.getByRole('button', { name: fixture.independent }))
    expect(action).toBeDisabled()
    expect(
      c.queryByRole('button', { name: /Ver apoio:|Phrase support:/ }),
    ).toBeNull()
    fireEvent.click(c.getByRole('button', { name: fixture.model }))
    expect(action).not.toBeDisabled()
    expect(CompositionMedia.all).toHaveLength(1)
    fireEvent.click(action)
    const second = CompositionMedia.all[1]!
    const stale = second.onended
    view.unmount()
    expect(second.pause).toHaveBeenCalled()
    expect(second.src).toBe('')
    act(() => {
      second.ended = true
      stale?.()
    })
    expect(CompositionMedia.all).toHaveLength(2)
  })
}

it('composes the seven A1 targets with vocabulary-only callouts and explicit new-label playback', () => {
  const view = render(
    <MaterialTheme>
      <PictureTalkSection />
    </MaterialTheme>,
  )
  const c = within(view.container)
  const labels = [
    'music',
    'a soccer ball',
    'a book',
    'a dog',
    'headphones',
    'a bench',
    'sneakers',
  ]
  for (const label of labels) {
    expect(c.getByRole('button', { name: label })).toBeVisible()
  }
  fireEvent.click(c.getByRole('button', { name: 'sneakers' }))
  const callout = c.getByRole('region', { name: 'sneakers' })
  expect(callout).toHaveTextContent(/^sneakers$/)
  expect(CompositionMedia.all).toHaveLength(0)
  expect(c.queryByText('What’s this?')).toBeNull()
  expect(c.queryByText('Do you like music?')).toBeNull()
  fireEvent.click(
    within(callout).getByRole('button', { name: 'Ouvir: sneakers' }),
  )
  expect(CompositionMedia.all).toHaveLength(1)
  expect(CompositionMedia.all[0]!.src).toMatch(/sneakers-label\.mp3/)
})

it('composes eight Lab labels with the compact shared callout and approved bike clip', () => {
  const view = render(
    <MaterialTheme>
      <LabeledSceneDemo />
    </MaterialTheme>,
  )
  const c = within(view.container)
  const labels = [
    'headphones',
    'a soccer ball',
    'a book',
    'a dog',
    'a bike',
    'a picnic',
    'a bench',
    'sneakers',
  ]
  for (const label of labels) {
    expect(c.getByRole('button', { name: label })).toHaveAttribute(
      'data-scene-compact',
      'true',
    )
  }
  expect(CompositionMedia.all).toHaveLength(0)
  fireEvent.click(c.getByRole('button', { name: 'a bike' }))
  const callout = c.getByRole('region', { name: 'a bike' })
  expect(callout).toHaveTextContent(/^a bike$/)
  expect(CompositionMedia.all).toHaveLength(0)
  fireEvent.click(
    within(callout).getByRole('button', { name: 'Ouvir: a bike' }),
  )
  expect(CompositionMedia.all).toHaveLength(1)
  expect(CompositionMedia.all[0]!.src).toMatch(/bike-label\.mp3/)
  expect(CompositionMedia.all[0]!.play).toHaveBeenCalledOnce()
})
