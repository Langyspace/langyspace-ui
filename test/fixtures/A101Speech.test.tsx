import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useLessonSpeech } from '../../stories/materials/A101/useLessonSpeech'
const spoken: SpeechSynthesisUtterance[] = []
const synthesis = {
  paused: false,
  speak: vi.fn((utterance: SpeechSynthesisUtterance) => {
    spoken.push(utterance)
  }),
  cancel: vi.fn(),
  pause: vi.fn(() => {
    synthesis.paused = true
  }),
  resume: vi.fn(() => {
    synthesis.paused = false
  }),
  getVoices: () => [],
}
beforeEach(() => {
  spoken.length = 0
  synthesis.paused = false
  vi.clearAllMocks()
  vi.stubGlobal('speechSynthesis', synthesis)
  vi.stubGlobal(
    'SpeechSynthesisUtterance',
    class {
      text: string
      constructor(text: string) {
        this.text = text
      }
    },
  )
})
afterEach(() => {
  vi.unstubAllGlobals()
})
describe('A1.01 speech orchestration', () => {
  it('queues source lines and retains native pause/resume without restarting the conversation', () => {
    const { result } = renderHook(() => useLessonSpeech())
    act(() =>
      result.current.speak([
        { id: 'kim', text: 'Hi! I’m Kim.' },
        { id: 'ana', text: 'I’m Ana.' },
      ]),
    )
    const first = spoken[0]!
    expect(first.text).toBe('Hi! I’m Kim.')
    act(() => first.onstart?.(new Event('start') as SpeechSynthesisEvent))
    expect(result.current.playingId).toBe('kim')
    act(() => result.current.togglePause())
    expect(result.current.paused).toBe(true)
    expect(synthesis.pause).toHaveBeenCalledOnce()
    act(() => result.current.togglePause())
    expect(result.current.paused).toBe(false)
    expect(synthesis.resume).toHaveBeenCalledOnce()
    expect(spoken).toHaveLength(1)
    act(() => first.onend?.(new Event('end') as SpeechSynthesisEvent))
    expect(spoken[1]?.text).toBe('I’m Ana.')
  })
  it('ignores late completion after leaving the page or unmounting', () => {
    const { result, unmount } = renderHook(() => useLessonSpeech())
    act(() =>
      result.current.speak([
        { id: 'old', text: 'Old' },
        { id: 'next', text: 'Should not play' },
      ]),
    )
    const first = spoken[0]!
    act(() => result.current.stop())
    act(() => first.onend?.(new Event('end') as SpeechSynthesisEvent))
    expect(spoken).toHaveLength(1)
    unmount()
    first.onend?.(new Event('end') as SpeechSynthesisEvent)
    expect(spoken).toHaveLength(1)
    expect(synthesis.cancel).toHaveBeenCalled()
  })
  it('exposes a retryable playback error and clears it on a new request', () => {
    const { result } = renderHook(() => useLessonSpeech())
    act(() => result.current.speak([{ id: 'kim', text: 'Hi' }]))
    act(() =>
      spoken[0]!.onerror?.(new Event('error') as SpeechSynthesisErrorEvent),
    )
    expect(result.current.error).toContain('Não foi possível')
    act(() => result.current.speak([{ id: 'kim', text: 'Hi' }]))
    expect(result.current.error).toBe('')
  })
})
