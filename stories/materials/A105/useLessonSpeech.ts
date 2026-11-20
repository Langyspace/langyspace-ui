import { useCallback, useEffect, useRef, useState } from 'react'
import provenance from './audio-provenance.json'
import {
  resetPreparedAudio,
  usePreparedAudio,
} from '../shared/usePreparedAudio'
import type { SpeechLine } from './A105.types'

const assets = import.meta.glob('./assets/audio/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const recordings = provenance.items
  .map((clip) => assets['./' + clip.file])
  .filter((src): src is string => Boolean(src))
const findRecording = (line: SpeechLine) => {
  const clip = provenance.items.find(
    (item) => item.id === line.id && item.text === line.text,
  )
  return clip && assets['./' + clip.file]
}

/** A1.05 resolves only exact text/ID matches from its ElevenLabs manifest. */
export function useLessonSpeech() {
  const preparedAudio = usePreparedAudio(recordings)
  const [playingId, setPlayingId] = useState<string>()
  const [paused, setPaused] = useState(false)
  const [error, setError] = useState('')
  const version = useRef(0)
  const current = useRef<HTMLAudioElement | null>(null)
  const stop = useCallback(() => {
    version.current++
    if (current.current) resetPreparedAudio(current.current)
    current.current = null
    setPlayingId(undefined)
    setPaused(false)
    setError('')
  }, [])
  const speak = useCallback(
    (lines: readonly SpeechLine[]) => {
      stop()
      const request = version.current
      const run = (index: number) => {
        if (request !== version.current) return
        const line = lines[index]
        if (!line) {
          current.current = null
          setPlayingId(undefined)
          return
        }
        const src = findRecording(line)
        if (!src) {
          setPlayingId(undefined)
          setError('Audio is unavailable. Read with your teacher.')
          return
        }
        if (current.current) resetPreparedAudio(current.current)
        const audio = preparedAudio(src)
        current.current = audio
        const fail = () => {
          if (request !== version.current || current.current !== audio) return
          setPlayingId(undefined)
          setError('Audio could not play. Please try again.')
        }
        audio.onplaying = () => {
          if (request !== version.current) return
          setPlayingId(line.id)
          setPaused(false)
        }
        audio.onerror = fail
        audio.onended = () => run(index + 1)
        void audio.play().catch(fail)
      }
      run(0)
    },
    [stop, preparedAudio],
  )
  useEffect(
    () => () => {
      version.current++
      if (current.current) resetPreparedAudio(current.current)
    },
    [],
  )
  const togglePause = () => {
    const audio = current.current
    if (!audio) return
    if (audio.paused) {
      void audio
        .play()
        .catch(() => setError('Audio could not play. Please try again.'))
      setPaused(false)
    } else {
      audio.pause()
      setPaused(true)
    }
  }
  return {
    speak,
    stop,
    playingId,
    error,
    paused,
    togglePause,
    has: (line: SpeechLine) => Boolean(findRecording(line)),
  }
}
