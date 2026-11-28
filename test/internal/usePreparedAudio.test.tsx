import { act, renderHook, cleanup } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { usePreparedAudio } from '../../src/internal/usePreparedAudio'
import { useRecordedAudio } from '../../src/internal/useRecordedAudio'
class Media {
  static all: Media[] = []
  src = ''
  currentTime = 0
  error = null
  paused = true
  onplaying: (() => void) | null = null
  onerror: (() => void) | null = null
  onended: (() => void) | null = null
  play = vi.fn(() => {
    this.paused = false
    this.onplaying?.()
    return Promise.resolve()
  })
  pause = vi.fn(() => {
    this.paused = true
  })
  load = vi.fn()
  removeAttribute = vi.fn(() => {
    this.src = ''
  })
  constructor() {
    Media.all.push(this)
  }
}
beforeEach(() => {
  Media.all = []
  vi.stubGlobal('Audio', Media)
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})
it('reuses owned recordings but releases removed sources instead of retaining past pages', () => {
  const { result, rerender, unmount } = renderHook(
    ({ sources }) => usePreparedAudio(sources),
    { initialProps: { sources: ['/one.mp3', '/two.mp3'] } },
  )
  expect(Media.all).toHaveLength(2)
  let first: HTMLAudioElement
  act(() => {
    first = result.current('/one.mp3')
  })
  expect(first!).toBe(Media.all[0])
  rerender({ sources: ['/two.mp3'] })
  expect(Media.all[0]?.src).toBe('')
  expect(Media.all[1]?.src).toBe('/two.mp3')
  rerender({ sources: [] })
  expect(Media.all.every((x) => x.src === '')).toBe(true)
  rerender({ sources: ['/one.mp3'] })
  expect(Media.all).toHaveLength(3)
  unmount()
  expect(Media.all.every((x) => x.src === '')).toBe(true)
})
it('keeps exact recorded dialogue identity, sequencing and resume on the same element', () => {
  const clips = [
    { id: 'one', text: 'First', src: '/one.mp3' },
    { id: 'two', text: 'Second', src: '/two.mp3' },
  ]
  const { result } = renderHook(() => useRecordedAudio(clips))
  act(() => result.current.speak(clips))
  expect(result.current.playingId).toBe('one')
  act(() => result.current.togglePause())
  expect(result.current.paused).toBe(true)
  act(() => result.current.togglePause())
  expect(Media.all[0]?.play).toHaveBeenCalledTimes(2)
  act(() => Media.all[0]?.onended?.())
  expect(result.current.playingId).toBe('two')
  expect(Media.all).toHaveLength(2)
  act(() => result.current.speak([{ id: 'one', text: 'Different text' }]))
  expect(result.current.error).toContain('unavailable')
  expect(result.current.has({ id: 'one', text: 'Different text' })).toBe(false)
})
it('cancels a recorded request and frees its decoder when the recording scope changes', () => {
  const clips = [{ id: 'one', text: 'First', src: '/one.mp3' }]
  const { result, rerender } = renderHook(
    ({ list }) => useRecordedAudio(list),
    { initialProps: { list: clips } },
  )
  act(() => result.current.speak(clips))
  const lateEnd = Media.all[0]?.onended
  rerender({ list: [] })
  expect(result.current.playingId).toBeUndefined()
  expect(Media.all[0]?.src).toBe('')
  act(() => lateEnd?.())
  expect(result.current.playingId).toBeUndefined()
})

it('lets the first gesture start its clip on a cold lesson and only preloads the next requested turn', () => {
  const clips = [
    { id: 'reading', text: 'Long reading', src: '/reading.mp3' },
    { id: 'first', text: 'First line', src: '/first.mp3' },
    { id: 'next', text: 'Second line', src: '/next.mp3' },
    { id: 'gap', text: 'Fill the gap', src: '/gap.mp3' },
  ]
  const dialogue = clips.slice(1, 3)
  const { result } = renderHook(() => useRecordedAudio(clips))
  expect(Media.all).toHaveLength(0)
  act(() => result.current.speak(dialogue))
  expect(Media.all.map((audio) => audio.src)).toEqual([
    '/first.mp3',
    '/next.mp3',
  ])
  expect(Media.all[0]!.play).toHaveBeenCalledOnce()
  expect(Media.all[1]!.play).not.toHaveBeenCalled()
  act(() => Media.all[0]!.onended?.())
  expect(Media.all[1]!.play).toHaveBeenCalledOnce()
})

it('keeps the first pending request on a repeated click and allows a different selection to take over', () => {
  const clips = [
    { id: 'one', text: 'First', src: '/one.mp3' },
    { id: 'two', text: 'Second', src: '/two.mp3' },
  ]
  class BufferingMedia extends Media {
    override play = vi.fn(() => {
      this.paused = false
      return new Promise<void>(() => {})
    })
  }
  vi.stubGlobal('Audio', BufferingMedia)
  const { result } = renderHook(() => useRecordedAudio(clips))
  act(() => result.current.speak(clips))
  const first = Media.all[0]!
  const latePlaying = first.onplaying
  expect(Media.all.map((audio) => audio.src)).toEqual(['/one.mp3'])
  act(() => result.current.speak(clips.map((line) => ({ ...line }))))
  expect(first.play).toHaveBeenCalledOnce()
  expect(first.pause).not.toHaveBeenCalled()
  act(() => result.current.speak([clips[1]!]))
  act(() => latePlaying?.())
  expect(first.pause).toHaveBeenCalledOnce()
  expect(result.current.playingId).toBeUndefined()
  expect(Media.all[1]!.play).toHaveBeenCalledOnce()
  act(() => Media.all[1]!.onplaying?.())
  expect(result.current.playingId).toBe('two')
})

it('warms only the active page’s first recording and reuses it for a single click', () => {
  const clips = [
    { id: 'vocab', text: 'A word', src: '/vocab.mp3' },
    { id: 'dialogue', text: 'A turn', src: '/dialogue.mp3' },
    { id: 'listening', text: 'Long recording', src: '/listening.mp3' },
  ]
  const { result, rerender } = renderHook(
    ({ lead }) => useRecordedAudio(clips, lead),
    { initialProps: { lead: clips[0] } },
  )
  expect(Media.all.map((audio) => audio.src)).toEqual(['/vocab.mp3'])
  expect(Media.all[0]!.play).not.toHaveBeenCalled()
  rerender({ lead: clips[1] })
  act(() => result.current.speak([clips[1]!]))
  expect(Media.all.map((audio) => audio.src)).toEqual([
    '/vocab.mp3',
    '/dialogue.mp3',
  ])
  expect(Media.all[1]!.load).toHaveBeenCalledOnce()
  expect(Media.all[1]!.play).toHaveBeenCalledOnce()
})
