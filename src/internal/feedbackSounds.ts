import { feedbackSoundDesign as design } from '../foundations/audio/feedbackSoundDesign'
import type { FeedbackSoundOutcome } from '../components/Quiz/useFeedbackSounds.types'

let enabled = true
const listeners = new Set<() => void>()
let context: AudioContext | undefined
let current: { gain: GainNode; oscillators: OscillatorNode[] } | undefined
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
  for (const oscillator of active.oscillators) {
    try {
      oscillator.stop(end)
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

async function play(outcome: FeedbackSoundOutcome) {
  if (!enabled || typeof window === 'undefined' || !window.AudioContext) return
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
      !enabled ||
      request !== revision ||
      audio.state !== 'running' ||
      document.hidden
    )
      return
    const bus = audio.createGain()
    bus.gain.value = design.volume
    bus.connect(audio.destination)
    const active = { gain: bus, oscillators: [] as OscillatorNode[] }
    current = active
    const start = audio.currentTime
    const notes = design[outcome]
    let remaining = notes.length * 2
    for (const note of notes) {
      for (const harmonic of [1, 2]) {
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
        active.oscillators.push(oscillator)
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

export function playFeedbackSound(outcome: FeedbackSoundOutcome) {
  void play(outcome)
}
