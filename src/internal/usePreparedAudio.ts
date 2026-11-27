import { useCallback, useEffect, useRef } from 'react'

/** Stop playback without discarding the recording already buffered by the browser. */
export function resetPreparedAudio(audio: HTMLAudioElement) {
  audio.onended = audio.onerror = audio.onplaying = null
  audio.onpause = audio.onwaiting = null
  audio.pause()
  try {
    audio.currentTime = 0
  } catch {
    // A recording that is still loading starts at the beginning automatically.
  }
}

/** Load recordings before the gesture and reuse their native decoders on click. */
export function usePreparedAudio(sources: readonly string[]) {
  const pool = useRef(new Map<string, HTMLAudioElement>())
  const prepare = useCallback((src: string) => {
    let audio = pool.current.get(src)
    if (!audio) {
      audio = new Audio()
      audio.preload = 'auto'
      audio.src = src
      pool.current.set(src, audio)
      audio.load()
    }
    return audio
  }, [])
  useEffect(() => {
    const owned = new Set(sources.filter(Boolean))
    for (const [src, audio] of pool.current) {
      if (owned.has(src)) continue
      resetPreparedAudio(audio)
      audio.removeAttribute('src')
      audio.load()
      pool.current.delete(src)
    }
    for (const src of owned) prepare(src)
  }, [sources, prepare])
  useEffect(() => {
    const recordings = pool.current
    return () => {
      for (const audio of recordings.values()) {
        resetPreparedAudio(audio)
        audio.removeAttribute('src')
        audio.load()
      }
      recordings.clear()
    }
  }, [])
  return useCallback(
    (src: string) => {
      const audio = prepare(src)
      if (audio.error) audio.load()
      return audio
    },
    [prepare],
  )
}
