import {
  act,
  cleanup,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useRecordedConversationAudio } from '../../../stories/materials/shared/useRecordedConversationAudio'
import { conversationRecordings } from '../../../stories/materials/shared/conversationRecordings'
import { RecordedDialoguePlayback } from '../../../stories/materials/shared/RecordedDialoguePlayback'
import { MaterialTheme } from '../../../stories/materials/shared/MaterialTheme'
import type { RecordedConversationDefinition } from '../../../stories/materials/shared/RecordedDialoguePlayback.types'

/** Fault/race unit driver only; actual MP3 completion is covered by the separate native browser. */
class Media {
  static all: Media[] = []
  static nextPlay: Promise<void> | undefined
  src: string
  paused = true
  ended = false
  error = null
  currentTime = 0
  playbackRate = 1
  onplaying: (() => void) | null = null
  onwaiting: (() => void) | null = null
  onpause: (() => void) | null = null
  onended: (() => void) | null = null
  onerror: (() => void) | null = null
  play = vi.fn(() => {
    this.paused = false
    const p = Media.nextPlay ?? Promise.resolve()
    Media.nextPlay = undefined
    return p
  })
  pause = vi.fn(() => {
    this.paused = true
  })
  load = vi.fn(() => {
    this.ended = false
    this.currentTime = 0
  })
  removeAttribute = vi.fn(() => {
    this.src = ''
  })
  constructor(src = '') {
    this.src = src
    Media.all.push(this)
  }
  playing() {
    this.paused = false
    this.onplaying?.()
  }
  end() {
    this.ended = true
    this.paused = true
    this.onended?.()
  }
}
const definition: RecordedConversationDefinition = {
  id: 'TrialA1:s3',
  title: 'Unit fault fixture',
  revision: 'unit-one',
  turns: [0, 1].map((n) => ({
    id: String(n),
    text: 'Unit event fixture ' + n,
    speaker: 'kim',
    src: '/unit-event-' + n + '.mp3',
    sha256: 'a'.repeat(64),
    voiceId: 'unit',
    durationSeconds: 1,
  })),
}
function setup() {
  return renderHook(
    ({ active, model }) => useRecordedConversationAudio(active, model),
    {
      initialProps: {
        active: true,
        model: definition as RecordedConversationDefinition | undefined,
      },
    },
  )
}
beforeEach(() => {
  Media.all = []
  Media.nextPlay = undefined
  vi.spyOn(document, 'hidden', 'get').mockReturnValue(false)
  vi.stubGlobal('Audio', Media)
})
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe('Recorded model queue lifecycle and action', () => {
  it('requires native playing and ended events, preserves pause position, and replays the current part', () => {
    const { result } = setup()
    act(() => result.current.toggle())
    expect(result.current.status).toBe('loading')
    const first = Media.all[0]!
    act(() => first.playing())
    expect(result.current.status).toBe('playing')
    first.currentTime = 0.4
    act(() => result.current.toggle())
    expect(result.current.status).toBe('paused')
    act(() => result.current.toggle())
    expect(result.current.status).toBe('loading')
    expect(first.currentTime).toBe(0.4)
    act(() => first.playing())
    expect(result.current.status).toBe('playing')
    act(() => first.end())
    expect(first.removeAttribute).toHaveBeenCalledWith('src')
    expect(Media.all).toHaveLength(2)
    expect(result.current.currentId).toBe('1')
    expect(result.current.status).toBe('loading')
    act(() => Media.all[1]!.playing())
    act(() => Media.all[1]!.end())
    expect(result.current.status).toBe('ended')
    act(() => result.current.toggle())
    expect(Media.all[2]!.src).toBe('/unit-event-0.mp3')
    expect(result.current.status).toBe('loading')
  })
  it('cancels loading and ignores the old promise and native events', async () => {
    let reject!: (e: Error) => void
    Media.nextPlay = new Promise<void>((_, r) => {
      reject = r
    })
    const { result } = setup()
    act(() => result.current.toggle())
    const old = Media.all[0]!,
      latePlaying = old.onplaying,
      lateEnd = old.onended,
      lateError = old.onerror
    act(() => result.current.toggle())
    expect(result.current.status).toBe('idle')
    expect(old.pause).toHaveBeenCalled()
    act(() => result.current.toggle())
    act(() => Media.all[1]!.playing())
    await act(async () => {
      reject(new Error('obsolete rejection'))
      await Promise.resolve()
    })
    act(() => {
      old.ended = true
      latePlaying?.()
      lateEnd?.()
      lateError?.()
    })
    expect(result.current.status).toBe('playing')
    expect(result.current.error).toBe('')
    expect(Media.all).toHaveLength(2)
    expect(old.paused).toBe(true)
  })
  it('stops on page/revision change and refuses off-page or hidden playback', () => {
    const { result, rerender } = setup()
    act(() => result.current.toggle())
    const old = Media.all[0]!,
      late = old.onended
    rerender({ active: false, model: definition })
    act(() => {
      old.ended = true
      late?.()
      result.current.toggle()
    })
    expect(Media.all).toHaveLength(1)
    expect(result.current.status).toBe('idle')
    rerender({ active: true, model: definition })
    act(() => result.current.toggle())
    act(() => Media.all[1]!.playing())
    rerender({
      active: true,
      model: { ...definition, revision: 'replacement' },
    })
    expect(Media.all[1]!.paused).toBe(true)
    expect(result.current.status).toBe('idle')
    act(() => result.current.toggle())
    vi.spyOn(document, 'hidden', 'get').mockReturnValue(true)
    act(() => document.dispatchEvent(new Event('visibilitychange')))
    expect(Media.all[2]!.paused).toBe(true)
    act(() => result.current.toggle())
    expect(Media.all).toHaveLength(3)
    expect(result.current.status).toBe('idle')
  })
  it('detaches/rejects obsolete callbacks on unmount without continuing the next turn', () => {
    const { result, unmount } = setup()
    act(() => result.current.toggle())
    const old = Media.all[0]!,
      late = old.onended
    unmount()
    expect(old.onplaying).toBeNull()
    expect(old.onended).toBeNull()
    expect(old.onerror).toBeNull()
    expect(old.src).toBe('')
    act(() => {
      old.ended = true
      late?.()
    })
    expect(Media.all).toHaveLength(1)
  })
  it('fails recoverably without skipping the broken turn or starting a partial source list', () => {
    const { result, rerender } = setup()
    act(() => result.current.toggle())
    act(() => Media.all[0]!.onerror?.())
    expect(result.current.status).toBe('error')
    expect(result.current.error).toContain('Tente novamente')
    act(() => result.current.toggle())
    expect(Media.all[1]!.src).toBe('/unit-event-0.mp3')
    rerender({
      active: true,
      model: {
        ...definition,
        revision: 'missing',
        turns: [definition.turns[0]!, { ...definition.turns[1]!, src: '' }],
      },
    })
    expect(result.current.ready).toBe(false)
    act(() => result.current.toggle())
    expect(Media.all).toHaveLength(2)
  })
  it('keeps the six exact model boundaries and excludes cue metadata and personal/gap surfaces', () => {
    expect(
      Object.values(conversationRecordings).map((x) => x?.turns.length),
    ).toEqual([5, 8, 7, 7, 6, 6])
    expect(conversationRecordings['B201:s6']?.turns.map((t) => t.id)).toEqual([
      'D.1',
      'D.2',
      'D.3',
      'D.4',
      'D.5',
      'D.6',
    ])
    expect(conversationRecordings['B201:s62']?.turns.map((t) => t.id)).toEqual([
      'D.7',
      'D.8',
      'D.9',
      'D.10',
      'D.11',
      'D.12',
    ])
    expect(conversationRecordings['A201:s6']?.turns[6]?.text).toBe(
      'Nice! I’m walking in the…',
    )
    expect(
      Object.values(conversationRecordings).flatMap((x) => x?.turns ?? []),
    ).toHaveLength(39)
  })
  it('retains one stable accessible action and readable error feedback', () => {
    render(
      <MaterialTheme>
        <RecordedDialoguePlayback conversationId="TrialA1:s3" active />
      </MaterialTheme>,
    )
    const button = screen.getByRole('button', {
      name: /Ouvir diálogo: Do you like the park/,
    })
    button.focus()
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-busy', 'true')
    expect(button).toHaveFocus()
    act(() => Media.all[0]!.playing())
    expect(button).toHaveAccessibleName(/Pausar diálogo/)
    fireEvent.click(button)
    expect(button).toHaveAccessibleName(/Continuar diálogo/)
    expect(button).toHaveFocus()
    act(() => Media.all[0]!.onerror?.())
    expect(screen.getByRole('status')).toHaveTextContent('Tente novamente')
    expect(button).toHaveAccessibleName(/Tentar novamente/)
  })
})
