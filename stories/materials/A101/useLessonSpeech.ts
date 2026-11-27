import { useCallback, useEffect, useRef, useState } from 'react'
import provenance from './audio-provenance.json'
import {
  playPreparedAudio,
  resetPreparedAudio,
  usePreparedAudio,
} from '../shared/usePreparedAudio'
import type { SpeechLine } from './A101.types'

const assets = import.meta.glob('./assets/**/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const recordings = [...provenance.items]
  .sort(
    (a, b) => Number(!a.id.startsWith('ph_')) - Number(!b.id.startsWith('ph_')),
  )
  .map((clip) => assets['./' + clip.file])
  .filter((src): src is string => Boolean(src))

export function useLessonSpeech() {
  const preparedAudio = usePreparedAudio(recordings)
  const [playingId, setPlayingId] = useState<string>()
  const [paused, setPaused] = useState(false)
  const [error, setError] = useState('')
  const version = useRef(0)
  const current = useRef<HTMLAudioElement | null>(null)
  const stop = useCallback(() => {
    version.current++
    const audio = current.current
    if (audio) {
      resetPreparedAudio(audio)
    }
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
        const clip = provenance.items.find(
          (item) => item.id === line.id && item.text === line.text,
        )
        const src = clip && assets['./' + clip.file]
        if (!src) {
          setError('Áudio indisponível. Leia com a professora.')
          return
        }
        if (current.current) resetPreparedAudio(current.current)
        const audio = preparedAudio(src)
        current.current = audio
        const fail = () => {
          if (request !== version.current || current.current !== audio) return
          setPlayingId(undefined)
          setError('Não foi possível tocar o áudio. Tente novamente.')
        }
        audio.onplaying = () => {
          if (request === version.current) {
            setPlayingId(line.id)
            setPaused(false)
          }
        }
        audio.onended = () => run(index + 1)
        playPreparedAudio(audio, {
          isCurrent: () =>
            request === version.current && current.current === audio,
          onFailure: fail,
        })
      }
      run(0)
    },
    [stop, preparedAudio],
  )
  useEffect(
    () => () => {
      version.current++
      const audio = current.current
      if (audio) {
        resetPreparedAudio(audio)
      }
    },
    [],
  )
  const togglePause = () => {
    const audio = current.current
    if (!audio) return
    if (audio.paused) {
      const request = version.current
      playPreparedAudio(audio, {
        isCurrent: () =>
          request === version.current && current.current === audio,
        onFailure: () =>
          setError('Não foi possível tocar o áudio. Tente novamente.'),
      })
      setPaused(false)
    } else {
      audio.pause()
      setPaused(true)
    }
  }
  return { speak, stop, playingId, error, paused, togglePause }
}
