import { useCallback, useEffect, useRef, useState } from 'react'
import type { SpeechLine } from './useLessonSpeech.types'
export function useLessonSpeech() {
  const [playingId, setPlayingId] = useState<string>()
  const [paused, setPaused] = useState(false)
  const [error, setError] = useState('')
  const version = useRef(0)
  const stop = useCallback(() => {
    version.current++
    if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    setPlayingId(undefined)
    setPaused(false)
    setError('')
  }, [])
  const speak = useCallback(
    (lines: readonly SpeechLine[]) => {
      stop()
      if (!('speechSynthesis' in window)) {
        setError('Áudio indisponível. Leia a frase com a sua professora.')
        return
      }
      setError('')
      const current = version.current
      const run = (index: number) => {
        if (current !== version.current) return
        const line = lines[index]
        if (!line) {
          setPlayingId(undefined)
          return
        }
        const utterance = new SpeechSynthesisUtterance(line.text)
        utterance.lang = 'en-US'
        utterance.rate = line.rate ?? 0.92
        const voices = window.speechSynthesis
          .getVoices()
          .filter((voice) => voice.lang === 'en-US')
        const voice =
          voices[
            (line.speaker === 'kim' ? 1 : line.speaker === 'leo' ? 2 : 0) %
              Math.max(1, voices.length)
          ]
        const officer =
          line.speaker === 'officer'
            ? voices.find((option) =>
                /\b(David|Guy|Daniel|Alex|Fred|Tom|Male)\b/i.test(option.name),
              )
            : undefined
        const selectedVoice = officer ?? voice
        if (selectedVoice) utterance.voice = selectedVoice
        if (line.speaker === 'officer') utterance.pitch = 0.86
        utterance.onstart = () => {
          if (current === version.current) setPlayingId(line.id)
        }
        utterance.onend = () => run(index + 1)
        utterance.onerror = () => {
          if (current === version.current) {
            setPlayingId(undefined)
            setError('Não foi possível tocar o áudio. Tente novamente.')
          }
        }
        window.speechSynthesis.speak(utterance)
      }
      run(0)
    },
    [stop],
  )
  useEffect(
    () => () => {
      version.current++
      if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    },
    [],
  )
  const togglePause = () => {
    if (!('speechSynthesis' in window)) return
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume()
      setPaused(false)
    } else {
      window.speechSynthesis.pause()
      setPaused(true)
    }
  }
  return { speak, stop, playingId, error, paused, togglePause }
}
