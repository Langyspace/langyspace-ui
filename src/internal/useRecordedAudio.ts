import { useCallback, useEffect, useRef, useState } from 'react'
import { playPreparedAudio } from './playPreparedAudio'
import { resetPreparedAudio, usePreparedAudio } from './usePreparedAudio'
import type {
  PreparedRecording,
  RecordedAudioLine,
} from './useRecordedAudio.types'

/** Play the selected recording within the gesture, reusing its native buffer. */
export function useRecordedAudio(
  clips: readonly PreparedRecording[],
  firstLine?: RecordedAudioLine,
) {
  const recordings = clips.map((clip) => clip.src)
  const findRecording = useCallback(
    (line: RecordedAudioLine) =>
      clips.find((clip) => clip.id === line.id && clip.text === line.text)?.src,
    [clips],
  )
  // Fetching every recording on mount makes the first click compete with the entire lesson.
  const firstSource = firstLine && findRecording(firstLine)
  const preparedAudio = usePreparedAudio(
    recordings,
    firstSource ? [firstSource] : [],
  )
  const [playingId, setPlayingId] = useState<string>()
  const [paused, setPaused] = useState(false)
  const [error, setError] = useState('')
  const version = useRef(0)
  const current = useRef<HTMLAudioElement | null>(null)
  const pending = useRef<readonly RecordedAudioLine[] | undefined>(undefined)
  const stop = useCallback(() => {
    version.current++
    pending.current = undefined
    if (current.current) resetPreparedAudio(current.current)
    current.current = null
    setPlayingId(undefined)
    setPaused(false)
    setError('')
  }, [])
  const speak = useCallback(
    (lines: readonly RecordedAudioLine[]) => {
      const waiting = pending.current
      if (
        waiting &&
        current.current &&
        !current.current.paused &&
        !current.current.error &&
        waiting.length === lines.length &&
        lines.every(
          (line, i) =>
            line.id === waiting[i]?.id && line.text === waiting[i]?.text,
        )
      )
        return
      stop()
      pending.current = lines
      const request = version.current
      const run = (index: number) => {
        if (request !== version.current) return
        const line = lines[index]
        if (!line) {
          current.current = null
          pending.current = undefined
          setPlayingId(undefined)
          return
        }
        const src = findRecording(line)
        if (!src) {
          pending.current = undefined
          setPlayingId(undefined)
          setError('Audio is unavailable. Read with your teacher.')
          return
        }
        if (current.current) resetPreparedAudio(current.current)
        const audio = preparedAudio(src)
        current.current = audio
        const fail = () => {
          if (request !== version.current || current.current !== audio) return
          pending.current = undefined
          setPlayingId(undefined)
          setError('Audio could not play. Please try again.')
        }
        audio.onplaying = () => {
          if (request !== version.current || current.current !== audio) return
          pending.current = undefined
          setPlayingId(line.id)
          setPaused(false)
          const next = lines[index + 1]
          const nextSrc = next && findRecording(next)
          if (nextSrc) preparedAudio(nextSrc)
        }
        audio.onended = () => run(index + 1)
        playPreparedAudio(audio, {
          isCurrent: () =>
            request === version.current && current.current === audio,
          onFailure: fail,
        })
      }
      run(0)
    },
    [stop, preparedAudio, findRecording],
  )
  const scope = JSON.stringify(clips)
  useEffect(() => stop, [scope, stop])
  const togglePause = () => {
    const audio = current.current
    if (!audio) return
    pending.current = undefined
    if (audio.paused) {
      const request = version.current
      playPreparedAudio(audio, {
        isCurrent: () =>
          request === version.current && current.current === audio,
        onFailure: () => setError('Audio could not play. Please try again.'),
      })
      setPaused(false)
    } else {
      audio.pause()
      setPaused(true)
    }
  }
  return {
    speak,
    stop,
    playingId,
    error,
    paused,
    togglePause,
    has: (line: RecordedAudioLine) => Boolean(findRecording(line)),
  }
}
