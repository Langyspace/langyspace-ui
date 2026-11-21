import { useCallback, useEffect, useRef, useState } from 'react'
import { audio } from './Frontend.data'
/** A single native element owns every prerecorded clip in the lesson. */
export function useFrontendAudio() {
  const audioRef = useRef<HTMLAudioElement>(null),
    queue = useRef<string[]>([]),
    request = useRef(0),
    intent = useRef(false),
    current = useRef<string | undefined>(undefined),
    last = useRef<string[]>([])
  const [playingId, setPlayingId] = useState<string>(),
    [status, setStatus] = useState<
      'idle' | 'loading' | 'playing' | 'paused' | 'error'
    >('idle')
  const begin = useCallback(async (id: string) => {
    const element = audioRef.current
    if (!element) return
    const token = ++request.current
    current.current = id
    intent.current = true
    setPlayingId(id)
    setStatus('loading')
    element.pause()
    element.src = audio(id)
    element.playbackRate = 1
    try {
      await element.play()
    } catch (error) {
      if (
        token === request.current &&
        (!(error instanceof DOMException) || error.name !== 'AbortError')
      ) {
        intent.current = false
        setStatus('error')
      }
    }
  }, [])
  const stop = useCallback(() => {
    intent.current = false
    request.current++
    queue.current = []
    current.current = undefined
    audioRef.current?.pause()
    setPlayingId(undefined)
    setStatus('idle')
  }, [])
  const play = useCallback(
    (ids: string[]) => {
      const element = audioRef.current
      if (!element || !ids.length) return
      if (ids.includes(current.current ?? '') && intent.current) {
        intent.current = false
        request.current++
        element.pause()
        setStatus('paused')
        return
      }
      if (
        ids.includes(current.current ?? '') &&
        !element.ended &&
        element.currentTime > 0 &&
        !element.error
      ) {
        intent.current = true
        const token = ++request.current
        setStatus('loading')
        void element.play().catch(() => {
          if (token === request.current) {
            intent.current = false
            setStatus('error')
          }
        })
        return
      }
      last.current = ids
      queue.current = ids.slice(1)
      void begin(ids[0]!)
    },
    [begin],
  )
  const invalidate = useCallback(() => {
    intent.current = false
    request.current++
  }, [])
  useEffect(() => {
    const element = audioRef.current
    const hide = () => {
      if (document.hidden) {
        intent.current = false
        request.current++
        element?.pause()
        setStatus((value) => (value === 'idle' ? 'idle' : 'paused'))
      }
    }
    document.addEventListener('visibilitychange', hide)
    return () => {
      document.removeEventListener('visibilitychange', hide)
      invalidate()
      element?.pause()
    }
  }, [invalidate])
  return {
    audioRef,
    playingId,
    status,
    play,
    stop,
    retry: () => {
      queue.current = last.current.slice(1)
      if (last.current[0]) void begin(last.current[0])
    },
    events: {
      onPlaying: () => {
        if (intent.current) setStatus('playing')
        else audioRef.current?.pause()
      },
      onWaiting: () => {
        if (intent.current) setStatus('loading')
      },
      onPause: () => {
        if (!intent.current && current.current) setStatus('paused')
      },
      onEnded: () => {
        const next = queue.current.shift()
        if (next) void begin(next)
        else {
          intent.current = false
          current.current = undefined
          setPlayingId(undefined)
          setStatus('idle')
        }
      },
      onError: () => {
        if (current.current) {
          intent.current = false
          request.current++
          setStatus('error')
        }
      },
    },
  }
}
