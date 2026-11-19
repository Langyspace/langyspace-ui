import { useCallback, useEffect, useRef, useState } from 'react'
/** Same single-player/request-guard pattern as the recorded B1/A1 dialogue controllers. */
export function useSceneAudio(
  active: boolean,
  clips: Readonly<Record<string, string>>,
) {
  const playerRef = useRef<HTMLAudioElement | null>(null)
  const requestRef = useRef(0)
  const [playingId, setPlayingId] = useState<string>()
  const [error, setError] = useState('')
  const release = useCallback(() => {
    requestRef.current++
    const audio = playerRef.current
    if (audio) {
      audio.onended = audio.onerror = audio.onplaying = null
      audio.pause()
      audio.removeAttribute('src')
      audio.load()
    }
    playerRef.current = null
  }, [])
  const stop = useCallback(() => {
    release()
    setPlayingId(undefined)
    setError('')
  }, [release])
  const play = useCallback(
    (id: string) => {
      stop()
      if (!active || !clips[id]) return
      const token = requestRef.current
      const audio = new Audio(clips[id])
      playerRef.current = audio
      setPlayingId(id)
      const fail = () => {
        if (token !== requestRef.current) return
        release()
        setPlayingId(undefined)
        setError('Não foi possível tocar o áudio. Tente novamente.')
      }
      audio.onerror = fail
      audio.onended = () => {
        if (token === requestRef.current) stop()
      }
      void audio.play().catch(fail)
    },
    [active, clips, release, stop],
  )
  // Changing pages releases the previous page's external playerRef and its UI state.
  useEffect(() => stop, [active, stop])
  useEffect(() => {
    const hide = () => {
      if (document.hidden) stop()
    }
    document.addEventListener('visibilitychange', hide)
    return () => {
      document.removeEventListener('visibilitychange', hide)
      release()
    }
  }, [release, stop])
  return { play, stop, playingId, error }
}
