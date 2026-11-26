import { feedbackSoundDesign as design } from '../foundations/audio/feedbackSoundDesign'
import type { FeedbackSoundKind } from './feedbackSounds.types'
import { questionFeedbackSamples } from './questionFeedbackSamples'

let enabled = true
const listeners = new Set<() => void>()
let context: AudioContext | undefined
let current:
  | {
      gain: GainNode
      sources: AudioScheduledSourceNode[]
      kind: FeedbackSoundKind
    }
  | undefined
const observedMedia = new WeakSet<HTMLMediaElement>()
const playingMedia = new Set<HTMLMediaElement>()

/** Observe detached prepared recordings as well as visible native players. */
export function observeFeedbackMedia(media: HTMLMediaElement) {
  // Optional feedback must never block a consumer's minimal media adapter.
  if (observedMedia.has(media) || typeof media.addEventListener !== 'function')
    return
  observedMedia.add(media)
  const clear = () => playingMedia.delete(media)
  media.addEventListener('play', () => {
    playingMedia.add(media)
    if (current?.kind === 'hint' || current?.kind === 'question')
      stopFeedbackSounds()
  })
  for (const event of ['pause', 'ended', 'error', 'emptied']) {
    media.addEventListener(event, clear)
  }
}

function mediaIsPlaying() {
  for (const media of playingMedia) {
    if (media.paused || media.ended || media.error) playingMedia.delete(media)
  }
  return playingMedia.size > 0
}
let revision = 0
let visibilityListenerAdded = false

export const feedbackSoundsEnabled = () => enabled
export const feedbackSoundsServerSnapshot = () => false
export const subscribeFeedbackSounds = (listener: () => void) => {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function stopFeedbackSounds() {
  revision++
  const active = current
  current = undefined
  if (!active || !context) return
  const end = context.currentTime + 0.008
  active.gain.gain.cancelScheduledValues(context.currentTime)
  active.gain.gain.setTargetAtTime(0, context.currentTime, 0.002)
  for (const source of active.sources) {
    try {
      source.stop(end)
    } catch {
      /* Already ended. */
    }
  }
}

export function setFeedbackSoundsEnabled(value: boolean) {
  if (enabled === value) return
  enabled = value
  if (!value) stopFeedbackSounds()
  for (const listener of listeners) listener()
}

async function play(
  outcome: FeedbackSoundKind,
  acknowledgeMuteControl = false,
) {
  if (
    (!enabled && !acknowledgeMuteControl) ||
    typeof window === 'undefined' ||
    !window.AudioContext
  )
    return
  const quiet = outcome === 'hint' || outcome === 'question'
  if (quiet && mediaIsPlaying()) return
  stopFeedbackSounds()
  const request = revision
  try {
    if (!context || context.state === 'closed') {
      context = new window.AudioContext({ latencyHint: 'interactive' })
      if (!visibilityListenerAdded) {
        document.addEventListener('visibilitychange', () => {
          if (document.hidden) stopFeedbackSounds()
        })
        visibilityListenerAdded = true
      }
    }
    const audio = context
    if (audio.state !== 'running') await audio.resume()
    if (
      (!enabled && !acknowledgeMuteControl) ||
      request !== revision ||
      audio.state !== 'running' ||
      document.hidden
    )
      return
    if (quiet && mediaIsPlaying()) return
    const bus = audio.createGain()
    bus.gain.value =
      design.volume *
      (outcome === 'question'
        ? design.questionGain
        : outcome === 'hint'
          ? design.hintGain
          : 1)
    bus.connect(audio.destination)
    const active = {
      gain: bus,
      sources: [] as AudioScheduledSourceNode[],
      kind: outcome,
    }
    current = active
    const start = audio.currentTime
    if (outcome === 'question') {
      const samples = questionFeedbackSamples(audio.sampleRate)
      const buffer = audio.createBuffer(1, samples.length, audio.sampleRate)
      buffer.getChannelData(0).set(samples)
      const source = audio.createBufferSource()
      source.buffer = buffer
      source.connect(bus)
      active.sources.push(source)
      source.onended = () => {
        source.disconnect()
        bus.disconnect()
        if (current === active) current = undefined
      }
      source.start(start)
      source.stop(start + buffer.duration)
      return
    }
    const notes = design[outcome]
    const harmonics = [1, 2]
    let remaining = notes.length * harmonics.length
    for (const note of notes) {
      for (const harmonic of harmonics) {
        const oscillator = audio.createOscillator()
        const envelope = audio.createGain()
        const at = start + note.start
        const end = at + note.duration
        const peak = design.peak * (harmonic === 1 ? 1 : design.harmonicGain)
        oscillator.type = 'sine'
        oscillator.frequency.value = note.frequency * harmonic
        envelope.gain.setValueAtTime(0, at)
        envelope.gain.linearRampToValueAtTime(peak, at + design.attackSeconds)
        envelope.gain.exponentialRampToValueAtTime(
          peak * 0.35,
          end - design.releaseSeconds,
        )
        envelope.gain.linearRampToValueAtTime(0, end)
        oscillator.connect(envelope)
        envelope.connect(bus)
        active.sources.push(oscillator)
        oscillator.onended = () => {
          oscillator.disconnect()
          envelope.disconnect()
          if (--remaining === 0) {
            bus.disconnect()
            if (current === active) current = undefined
          }
        }
        oscillator.start(at)
        oscillator.stop(end)
      }
    }
  } catch {
    // Audio availability never controls answer evaluation or its visual feedback.
    if (request === revision) stopFeedbackSounds()
  }
}

export function playFeedbackSound(outcome: FeedbackSoundKind) {
  void play(outcome)
}

/** Only the explicit sound switch acknowledges its own change after applying mute immediately. */
export function setFeedbackSoundsEnabledFromControl(value: boolean) {
  if (enabled === value) return
  setFeedbackSoundsEnabled(value)
  void play('hint', true)
}
