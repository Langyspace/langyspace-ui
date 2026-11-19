import { useCallback, useEffect, useRef, useState } from 'react'
import { audioSources } from './C101.assets'
export const audioUrl = (id: string) => audioSources[id]
export function useC101Audio() {
  const [playingId, setPlayingId] = useState<string>()
  const [paused, setPaused] = useState(false)
  const [error, setError] = useState('')
  const element = useRef<HTMLAudioElement | null>(null)
  const revision = useRef(0)
  const stop = useCallback(() => {
    revision.current++
    element.current?.pause()
    element.current = null
    setPlayingId(undefined)
    setPaused(false)
    setError('')
  }, [])
  const play = useCallback(
    (ids: readonly string[]) => {
      stop()
      const current = revision.current
      const run = (i: number) => {
        if (current !== revision.current) return
        const id = ids[i]
        if (!id) {
          setPlayingId(undefined)
          element.current = null
          return
        }
        const src = audioUrl(id)
        if (!src) {
          setError('The recording is unavailable. Try again.')
          return
        }
        const audio = new Audio(src)
        element.current = audio
        audio.onended = () => run(i + 1)
        const failed = () => {
          if (current !== revision.current) return
          element.current?.pause()
          element.current = null
          setPlayingId(undefined)
          setPaused(false)
          setError('The recording could not play. Try again.')
        }
        audio.onerror = failed
        setPlayingId(id)
        setPaused(false)
        void audio.play().catch(failed)
      }
      run(0)
    },
    [stop],
  )
  const togglePause = () => {
    if (!element.current) return
    if (element.current.paused) {
      void element.current
        .play()
        .then(() => setPaused(false))
        .catch(() => setError('The recording could not play. Try again.'))
    } else {
      element.current.pause()
      setPaused(true)
    }
  }
  useEffect(
    () => () => {
      revision.current++
      element.current?.pause()
    },
    [],
  )
  return { play, stop, togglePause, playingId, paused, error }
}
