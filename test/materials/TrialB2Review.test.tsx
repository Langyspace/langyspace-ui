import { act, cleanup, fireEvent, render, within } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { TrialB2Lesson } from '../../stories/materials/TrialB2/TrialB2Lesson'
import content from '../../stories/materials/TrialB2/TrialB2.content.json'
import { createBrowserStorage } from '../helpers/browserStorage'

vi.mock(
  '../../src/components/Slide/SlideDeck',
  () => import('../helpers/reviewSlideDeck'),
)
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

it('places informal mutual introductions after the C1/C2 cover and preserves the remaining pages', () => {
  const view = render(<TrialB2Lesson />)
  expect(
    Array.from(view.container.querySelectorAll('[data-slide-id]'), (node) =>
      node.getAttribute('data-slide-id'),
    ),
  ).toEqual([
    'cover',
    'introduce-yourself',
    's2',
    's3',
    's_video_comedy',
    'free-conversation',
    'next-steps',
  ])
  expect(
    page(view.container, 'cover').getByText('C1 / C2 · Trial lesson'),
  ).toBeVisible()
  expect(
    page(view.container, 'cover').getByText(
      'Explore work-life boundaries, weigh trade-offs and defend a nuanced point of view',
    ),
  ).toBeVisible()
  expect(view.queryByText('Beach or mountains?')).toBeNull()
  expect(view.queryByRole('group', { name: 'Conversation stages' })).toBeNull()
  fireEvent.click(view.getByText('Open introduce-yourself'))
  expect(
    page(view.container, 'introduce-yourself').getByText('Introduce yourself'),
  ).toBeVisible()
  fireEvent.click(view.getByText('Open next-steps'))
  const closing = view.container.querySelector('[data-slide-id="next-steps"]')!
  expect(closing.textContent).toContain(
    'Fale com a equipe da Langy para começar seu curso de inglês',
  )
  expect(closing.textContent).toContain(
    'Oi! Quero fechar o curso de inglês com vocês 😊',
  )
})

it('reveals six illustrated expressions and their examples, plays exact native clips and stops on leaving', () => {
  const view = render(<TrialB2Lesson initialPageId="s2" />)
  const vocabulary = page(view.container, 's2')
  for (const [index, item] of content.vocabulary.items.entries()) {
    fireEvent.click(
      vocabulary.getByRole('button', {
        name: `Reveal expression ${index + 1}: ${item.imageAlt}`,
      }),
    )
    expect(vocabulary.getByText(item.example)).toBeVisible()
    const audio = NativeAudio.all.find((media) =>
      media.src.endsWith(item.id + '.mp3'),
    )!
    expect(audio.play).toHaveBeenCalledOnce()
  }
  expect(vocabulary.queryByText(/Audio is unavailable/)).toBeNull()
  fireEvent.click(vocabulary.getByRole('button', { name: 'Show all words' }))
  for (const item of content.vocabulary.items)
    expect(vocabulary.getByText(item.example)).toBeVisible()
  const last = NativeAudio.all.find((media) => media.src.endsWith('V.5.mp3'))!
  fireEvent.click(view.getByText('Open free-conversation'))
  expect(last.pause).toHaveBeenCalled()
  expect(last.currentTime).toBe(0)
})

it('plays all eight dialogue turns in order with highlighting, translation and answer disclosure', () => {
  const view = render(<TrialB2Lesson initialPageId="s3" />)
  const dialogue = page(view.container, 's3')
  const play = dialogue.getByRole('button', {
    name: `Play dialogue: ${content.dialogue.title}`,
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
        .closest('[aria-current="true"]'),
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

it('keeps the work-life free conversation in the canonical spotlight meeting frame', () => {
  const view = render(<TrialB2Lesson initialPageId="free-conversation" />)
  const free = page(view.container, 'free-conversation')
  expect(free.getByText(content.freeConversationInstruction)).toBeVisible()
  expect(free.getByText('Teacher')).toBeVisible()
  expect(free.getByText('Student')).toBeVisible()
  expect(free.getAllByRole('img')).toHaveLength(2)
  expect(free.queryByRole('button')).toBeNull()
})
