import { useCallback, useEffect, useRef, useState } from 'react'
import { routineRecordings } from './InfluencerRoutine.recordings'

/** One native player across both previews: leaving/changing activity always cancels the previous clip. */
export function useRoutinePracticeAudio(active: boolean) {
  const current = useRef<HTMLAudioElement | null>(null)
  const version = useRef(0)
  const [playingId, setPlaying] = useState<string>()
  const [error, setError] = useState('')
  const stop = useCallback(() => {
    version.current++
    current.current?.pause()
    current.current = null
    setPlaying(undefined)
    setError('')
  }, [])
  useEffect(() => {
    if (!active) stop()
    return stop
  }, [active, stop])
  const play = (id: string, text: string, speed = 1, ended?: () => void) => {
    if (playingId === id) {
      stop()
      return
    }
    stop()
    const clip = routineRecordings.find(
      (item) => item.id === id && item.text === text,
    )
    if (!clip || !active) {
      setError('Audio unavailable')
      return
    }
    const token = version.current
    const audio = new Audio(clip.src)
    current.current = audio
    audio.playbackRate = speed
    audio.onplaying = () => {
      if (token === version.current) setPlaying(id)
    }
    audio.onended = () => {
      if (token !== version.current) return
      current.current = null
      setPlaying(undefined)
      ended?.()
    }
    const fail = () => {
      if (token !== version.current) return
      setPlaying(undefined)
      setError('Audio could not play. Try again')
    }
    audio.onerror = fail
    void audio.play().catch(fail)
  }
  return { play, stop, playingId, error }
}
