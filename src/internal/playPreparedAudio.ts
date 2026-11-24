import type { PreparedAudioPlaybackOptions } from './playPreparedAudio.types'

// A newer play/resume call on the same element invalidates the previous promise as well.
const owners = new WeakMap<HTMLMediaElement, object>()

/** Native media only. Recover once from a failed preload without replaying cancelled requests. */
export function playPreparedAudio(
  audio: HTMLAudioElement,
  { isCurrent, onFailure, onStarted }: PreparedAudioPlaybackOptions,
) {
  const owner = {}
  owners.set(audio, owner)
  let attempt = 0
  let retried = false
  let failed = false
  const owns = () => !failed && owners.get(audio) === owner && isCurrent()
  const fail = (reason?: unknown) => {
    if (!owns()) return
    const name =
      reason && typeof reason === 'object' && 'name' in reason
        ? reason.name
        : undefined
    // pause(), page changes and load() can reject an older play; these are not media failures.
    if (name === 'AbortError') return
    const recoverable =
      name !== 'NotAllowedError' &&
      ([2, 3, 4].includes(audio.error?.code ?? 0) ||
        name === 'NetworkError' ||
        name === 'NotSupportedError')
    if (recoverable && !retried) {
      retried = true
      ++attempt
      try {
        // Keep the element that received the user gesture and its event/queue bindings.
        audio.load()
      } catch {
        failed = true
        onFailure()
        return
      }
      play()
      return
    }
    failed = true
    onFailure()
  }
  const play = () => {
    if (!owns()) return
    const transport = ++attempt
    try {
      void audio.play().then(
        () => {
          if (transport === attempt && owns()) onStarted?.()
        },
        (reason: unknown) => {
          if (transport === attempt) fail(reason)
        },
      )
    } catch (reason) {
      if (transport === attempt) fail(reason)
    }
  }
  audio.onerror = () => {
    // load() clears MediaError. Ignore an already queued error from the old load.
    if (audio.error) fail()
  }
  play()
}
