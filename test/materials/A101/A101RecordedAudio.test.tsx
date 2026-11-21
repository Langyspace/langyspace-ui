import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useLessonSpeech } from '../../../stories/materials/A101/useLessonSpeech'
import lesson from '../../../stories/materials/A101/lesson'

const created: FakeAudio[] = []
class FakeAudio {
  src: string
  paused = true
  onended: (() => void) | null = null
  onerror: (() => void) | null = null
  onplaying: (() => void) | null = null
  constructor(src: string) {
    this.src = src
    created.push(this)
  }
  play = vi.fn(() => {
    this.paused = false
    this.onplaying?.()
    return Promise.resolve()
  })
  pause = vi.fn(() => {
    this.paused = true
  })
}
beforeEach(() => {
  created.length = 0
  vi.stubGlobal('Audio', FakeAudio)
})
afterEach(() => vi.unstubAllGlobals())
const lines = lesson.RT.map((line) => ({ id: line.id, text: line.en }))
describe('A101 recorded utterances', () => {
  it('queues exact approved clips and resumes the same clip after pause', () => {
    const { result } = renderHook(() => useLessonSpeech())
    act(() => result.current.speak(lines))
    const first = created[0]!
    expect(first.src).toContain('R.T1.mp3')
    expect(result.current.playingId).toBe('R.T1')
    act(() => result.current.togglePause())
    expect(result.current.paused).toBe(true)
    act(() => result.current.togglePause())
    expect(first.play).toHaveBeenCalledTimes(2)
    expect(created).toHaveLength(1)
    act(() => first.onended?.())
    expect(created[1]!.src).toContain('R.T2.mp3')
    expect(result.current.playingId).toBe('R.T2')
  })
  it('ignores a stale ended event after stop and unmount', () => {
    const { result, unmount } = renderHook(() => useLessonSpeech())
    act(() => result.current.speak(lines))
    const old = created[0]!.onended!
    act(() => result.current.stop())
    act(() => old())
    unmount()
    old()
    expect(created).toHaveLength(1)
    expect(created[0]!.pause).toHaveBeenCalled()
  })
  it('rejects an ID whose text differs from the approved recording', () => {
    const { result } = renderHook(() => useLessonSpeech())
    act(() => result.current.speak([{ id: 'R.T1', text: 'A different line' }]))
    expect(created).toHaveLength(0)
    expect(result.current.error).toContain('indisponível')
  })
  it('clears media error on a valid retry without speech fallback', () => {
    const { result } = renderHook(() => useLessonSpeech())
    act(() => result.current.speak(lines))
    act(() => created[0]!.onerror?.())
    expect(result.current.error).toContain('Não foi possível')
    act(() => result.current.speak(lines))
    expect(result.current.error).toBe('')
    expect(created).toHaveLength(2)
  })
})
