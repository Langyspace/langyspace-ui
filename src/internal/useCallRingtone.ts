import { useCallback, useEffect, useRef, useState } from 'react'
import { resetPreparedAudio, usePreparedAudio } from './usePreparedAudio'
import type { CallRingtoneOptions } from './useCallRingtone.types'

export function useCallRingtone({ src, playing }: CallRingtoneOptions) {
  const prepare = usePreparedAudio(src ? [src] : [])
  const current = useRef<HTMLAudioElement | null>(null)
  const version = useRef(0)
  const [blocked, setBlocked] = useState(false)
  const stop = useCallback(() => {
    version.current++
    if (current.current) resetPreparedAudio(current.current)
    current.current = null
    setBlocked(false)
  }, [])
  const ring = useCallback(() => {
    stop()
    if (!src) return
    const request = version.current
    const audio = prepare(src)
    current.current = audio
    audio.loop = true
    const failed = () => {
      if (request === version.current) setBlocked(true)
    }
    audio.onerror = failed
    void audio.play().catch(failed)
  }, [src, prepare, stop])
  useEffect(() => {
    if (playing) ring()
    else stop()
    return stop
  }, [playing, ring, stop])
  useEffect(() => {
    const visibility = () => {
      if (document.hidden) stop()
      else if (playing) ring()
    }
    document.addEventListener('visibilitychange', visibility)
    return () => document.removeEventListener('visibilitychange', visibility)
  }, [playing, ring, stop])
  return { blocked, ring, stop }
}
