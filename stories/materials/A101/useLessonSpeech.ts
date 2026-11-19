import { useCallback, useEffect, useRef, useState } from 'react'
import provenance from './audio-provenance.json'
import type { SpeechLine } from './A101.types'

const assets = import.meta.glob('./assets/**/*.mp3', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export function useLessonSpeech() {
  const [playingId, setPlayingId] = useState<string>()
  const [paused, setPaused] = useState(false)
  const [error, setError] = useState('')
  const version = useRef(0)
  const current = useRef<HTMLAudioElement | null>(null)
  const stop = useCallback(() => {
    version.current++
    const audio = current.current
    if (audio) {
      audio.onended = audio.onerror = audio.onplaying = null
      audio.pause()
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
        const audio = new Audio(src)
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
        audio.onerror = fail
        audio.onended = () => run(index + 1)
        void audio.play().catch(fail)
      }
      run(0)
    },
    [stop],
  )
  useEffect(
    () => () => {
      version.current++
      const audio = current.current
      if (audio) {
        audio.onended = audio.onerror = audio.onplaying = null
        audio.pause()
      }
    },
    [],
  )
  const togglePause = () => {
    const audio = current.current
    if (!audio) return
    if (audio.paused) {
      void audio
        .play()
        .catch(() =>
          setError('Não foi possível tocar o áudio. Tente novamente.'),
        )
      setPaused(false)
    } else {
      audio.pause()
      setPaused(true)
    }
  }
  return { speak, stop, playingId, error, paused, togglePause }
}
