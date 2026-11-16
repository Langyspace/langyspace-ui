import { useCallback, useEffect, useState } from 'react'

export function useMaterialSpeech() {
  const [error, setError] = useState('')
  const [playing, setPlaying] = useState(false)
  const [paused, setPaused] = useState(false)
  const speak = useCallback((text: string, rate = 0.92) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setError('Áudio indisponível. Leia a frase com a sua professora.')
      return
    }
    window.speechSynthesis.cancel()
    setError('')
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = rate
    utterance.onstart = () => {
      setPlaying(true)
      setPaused(false)
    }
    utterance.onend = () => {
      setPlaying(false)
      setPaused(false)
    }
    utterance.onerror = (event) => {
      setPlaying(false)
      setPaused(false)
      if (event.error !== 'canceled' && event.error !== 'interrupted')
        setError('Não foi possível tocar o áudio. Tente novamente.')
    }
    window.speechSynthesis.speak(utterance)
  }, [])
  useEffect(
    () => () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window)
        window.speechSynthesis.cancel()
    },
    [],
  )
  const togglePause = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    if (paused) window.speechSynthesis.resume()
    else window.speechSynthesis.pause()
    setPaused(!paused)
  }
  return { speak, error, playing, paused, togglePause }
}
