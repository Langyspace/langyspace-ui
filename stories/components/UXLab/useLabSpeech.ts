import { useCallback, useEffect, useRef, useState } from 'react'
export function useLabSpeech() {
  const [status, setStatus] = useState('')
  const [playing, setPlaying] = useState(false)
  const generation = useRef(0)
  useEffect(
    () => () => {
      generation.current++
      window.speechSynthesis?.cancel()
    },
    [],
  )
  const stop = useCallback(() => {
    generation.current++
    window.speechSynthesis?.cancel()
    setPlaying(false)
  }, [])
  const play = useCallback(
    (
      text: string,
      rate = 0.9,
      onWord?: (position: number) => void,
      onComplete?: () => void,
    ) => {
      stop()
      if (!window.speechSynthesis) {
        setStatus('Áudio de demonstração indisponível neste navegador.')
        return
      }
      const token = generation.current
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.rate = rate
      utterance.onboundary = (event) => {
        if (generation.current === token) onWord?.(event.charIndex)
      }
      utterance.onend = () => {
        if (generation.current === token) {
          setPlaying(false)
          onComplete?.()
        }
      }
      utterance.onerror = () => {
        if (generation.current === token) {
          setPlaying(false)
          setStatus('Áudio de demonstração indisponível neste navegador.')
        }
      }
      setStatus('')
      setPlaying(true)
      window.speechSynthesis.speak(utterance)
    },
    [stop],
  )
  return { play, stop, playing, status }
}
