import { useCallback, useEffect, useRef, useState } from 'react'
import {
  resetPreparedAudio,
  usePreparedAudio,
} from '../shared/usePreparedAudio'
import type { SpeechLine } from './B101.types'
import clip0 from './assets/audio/D.1.mp3'
import clip1 from './assets/audio/D.2.mp3'
import clip2 from './assets/audio/D.3.mp3'
import clip3 from './assets/audio/D.4.mp3'
import clip4 from './assets/audio/D.5.mp3'
import clip5 from './assets/audio/D.6.mp3'
import clip6 from './assets/audio/D.7.mp3'
import clip7 from './assets/audio/D.8.mp3'
import clip8 from './assets/audio/D.9.mp3'
import clip9 from './assets/audio/D.10.mp3'
import clip10 from './assets/audio/D.11.mp3'
const sources: Readonly<Record<string, string>> = {
  'D.1': clip0,
  'D.2': clip1,
  'D.3': clip2,
  'D.4': clip3,
  'D.5': clip4,
  'D.6': clip5,
  'D.7': clip6,
  'D.8': clip7,
  'D.9': clip8,
  'D.10': clip9,
  'D.11': clip10,
}
/** Recorded ElevenLabs clips only; one native element owns the dialogue queue. */
export function useB101Audio() {
  const preparedAudio = usePreparedAudio(Object.values(sources))
  const player = useRef<HTMLAudioElement | null>(null)
  const request = useRef(0)
  const [playingId, setPlayingId] = useState<string>()
  const [paused, setPaused] = useState(false)
  const [error, setError] = useState('')
  const stop = useCallback(() => {
    request.current++
    if (player.current) {
      resetPreparedAudio(player.current)
      player.current = null
    }
    setPlayingId(undefined)
    setPaused(false)
    setError('')
  }, [])
  const speak = useCallback(
    (lines: readonly SpeechLine[]) => {
      stop()
      const token = request.current
      const run = (index: number) => {
        if (token !== request.current) return
        const line = lines[index]
        if (!line) {
          setPlayingId(undefined)
          return
        }
        const src = sources[line.id]
        if (!src) {
          setError('Audio unavailable. Try another clip.')
          return
        }
        if (player.current) resetPreparedAudio(player.current)
        const audio = preparedAudio(src)
        player.current = audio
        audio.playbackRate = 1
        setPlayingId(line.id)
        setPaused(false)
        const fail = () => {
          if (token === request.current) {
            setPlayingId(undefined)
            setError('Could not play the audio. Try again.')
          }
        }
        audio.onended = () => run(index + 1)
        audio.onerror = fail
        void audio.play().catch(fail)
      }
      run(0)
    },
    [stop, preparedAudio],
  )
  const togglePause = () => {
    const audio = player.current
    if (!audio || !playingId) return
    if (audio.paused) {
      const token = request.current
      setPaused(false)
      void audio.play().catch(() => {
        if (token === request.current) {
          setPlayingId(undefined)
          setError('Could not resume the audio. Try again.')
        }
      })
    } else {
      audio.pause()
      setPaused(true)
    }
  }
  useEffect(
    () => () => {
      request.current++
      if (player.current) {
        resetPreparedAudio(player.current)
      }
    },
    [],
  )
  return { speak, stop, playingId, paused, togglePause, error }
}
