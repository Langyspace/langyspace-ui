import { act, cleanup, fireEvent, render, within } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import type { SlideDeckProps } from '../../src/components/Slide/SlideDeck.types'
import { TrialB1Lesson } from '../../stories/materials/TrialB1/TrialB1Lesson'
import content from '../../stories/materials/TrialB1/TrialB1.content.json'
import { createBrowserStorage } from '../helpers/browserStorage'

// Exercise the actual lesson content and native controls; geometry/navigation engines
// retain their existing coverage. This fixture only selects the next authored page.
vi.mock('../../src/components/Slide/SlideDeck', () => ({
  SlideDeck: ({ pages, pageId, onPageChange, label }: SlideDeckProps) => (
    <div aria-label={label}>
      {pages.map((page) => (
        <section
          key={page.id}
          data-slide-id={page.id}
          hidden={page.id !== pageId}
        >
          {page.content}
        </section>
      ))}
      <button onClick={() => onPageChange?.('free-conversation')}>
        Next review page
      </button>
    </div>
  ),
}))
class NativeAudio {
  static all: NativeAudio[] = []
  src = ''
  preload = ''
  currentTime = 0
  paused = true
  error = null
  onplaying: (() => void) | null = null
  onended: (() => void) | null = null
  onerror: (() => void) | null = null
  onpause: (() => void) | null = null
  onwaiting: (() => void) | null = null
  load = vi.fn()
  play = vi.fn(() => {
    this.paused = false
    this.onplaying?.()
    return Promise.resolve()
  })
  pause = vi.fn(() => {
    this.paused = true
  })
  removeAttribute = vi.fn(() => {
    this.src = ''
  })
  constructor() {
    NativeAudio.all.push(this)
  }
}
let storage: ReturnType<typeof createBrowserStorage>
beforeEach(() => {
  NativeAudio.all = []
  storage = createBrowserStorage()
  vi.stubGlobal('localStorage', storage.storage)
  vi.stubGlobal('Audio', NativeAudio)
  vi.spyOn(document, 'hidden', 'get').mockReturnValue(false)
})
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  storage.dispose()
})
const page = (container: HTMLElement, id: string) =>
  within(container.querySelector<HTMLElement>(`[data-slide-id="${id}"]`)!)

it('renders exactly the five requested pages with a B1/B2 cover and unchanged trial closing', () => {
  const view = render(<TrialB1Lesson />)
  expect(
    Array.from(view.container.querySelectorAll('[data-slide-id]'), (node) =>
      node.getAttribute('data-slide-id'),
    ),
  ).toEqual(['cover', 's2', 's3', 'free-conversation', 'next-steps'])
  expect(
    page(view.container, 'cover').getByText('B1 / B2 · Trial lesson'),
  ).toBeVisible()
  expect(
    page(view.container, 'cover').getByText(
      'Talk about a trip, deal with a change of plans and keep the conversation going',
    ),
  ).toBeVisible()
  expect(view.queryByText('Beach or mountains?')).toBeNull()
  expect(view.queryByRole('group', { name: 'Conversation stages' })).toBeNull()
  const closing = view.container.querySelector('[data-slide-id="next-steps"]')!
  expect(closing.textContent).toContain('Mande uma mensagem para a Langy')
  expect(closing.textContent).toContain(
    'Oi! Quero fechar o curso de inglês com vocês 😊',
  )
})

it('reveals all six vocabulary examples on click, plays their matching native MP3 and stops on leaving', () => {
  const view = render(<TrialB1Lesson initialPageId="s2" />)
  const scene = page(view.container, 's2')
  for (const hotspot of content.scene.hotspots) {
    fireEvent.click(scene.getByRole('button', { name: hotspot.label }))
    const callout = scene.getByRole('region', { name: hotspot.label })
    expect(within(callout).getByText(hotspot.example)).toBeVisible()
    expect(scene.getAllByRole('region')).toHaveLength(1)
    const audio = NativeAudio.all.find((media) =>
      media.src.endsWith(hotspot.audioId + '.mp3'),
    )!
    expect(audio.play).toHaveBeenCalledOnce()
  }
  expect(scene.queryByText(/Audio is unavailable/)).toBeNull()
  const last = NativeAudio.all.find((media) =>
    media.src.endsWith('V.spare-tire.mp3'),
  )!
  fireEvent.click(view.getByRole('button', { name: 'Next review page' }))
  expect(last.pause).toHaveBeenCalled()
  expect(last.currentTime).toBe(0)
})

it('plays all eight dialogue turns in order with highlighting, translation and answer disclosure', () => {
  const view = render(<TrialB1Lesson initialPageId="s3" />)
  const dialogue = page(view.container, 's3')
  const play = dialogue.getByRole('button', {
    name: 'Play dialogue: Ana’s change of plans',
  })
  expect(play).toBeEnabled()
  fireEvent.click(play)
  for (let i = 1; i <= 8; i++) {
    const audio = NativeAudio.all.find((media) =>
      media.src.endsWith(`D.${i}.mp3`),
    )!
    expect(audio.play).toHaveBeenCalledOnce()
    expect(play).toHaveAttribute('data-playback-state', 'playing')
    expect(
      dialogue
        .getByText(content.dialogue.lines[i - 1]!.en)
        .closest('[data-dialogue-line]') ??
        dialogue.getByText(content.dialogue.lines[i - 1]!.en),
    ).toBeInTheDocument()
    act(() => audio.onended?.())
  }
  expect(play).toHaveAttribute('data-playback-state', 'idle')
  fireEvent.click(dialogue.getByText(content.dialogue.lines[0]!.en))
  expect(dialogue.getByText(content.dialogue.lines[0]!.pt)).toBeVisible()
  for (const question of content.dialogue.questions) {
    fireEvent.click(dialogue.getByRole('button', { name: question.prompt }))
    expect(dialogue.getByText(question.answer)).toBeVisible()
  }
  expect(dialogue.queryByText(/Audio is unavailable/)).toBeNull()
  expect(dialogue.queryByText('Now you')).toBeNull()
})

it('keeps the travel-specific free conversation in the canonical spotlight meeting frame', () => {
  const view = render(<TrialB1Lesson initialPageId="free-conversation" />)
  const free = page(view.container, 'free-conversation')
  expect(free.getByText(content.freeConversationInstruction)).toBeVisible()
  expect(free.getByText('Teacher')).toBeVisible()
  expect(free.getByText('Student')).toBeVisible()
  expect(free.getAllByRole('img')).toHaveLength(2)
  expect(free.queryByRole('button')).toBeNull()
})
