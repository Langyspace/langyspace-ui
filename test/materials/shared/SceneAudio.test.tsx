import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useSceneAudio } from '../../../stories/materials/shared/useSceneAudio'

class AudioPlayer {
  static instances: AudioPlayer[] = []
  readonly src: string
  onended: (() => void) | null = null
  onerror: (() => void) | null = null
  onplaying: (() => void) | null = null
  play = vi.fn(async () => {})
  pause = vi.fn()
  load = vi.fn()
  removeAttribute = vi.fn()
  constructor(src: string) {
    this.src = src
    AudioPlayer.instances.push(this)
  }
}
const clips = { first: '/first.mp3', second: '/second.mp3' }
beforeEach(() => {
  AudioPlayer.instances = []
  vi.stubGlobal('Audio', AudioPlayer)
})
afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

function fixture() {
  return renderHook(({ active }) => useSceneAudio(active, clips), {
    initialProps: { active: true },
  })
}

describe('Recorded scene label lifecycle', () => {
  it('replays and changes target with one active player', () => {
    const { result } = fixture()
    act(() => result.current.play('first'))
    const first = AudioPlayer.instances[0]
    expect(first?.src).toBe('/first.mp3')
    expect(result.current.playingId).toBe('first')
    act(() => result.current.play('first'))
    expect(first?.pause).toHaveBeenCalledOnce()
    expect(first?.removeAttribute).toHaveBeenCalledWith('src')
    act(() => result.current.play('second'))
    expect(AudioPlayer.instances[1]?.pause).toHaveBeenCalledOnce()
    expect(AudioPlayer.instances[2]?.src).toBe('/second.mp3')
    expect(result.current.playingId).toBe('second')
  })

  it('stops on page exit, refuses off-page playback and starts cleanly on reentry', () => {
    const { result, rerender } = fixture()
    act(() => result.current.play('first'))
    const old = AudioPlayer.instances[0]
    rerender({ active: false })
    expect(old?.pause).toHaveBeenCalledOnce()
    expect(result.current.playingId).toBeUndefined()
    act(() => result.current.play('second'))
    expect(AudioPlayer.instances).toHaveLength(1)
    rerender({ active: true })
    act(() => result.current.play('second'))
    expect(AudioPlayer.instances).toHaveLength(2)
    expect(result.current.playingId).toBe('second')
  })

  it('stops when the document is hidden and releases listeners on unmount', () => {
    const { result, unmount } = fixture()
    act(() => result.current.play('first'))
    vi.spyOn(document, 'hidden', 'get').mockReturnValue(true)
    act(() => document.dispatchEvent(new Event('visibilitychange')))
    expect(AudioPlayer.instances[0]?.pause).toHaveBeenCalledOnce()
    expect(result.current.playingId).toBeUndefined()
    act(() => result.current.play('second'))
    const second = AudioPlayer.instances[1]
    unmount()
    expect(second?.pause).toHaveBeenCalledOnce()
    expect(second?.onended).toBeNull()
    expect(second?.onerror).toBeNull()
  })

  it('shows playback failures and clears them on a new target', () => {
    const { result } = fixture()
    act(() => result.current.play('first'))
    act(() => AudioPlayer.instances[0]?.onerror?.())
    expect(result.current.playingId).toBeUndefined()
    expect(result.current.error).toBe(
      'Não foi possível tocar o áudio. Tente novamente.',
    )
    act(() => result.current.play('second'))
    expect(result.current.error).toBe('')
    act(() => AudioPlayer.instances[1]?.onended?.())
    expect(result.current.playingId).toBeUndefined()
  })

  it('ignores late failures from an already released player', () => {
    const { result } = fixture()
    act(() => result.current.play('first'))
    const oldFailure = AudioPlayer.instances[0]?.onerror
    act(() => result.current.play('second'))
    act(() => oldFailure?.())
    expect(result.current.playingId).toBe('second')
    expect(result.current.error).toBe('')
  })
})
