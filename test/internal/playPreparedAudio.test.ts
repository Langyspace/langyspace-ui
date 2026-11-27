import { describe, expect, it, vi } from 'vitest'
import { playPreparedAudio } from '../../src/internal/playPreparedAudio'
const fixture = () => {
  const audio = {
    error: null as { code: number } | null,
    onerror: null as (() => void) | null,
    play: vi.fn(() => Promise.resolve()),
    load: vi.fn(() => {
      audio.error = null
    }),
  }
  const onFailure = vi.fn(),
    onStarted = vi.fn(),
    isCurrent = vi.fn(() => true)
  return {
    audio,
    element: audio as unknown as HTMLAudioElement,
    onFailure,
    onStarted,
    isCurrent,
  }
}
const settle = async () => {
  await Promise.resolve()
  await Promise.resolve()
}

describe('Owned native media recovery', () => {
  it('reloads once after an actual transient media error, preserving the element and handlers', async () => {
    const f = fixture()
    playPreparedAudio(f.element, f)
    f.audio.error = { code: 2 }
    f.audio.onerror?.()
    await settle()
    expect(f.audio.load).toHaveBeenCalledOnce()
    expect(f.audio.play).toHaveBeenCalledTimes(2)
    expect(f.onFailure).not.toHaveBeenCalled()
    expect(f.onStarted).toHaveBeenCalledOnce()
  })
  it('reports a persistent failure once without an infinite load/retry loop', () => {
    const f = fixture()
    playPreparedAudio(f.element, f)
    f.audio.error = { code: 4 }
    f.audio.onerror?.()
    f.audio.error = { code: 4 }
    f.audio.onerror?.()
    f.audio.onerror?.()
    expect(f.audio.load).toHaveBeenCalledOnce()
    expect(f.audio.play).toHaveBeenCalledTimes(2)
    expect(f.onFailure).toHaveBeenCalledOnce()
  })
  it('ignores queued old media errors after load cleared MediaError', () => {
    const f = fixture()
    playPreparedAudio(f.element, f)
    f.audio.onerror?.()
    expect(f.audio.load).not.toHaveBeenCalled()
    expect(f.onFailure).not.toHaveBeenCalled()
  })
  it('does not recover or report an obsolete request', async () => {
    const f = fixture()
    f.audio.play.mockRejectedValueOnce(
      new DOMException('offline', 'NetworkError'),
    )
    playPreparedAudio(f.element, f)
    f.isCurrent.mockReturnValue(false)
    await settle()
    f.audio.error = { code: 2 }
    f.audio.onerror?.()
    expect(f.audio.load).not.toHaveBeenCalled()
    expect(f.onFailure).not.toHaveBeenCalled()
  })
  it('ignores an old rejection after retry already started', async () => {
    const f = fixture()
    let reject!: (e: Error) => void
    f.audio.play.mockImplementationOnce(
      () =>
        new Promise((_, r) => {
          reject = r
        }),
    )
    playPreparedAudio(f.element, f)
    f.audio.error = { code: 2 }
    f.audio.onerror?.()
    reject(new DOMException('old load', 'NotSupportedError'))
    await settle()
    expect(f.audio.play).toHaveBeenCalledTimes(2)
    expect(f.onFailure).not.toHaveBeenCalled()
  })
  it('a newer play/resume owns the element instead of an older rejected promise', async () => {
    const f = fixture()
    let reject!: (e: Error) => void
    f.audio.play.mockImplementationOnce(
      () =>
        new Promise((_, r) => {
          reject = r
        }),
    )
    playPreparedAudio(f.element, f)
    playPreparedAudio(f.element, f)
    reject(new Error('old'))
    await settle()
    expect(f.onFailure).not.toHaveBeenCalled()
    expect(f.audio.load).not.toHaveBeenCalled()
  })
  it('does not restart intentionally cancelled or paused playback', async () => {
    const f = fixture()
    f.audio.play.mockRejectedValueOnce(new DOMException('paused', 'AbortError'))
    playPreparedAudio(f.element, f)
    await settle()
    expect(f.audio.load).not.toHaveBeenCalled()
    expect(f.onFailure).not.toHaveBeenCalled()
  })
  it('reports permission denial honestly without repeated autoplay attempts', async () => {
    const f = fixture()
    f.audio.play.mockRejectedValueOnce(
      new DOMException('gesture required', 'NotAllowedError'),
    )
    playPreparedAudio(f.element, f)
    await settle()
    expect(f.audio.play).toHaveBeenCalledOnce()
    expect(f.audio.load).not.toHaveBeenCalled()
    expect(f.onFailure).toHaveBeenCalledOnce()
  })
})
