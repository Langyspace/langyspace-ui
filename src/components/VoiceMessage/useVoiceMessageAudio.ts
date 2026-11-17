import { useEffect, useRef, useState } from 'react'

/** Count native playing events for new listening passes, never clicks or resumes. */
export function useVoiceMessageAudio(active: boolean) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const mountedRef = useRef(true)
  const intentRef = useRef(false)
  const nextPassRef = useRef(true)
  const attemptRef = useRef(0)
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'playing' | 'paused' | 'ended' | 'error'
  >('idle')
  const [playCount, setPlayCount] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [duration, setDuration] = useState(0)
  const [speed, setSpeed] = useState(1)

  useEffect(() => {
    mountedRef.current = true
    const audio = audioRef.current
    const onVisibilityChange = () => {
      if (document.hidden) {
        intentRef.current = false
        attemptRef.current += 1
        audio?.pause()
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
      mountedRef.current = false
      intentRef.current = false
      attemptRef.current += 1
      audio?.pause()
    }
  }, [])

  useEffect(() => {
    if (!active) {
      intentRef.current = false
      attemptRef.current += 1
      audioRef.current?.pause()
    }
  }, [active])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio || !active) return
    if (intentRef.current) {
      intentRef.current = false
      attemptRef.current += 1
      audio.pause()
      setStatus('paused')
      return
    }
    const request = ++attemptRef.current
    intentRef.current = true
    setStatus('loading')
    try {
      if (status === 'error') audio.load()
      if (audio.ended) audio.currentTime = 0
      audio.playbackRate = speed
      await audio.play()
    } catch {
      if (!mountedRef.current || request !== attemptRef.current) return
      intentRef.current = false
      setStatus('error')
    }
  }

  return {
    audioRef,
    status,
    playCount,
    elapsed,
    duration,
    speed,
    toggle,
    changeSpeed: () => {
      const value = speed === 1 ? 0.75 : 1
      if (audioRef.current) audioRef.current.playbackRate = value
      setSpeed(value)
    },
    events: {
      onPlaying: () => {
        if (!mountedRef.current || !intentRef.current) {
          audioRef.current?.pause()
          return
        }
        if (nextPassRef.current) {
          nextPassRef.current = false
          setPlayCount((count) => count + 1)
        }
        setStatus('playing')
      },
      onPause: () => {
        if (audioRef.current?.ended || audioRef.current?.error) return
        intentRef.current = false
        setStatus('paused')
      },
      onEnded: () => {
        nextPassRef.current = true
        intentRef.current = false
        setStatus('ended')
      },
      onWaiting: () => {
        if (intentRef.current) setStatus('loading')
      },
      onError: () => {
        intentRef.current = false
        attemptRef.current += 1
        setStatus('error')
      },
      onTimeUpdate: () => {
        const value = audioRef.current?.currentTime ?? 0
        setElapsed(Number.isFinite(value) ? value : 0)
      },
      onLoadedMetadata: () => {
        const value = audioRef.current?.duration ?? 0
        setDuration(Number.isFinite(value) ? value : 0)
        if (audioRef.current) audioRef.current.playbackRate = speed
      },
    },
  }
}
