import { useCallback, useEffect, useRef, useState } from 'react'
import {
  resetPreparedAudio,
  usePreparedAudio,
  playPreparedAudio,
} from './usePreparedAudio'
/** Same single-player/request-guard pattern as the recorded B1/A1 dialogue controllers. */
export function useSceneAudio(
  active: boolean,
  clips: Readonly<Record<string, string>>,
) {
  const preparedAudio = usePreparedAudio(active ? Object.values(clips) : [])
  const playerRef = useRef<HTMLAudioElement | null>(null)
  const requestRef = useRef(0)
  const [playingId, setPlayingId] = useState<string>()
  const [error, setError] = useState('')
  const release = useCallback(() => {
    requestRef.current++
    const audio = playerRef.current
    if (audio) {
      resetPreparedAudio(audio)
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
      const audio = preparedAudio(clips[id]!)
      playerRef.current = audio
      setPlayingId(id)
      const fail = () => {
        if (token !== requestRef.current) return
        release()
        setPlayingId(undefined)
        setError('Não foi possível tocar o áudio. Tente novamente.')
      }
      audio.onended = () => {
        if (token === requestRef.current) stop()
      }
      playPreparedAudio(audio, {
        isCurrent: () =>
          token === requestRef.current && playerRef.current === audio,
        onFailure: fail,
      })
    },
    [active, clips, release, stop, preparedAudio],
  )
  const scope = JSON.stringify(
    Object.entries(clips).sort(([a], [b]) => a.localeCompare(b)),
  )
  // Changing pages releases the previous page's external playerRef and its UI state.
  useEffect(() => stop, [active, scope, stop])
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
