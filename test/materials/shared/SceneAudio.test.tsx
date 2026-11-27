import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useSceneAudio } from '../../../stories/materials/shared/useSceneAudio'
class Player {
  static all: Player[] = []
  src = ''
  currentTime = 0
  error: { code: number } | null = null
  onended: (() => void) | null = null
  onerror: (() => void) | null = null
  onplaying: (() => void) | null = null
  play = vi.fn(() => Promise.resolve())
  pause = vi.fn()
  load = vi.fn(() => {
    this.error = null
  })
  removeAttribute = vi.fn(() => {
    this.src = ''
  })
  constructor() {
    Player.all.push(this)
  }
}
const clips = { first: '/first.mp3', second: '/second.mp3' }
beforeEach(() => {
  Player.all = []
  vi.stubGlobal('Audio', Player)
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})
const fixture = () =>
  renderHook(({ active }) => useSceneAudio(active, clips), {
    initialProps: { active: true },
  })
describe('Scene recording ownership and recovery', () => {
  it('replays prepared targets with only one active player', () => {
    const { result } = fixture()
    act(() => result.current.play('first'))
    expect(result.current.playingId).toBe('first')
    act(() => result.current.play('first'))
    expect(Player.all[0]?.play).toHaveBeenCalledTimes(2)
    act(() => result.current.play('second'))
    expect(result.current.playingId).toBe('second')
    expect(Player.all[0]?.pause).toHaveBeenCalled()
    expect(Player.all).toHaveLength(2)
  })
  it('does not warm or play inactive pages, and releases buffers on exit', () => {
    const { result, rerender } = renderHook(
      ({ active }) => useSceneAudio(active, clips),
      { initialProps: { active: false } },
    )
    expect(Player.all).toHaveLength(0)
    act(() => result.current.play('first'))
    expect(Player.all).toHaveLength(0)
    rerender({ active: true })
    expect(Player.all).toHaveLength(2)
    act(() => result.current.play('first'))
    rerender({ active: false })
    expect(result.current.playingId).toBeUndefined()
    expect(Player.all.every((x) => x.src === '')).toBe(true)
    rerender({ active: true })
    expect(Player.all).toHaveLength(4)
  })
  it('recovers a transient media error and reports only a persistent failure', () => {
    const { result } = fixture()
    act(() => result.current.play('first'))
    const audio = Player.all[0]!
    act(() => {
      audio.error = { code: 2 }
      audio.onerror?.()
    })
    expect(audio.play).toHaveBeenCalledTimes(2)
    expect(result.current.error).toBe('')
    act(() => {
      audio.error = { code: 2 }
      audio.onerror?.()
    })
    expect(result.current.playingId).toBeUndefined()
    expect(result.current.error).toContain('Não foi possível')
    act(() => result.current.play('second'))
    expect(result.current.error).toBe('')
  })
  it('ignores an old target error after selection changes', () => {
    const { result } = fixture()
    act(() => result.current.play('first'))
    const old = Player.all[0]!,
      failure = old.onerror
    act(() => result.current.play('second'))
    act(() => {
      old.error = { code: 2 }
      failure?.()
    })
    expect(result.current.playingId).toBe('second')
    expect(result.current.error).toBe('')
  })
  it('stops hidden or unmounted scenes and detaches the player handlers', () => {
    const { result, unmount } = fixture()
    act(() => result.current.play('first'))
    vi.spyOn(document, 'hidden', 'get').mockReturnValue(true)
    act(() => document.dispatchEvent(new Event('visibilitychange')))
    expect(result.current.playingId).toBeUndefined()
    unmount()
    expect(
      Player.all.every((x) => !x.onended && !x.onerror && x.src === ''),
    ).toBe(true)
  })
})
