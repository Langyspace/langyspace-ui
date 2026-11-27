import { useCallback, useEffect, useRef, useState } from 'react'
import {
  playPreparedAudio,
  resetPreparedAudio,
  usePreparedAudio,
} from '../shared/usePreparedAudio'
import type { LessonSpeech } from '../shared/Lesson.types'
const clips = import.meta.glob<string>('./assets/b201-pair-*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
})
export function useB201Speech(): LessonSpeech {
  const preparedAudio = usePreparedAudio(Object.values(clips))
  const generation = useRef(0)
  const current = useRef<HTMLAudioElement | null>(null)
  const [playingId, setPlayingId] = useState<string>()
  const [paused, setPaused] = useState(false)
  const [error, setError] = useState('')
  const stop = useCallback(() => {
    generation.current++
    const audio = current.current
    if (audio) {
      resetPreparedAudio(audio)
      current.current = null
    }
    setPlayingId(undefined)
    setPaused(false)
    setError('')
  }, [])
  const speak = useCallback<LessonSpeech['speak']>(
    (lines) => {
      stop()
      const line = lines[0]
      if (!line) return
      const src = clips[`./assets/b201-${line.id}.mp3`]
      if (!src) {
        setError('Audio unavailable. Try again.')
        return
      }
      const token = generation.current
      const audio = preparedAudio(src)
      current.current = audio
      audio.onended = () => {
        if (token === generation.current && current.current === audio) {
          setPlayingId(undefined)
          setPaused(false)
        }
      }
      const failed = () => {
        if (token === generation.current && current.current === audio) {
          setPlayingId(undefined)
          setError('Audio unavailable. Try again.')
        }
      }
      setPlayingId(line.id)
      playPreparedAudio(audio, {
        isCurrent: () =>
          token === generation.current && current.current === audio,
        onFailure: failed,
      })
    },
    [stop, preparedAudio],
  )
  useEffect(
    () => () => {
      generation.current++
      if (current.current) resetPreparedAudio(current.current)
    },
    [],
  )
  useEffect(() => {
    const hide = () => {
      if (document.hidden) stop()
    }
    document.addEventListener('visibilitychange', hide)
    return () => document.removeEventListener('visibilitychange', hide)
  }, [stop])
  const togglePause = () => {
    const audio = current.current
    if (!audio) return
    if (audio.paused) {
      const token = generation.current
      playPreparedAudio(audio, {
        isCurrent: () =>
          token === generation.current && current.current === audio,
        onStarted: () => setPaused(false),
        onFailure: () => setError('Audio unavailable. Try again.'),
      })
    } else {
      audio.pause()
      setPaused(true)
    }
  }
  return { speak, stop, playingId, paused, error, togglePause }
}
