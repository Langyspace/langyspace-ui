import { useCallback, useEffect, useRef, useState } from 'react'
import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'
import {
  playPreparedAudio,
  resetPreparedAudio,
  usePreparedAudio,
} from './usePreparedAudio'

/** Preview transport only: exact prepared clips, no learner progress or fallback speech. */
export function usePracticePlayback(
  active: boolean,
  recordings: readonly PreparedRecording[],
) {
  const prepare = usePreparedAudio(
    active ? recordings.map((clip) => clip.src) : [],
  )
  const current = useRef<HTMLAudioElement | null>(null)
  const version = useRef(0)
  const intent = useRef(false)
  const [playingId, setPlaying] = useState<string>()
  const [paused, setPaused] = useState(false)
  const [error, setError] = useState('')
  const stop = useCallback(() => {
    version.current++
    intent.current = false
    if (current.current) resetPreparedAudio(current.current)
    current.current = null
    setPlaying(undefined)
    setPaused(false)
    setError('')
  }, [])
  const play = useCallback(
    (id: string, text: string, rate = 1, onEnded?: () => void) => {
      stop()
      if (!active) return
      const clip = recordings.find(
        (item) => item.id === id && item.text === text,
      )
      if (!clip) {
        setError('Audio is unavailable. Read with your teacher.')
        return
      }
      const request = version.current
      const audio = prepare(clip.src)
      current.current = audio
      intent.current = true
      audio.playbackRate = rate
      setPlaying(id)
      const owns = () =>
        request === version.current &&
        current.current === audio &&
        intent.current
      const failed = () => {
        if (!owns()) return
        stop()
        setError('Audio could not play. Please try again.')
      }
      audio.onended = () => {
        if (!owns()) return
        stop()
        onEnded?.()
      }
      playPreparedAudio(audio, { isCurrent: owns, onFailure: failed })
    },
    [active, prepare, recordings, stop],
  )
  const togglePause = () => {
    const audio = current.current
    if (!audio) return
    if (!audio.paused) {
      intent.current = false
      audio.pause()
      setPaused(true)
      return
    }
    const request = version.current
    intent.current = true
    playPreparedAudio(audio, {
      isCurrent: () =>
        request === version.current &&
        current.current === audio &&
        intent.current,
      onStarted: () => setPaused(false),
      onFailure: () => {
        stop()
        setError('Audio could not play. Please try again.')
      },
    })
  }
  useEffect(() => stop, [active, stop])
  useEffect(() => {
    const hide = () => {
      if (document.hidden) stop()
    }
    document.addEventListener('visibilitychange', hide)
    return () => {
      document.removeEventListener('visibilitychange', hide)
      stop()
    }
  }, [stop])
  return { play, stop, togglePause, playingId, paused, error }
}
